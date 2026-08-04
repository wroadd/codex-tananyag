export const STORAGE_KEY = 'codex-course-progress-v3'
export const LEGACY_STORAGE_KEYS = ['codex-course-progress', 'codex-course-progress-v2']

const defaultPrompt = 'Készíts heti vezetői összefoglalót a projektmappában található státuszjegyzetekből. A kimenet legyen egyoldalas, döntési pontokkal és forráshivatkozásokkal. Jelöld külön a bizonytalan állításokat, és ellenőrizd, hogy minden szám visszavezethető-e a forrásra.'

export const createEmptyProgress = () => ({
  version: 3,
  lessonIds: [],
  answers: {},
  artifacts: {},
  artifactUpdatedAt: {},
  promptLab: {
    prompt: defaultPrompt,
    ratings: [0, 0, 0, 0, 0, 0],
  },
})

export const lessonIsReady = (lesson, progress) => {
  const answers = progress.answers[lesson.id] || []
  const artifact = progress.artifacts[lesson.id] || ''
  return lesson.questions.every((question, index) => answers[index] === question.correct)
    && artifact.trim().length >= lesson.artifact.minLength
}

const lessonMap = modules => new Map(modules.flatMap(module => module.lessons).map(lesson => [lesson.id, lesson]))
const isRecord = value => value && typeof value === 'object' && !Array.isArray(value)

export const sanitizeProgress = (candidate, modules) => {
  const empty = createEmptyProgress()
  const lessons = lessonMap(modules)
  const source = isRecord(candidate) ? candidate : {}
  const answers = Object.fromEntries(Object.entries(isRecord(source.answers) ? source.answers : {})
    .filter(([id, value]) => lessons.has(id) && Array.isArray(value))
    .map(([id, value]) => [id, value.map(answer => Number.isInteger(answer) ? answer : undefined)]))
  const artifacts = Object.fromEntries(Object.entries(isRecord(source.artifacts) ? source.artifacts : {})
    .filter(([id, value]) => lessons.has(id) && typeof value === 'string'))
  const artifactUpdatedAt = Object.fromEntries(Object.entries(isRecord(source.artifactUpdatedAt) ? source.artifactUpdatedAt : {})
    .filter(([id, value]) => lessons.has(id) && Number.isFinite(Number(value)))
    .map(([id, value]) => [id, Number(value)]))
  const promptLab = isRecord(source.promptLab) ? source.promptLab : {}
  const merged = {
    ...empty,
    lessonIds: Array.isArray(source.lessonIds) ? source.lessonIds : [],
    answers,
    artifacts,
    artifactUpdatedAt,
    promptLab: {
      prompt: typeof promptLab.prompt === 'string' ? promptLab.prompt : empty.promptLab.prompt,
      ratings: Array.isArray(promptLab.ratings) && promptLab.ratings.length === 6
        ? promptLab.ratings.map(rating => [0, 1, 2].includes(Number(rating)) ? Number(rating) : 0)
        : empty.promptLab.ratings,
    },
    version: 3,
  }
  merged.lessonIds = [...new Set(merged.lessonIds)].filter(id => {
    const lesson = lessons.get(id)
    return lesson ? lessonIsReady(lesson, merged) : false
  })
  return merged
}

export const loadProgress = (storage, modules) => {
  try {
    const current = JSON.parse(storage.getItem(STORAGE_KEY))
    if (current?.version === 3) return sanitizeProgress(current, modules)

    const saved = JSON.parse(storage.getItem('codex-course-progress-v2'))
    if (saved?.version === 2) return sanitizeProgress(saved, modules)

    const legacy = JSON.parse(storage.getItem('codex-course-progress')) || []
    return sanitizeProgress({ lessonIds: Array.isArray(legacy) ? legacy.filter(id => id.includes('.')) : [] }, modules)
  } catch {
    return createEmptyProgress()
  }
}

const withoutInvalidCompletion = (progress, lesson) => lessonIsReady(lesson, progress)
  ? progress
  : { ...progress, lessonIds: progress.lessonIds.filter(id => id !== lesson.id) }

export const updateAnswerProgress = (progress, lesson, questionIndex, optionIndex) => {
  const lessonAnswers = [...(progress.answers[lesson.id] || [])]
  lessonAnswers[questionIndex] = optionIndex
  const updated = { ...progress, answers: { ...progress.answers, [lesson.id]: lessonAnswers } }
  return withoutInvalidCompletion(updated, lesson)
}

export const updateArtifactProgress = (progress, lesson, value, updatedAt = Date.now()) => {
  const updated = {
    ...progress,
    artifacts: { ...progress.artifacts, [lesson.id]: value },
    artifactUpdatedAt: { ...progress.artifactUpdatedAt, [lesson.id]: updatedAt },
  }
  return withoutInvalidCompletion(updated, lesson)
}

export const completeLessonProgress = (progress, lesson) => {
  if (!lessonIsReady(lesson, progress) || progress.lessonIds.includes(lesson.id)) return progress
  return { ...progress, lessonIds: [...progress.lessonIds, lesson.id] }
}

export const findLatestArtifact = (lessonSequence, progress) => lessonSequence
  .filter(item => progress.artifacts[item.lesson.id]?.trim())
  .reduce((latest, item) => {
    if (!latest) return item
    const latestTime = Number(progress.artifactUpdatedAt?.[latest.lesson.id]) || 0
    const itemTime = Number(progress.artifactUpdatedAt?.[item.lesson.id]) || 0
    return itemTime >= latestTime ? item : latest
  }, null)

export const resetStoredProgress = storage => {
  let succeeded = true
  for (const key of [...LEGACY_STORAGE_KEYS, STORAGE_KEY]) {
    try {
      storage.removeItem(key)
    } catch {
      succeeded = false
    }
  }
  return succeeded
}
