import test from 'node:test'
import assert from 'node:assert/strict'
import { modules } from '../src/data.js'
import { completeLessonProgress, createEmptyProgress, findLatestArtifact, loadProgress, resetStoredProgress, sanitizeProgress, updateAnswerProgress, updateArtifactProgress } from '../src/progress.js'

const lesson = modules[0].lessons[0]
const validArtifact = 'Ez egy kellően hosszú, ellenőrizhető teszt-munkatermék, amely biztosan eléri a lecke minimum karakterszámát.'

const readyProgress = () => {
  let progress = createEmptyProgress()
  progress = updateArtifactProgress(progress, lesson, validArtifact, 100)
  lesson.questions.forEach((question, index) => {
    progress = updateAnswerProgress(progress, lesson, index, question.correct)
  })
  return completeLessonProgress(progress, lesson)
}

test('a helyes válaszokkal és munkatermékkel lezárt lecke teljesített lesz', () => {
  assert.deepEqual(readyProgress().lessonIds, [lesson.id])
})

test('egy későbbi hibás válasz érvényteleníti a lezárt leckét', () => {
  const wrongOption = lesson.questions[0].options.findIndex((_, index) => index !== lesson.questions[0].correct)
  const invalidated = updateAnswerProgress(readyProgress(), lesson, 0, wrongOption)
  assert.deepEqual(invalidated.lessonIds, [])
})

test('egy később lerövidített munkatermék érvényteleníti a lezárt leckét', () => {
  const invalidated = updateArtifactProgress(readyProgress(), lesson, 'Túl rövid', 200)
  assert.deepEqual(invalidated.lessonIds, [])
})

test('betöltéskor eltávolítja a már nem igazolható teljesítéseket', () => {
  const stale = { ...createEmptyProgress(), lessonIds: [lesson.id] }
  assert.deepEqual(sanitizeProgress(stale, modules).lessonIds, [])
})

test('hibás helyi JSON esetén biztonságos üres állapotot ad', () => {
  const storage = { getItem: () => '{nem-json' }
  assert.deepEqual(loadProgress(storage, modules), createEmptyProgress())
})

test('a korai verzió csak azonosítóként tárolt teljesítéseit migrálja és megőrzi', () => {
  const storage = {
    getItem: key => key === 'codex-course-progress' ? JSON.stringify([lesson.id]) : null,
  }
  const migrated = loadProgress(storage, modules)
  assert.deepEqual(migrated.lessonIds, [lesson.id])
  assert.deepEqual(migrated.legacyLessonIds, [lesson.id])
  assert.deepEqual(sanitizeProgress(migrated, modules).lessonIds, [lesson.id])
})

test('a migrált legacy teljesítés szerkesztéskor már a jelenlegi feltételek szerint érvényesül', () => {
  const migrated = sanitizeProgress({ lessonIds: [lesson.id], legacyLessonIds: [lesson.id] }, modules)
  const revalidated = updateArtifactProgress(migrated, lesson, 'Túl rövid', 100)
  assert.deepEqual(revalidated.lessonIds, [])
  assert.deepEqual(revalidated.legacyLessonIds, [])
})

test('hibás alakú helyi adatok nem törik el a visszatérő látogatást', () => {
  const malformed = sanitizeProgress({
    lessonIds: 'nem-lista',
    answers: [],
    artifacts: { ismeretlen: 42 },
    promptLab: { prompt: 12, ratings: 'nem-lista' },
  }, modules)
  assert.deepEqual(malformed, createEmptyProgress())
})

test('az időbélyeg alapján valóban a legutóbb módosított munkaterméket választja', () => {
  const first = modules[0].lessons[0]
  const laterInCourse = modules[0].lessons[1]
  const sequence = [{ lesson: first }, { lesson: laterInCourse }]
  const progress = {
    ...createEmptyProgress(),
    artifacts: { [first.id]: validArtifact, [laterInCourse.id]: validArtifact },
    artifactUpdatedAt: { [first.id]: 300, [laterInCourse.id]: 200 },
  }
  assert.equal(findLatestArtifact(sequence, progress).lesson.id, first.id)
})

test('a tárhely törlési hibáját jelzi, de minden kulcsot megpróbál eltávolítani', () => {
  const attempted = []
  const storage = { removeItem: key => { attempted.push(key); if (key.endsWith('v2')) throw new Error('tiltott') } }
  assert.equal(resetStoredProgress(storage), false)
  assert.equal(attempted.length, 3)
})
