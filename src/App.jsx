import { useEffect, useMemo, useState } from 'react'
import { modules, roles, sources } from './data.js'

const emptyProgress = () => ({
  version: 3,
  lessonIds: [],
  answers: {},
  artifacts: {},
  promptLab: {
    prompt: 'Készíts heti vezetői összefoglalót a projektmappában található státuszjegyzetekből. A kimenet legyen egyoldalas, döntési pontokkal és forráshivatkozásokkal. Jelöld külön a bizonytalan állításokat, és ellenőrizd, hogy minden szám visszavezethető-e a forrásra.',
    ratings: [0, 0, 0, 0, 0, 0],
  },
})

const rubric = [
  ['Cél és hatókör', 'Világos a kívánt eredmény, a közönség és az, mi nincs a feladatban.'],
  ['Bemenet és forrás', 'Név szerint szerepel a használható input, a frissesség és a forráshierarchia.'],
  ['Kimeneti szerződés', 'Meghatározott a formátum, terjedelem, szerkezet és átadási hely.'],
  ['Ellenőrizhetőség', 'Van elfogadási mérce, hivatkozás, számkontroll vagy más bizonyíték.'],
  ['Biztonság és kapuk', 'Látszik a tiltott művelet, érzékeny adat kezelése és az emberi jóváhagyás.'],
  ['Ismételhetőség és átadás', 'Másik ember ugyanebből a briefből végre tudná hajtani és review-zni tudná.'],
]

const Arrow = ({ direction = 'right' }) => (
  <svg className={`icon icon-${direction}`} viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <a className="brand" href="#top" aria-label="Codex Munkaműhely – kezdőlap"><span className="brand-mark">C<span>/</span>M</span><span>Codex<br/>Munkaműhely</span></a>
    <button className="menu-button" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Bezárás' : 'Menü'}</button>
    <nav id="navigation" className={open ? 'nav open' : 'nav'} aria-label="Fő navigáció">
      <a href="#kezdes">Kezdés</a><a href="#munkafolyamatok">Munkafolyamatok</a><a href="#szerepkorok">Szerepkörök</a><a href="#eszkoztar">Eszköztár</a><a href="#forrasok">Források</a>
    </nav>
  </header>
}

function ArtifactStack() {
  return <div className="artifact-stage" aria-label="Ellenőrizhető munkatermékek: vezetői összefoglaló, munkafüzet és prezentációvázlat">
    <div className="artifact sheet sheet-back"><span>MUNKAFÜZET</span><div className="mini-grid"/></div>
    <div className="artifact sheet sheet-mid"><span>PREZENTÁCIÓVÁZLAT</span><strong>03</strong><i/></div>
    <div className="artifact sheet sheet-front"><span>VEZETŐI ÖSSZEFOGLALÓ</span><h3>Heti<br/>helyzetkép</h3><div className="artifact-lines"><i/><i/><i/></div><b>ELLENŐRZÉSRE</b></div>
    <div className="margin-note">Nem „válasz”,<br/>hanem átadható<br/>munkatermék.</div>
  </div>
}

function CourseRail({ completed, onSelect }) {
  return <div className="course-rail" aria-label="Tanulási útvonal">
    {modules.map((m, index) => <button key={m.id} className={completed.includes(m.id) ? 'rail-stop complete' : 'rail-stop'} onClick={() => onSelect(index)}>
      <span>{completed.includes(m.id) ? '✓' : m.number}</span><strong>{m.short}</strong><small>{m.time}</small>
    </button>)}
  </div>
}

function LessonCourse({ module, progress, updateAnswer, updateArtifact, completeLesson, initialLessonId }) {
  const [active, setActive] = useState(() => Math.max(0, module.lessons.findIndex(lesson => lesson.id === initialLessonId)))
  const lesson = module.lessons[active]
  const answers = progress.answers[lesson.id] || []
  const artifact = progress.artifacts[lesson.id] || ''
  const allCorrect = lesson.questions.every((question, index) => answers[index] === question.correct)
  const artifactReady = artifact.trim().length >= lesson.artifact.minLength
  const isComplete = progress.lessonIds.includes(lesson.id)

  return <div className="lesson-course">
    <div className="lesson-tabs" role="tablist" aria-label={`${module.title} leckéi`}>
      {module.lessons.map((item, index) => <button key={item.id} id={`lesson-tab-${item.id}`} role="tab" aria-controls={`lesson-panel-${item.id}`} aria-selected={active === index} className={progress.lessonIds.includes(item.id) ? 'complete' : ''} onClick={() => setActive(index)}>
        <span>{progress.lessonIds.includes(item.id) ? '✓' : item.number}</span><strong>{item.title}</strong><small>{item.time}</small>
      </button>)}
    </div>

    <article className="lesson" id={`lesson-panel-${lesson.id}`} role="tabpanel" aria-labelledby={`lesson-tab-${lesson.id}`}>
      <header className="lesson-header"><div><span>LECKE / {lesson.number}</span><h3 id={`lesson-${lesson.id}`}>{lesson.title}</h3></div><p>{lesson.time}</p></header>
      <section className="lesson-objective"><span>TANULÁSI CÉL</span><p>{lesson.objective}</p></section>
      <section className="lesson-why"><h4>Miért számít?</h4><p>{lesson.why}</p></section>

      <div className="lesson-sections">{lesson.sections.map((section, index) => <section key={section.title}><span>0{index + 1}</span><div><h4>{section.title}</h4><p>{section.body}</p></div></section>)}</div>

      <section className="lesson-comparison" aria-labelledby={`comparison-${lesson.id}`}>
        <h4 id={`comparison-${lesson.id}`}>Döntési térkép</h4>
        <div className="comparison-table" role="table">{lesson.comparison.map((row, index) => <div role="row" key={`${lesson.id}-${row[0]}`}><span role="cell">{String(index + 1).padStart(2, '0')}</span><strong role="cell">{row[0]}</strong><b role="cell">{row[1]}</b><p role="cell">{row[2]}</p></div>)}</div>
      </section>

      <section className="worked-example"><span>MUTASD</span><h4>{lesson.example.title}</h4><p>{lesson.example.setup}</p><div><div><small>GYENGE VÁLTOZAT</small><p>{lesson.example.weak}</p></div><div><small>ERŐS VÁLTOZAT</small><p>{lesson.example.strong}</p></div></div><p className="example-review">{lesson.example.review}</p></section>

      <section className="artifact-work"><div><span>PRÓBÁLD KI</span><h4>{lesson.artifact.label}</h4><p>{lesson.artifact.instruction}</p></div><label htmlFor={`artifact-${lesson.id}`}>Saját munkaterméked</label><textarea id={`artifact-${lesson.id}`} rows="8" value={artifact} placeholder={lesson.artifact.placeholder} onChange={event => updateArtifact(lesson.id, event.target.value)}/><small>{artifact.trim().length} / legalább {lesson.artifact.minLength} karakter</small></section>

      <section className="knowledge-check"><span>ELLENŐRIZD</span><h4>Helyzetalapú tudásellenőrzés</h4>{lesson.questions.map((question, questionIndex) => <fieldset key={`${lesson.id}-q-${questionIndex}`}><legend>{questionIndex + 1}. {question.prompt}</legend>{question.options.map((option, optionIndex) => {
        const selected = answers[questionIndex] === optionIndex
        const answered = answers[questionIndex] !== undefined
        return <label key={option} className={selected ? (optionIndex === question.correct ? 'correct' : 'incorrect') : ''}><input type="radio" name={`${lesson.id}-q-${questionIndex}`} checked={selected} onChange={() => updateAnswer(lesson.id, questionIndex, optionIndex)}/><span>{option}</span>{selected && answered ? <small>{question.feedback[optionIndex]}</small> : null}</label>
      })}</fieldset>)}</section>

      <section className="lesson-finish"><div><span>LECKE ÁLLAPOTA</span><p>{isComplete ? 'A lecke kész. A munkatermékedet és a válaszaidat a böngésző helyben megőrizte.' : !allCorrect ? 'Válaszolj helyesen minden kérdésre.' : !artifactReady ? `Egészítsd ki a munkaterméket legalább ${lesson.artifact.minLength} karakterre.` : 'Minden feltétel teljesült. Lezárhatod a leckét.'}</p></div><button className={isComplete ? 'button done' : 'button'} disabled={!allCorrect || !artifactReady || isComplete} onClick={() => completeLesson(lesson.id)}>{isComplete ? 'Lecke kész ✓' : 'Lecke lezárása'}</button></section>

      <div className="lesson-sources"><span>HIVATALOS FORRÁSOK</span>{lesson.sources.map(([title, url]) => <a href={url} target="_blank" rel="noreferrer" key={url}>{title} <Arrow/></a>)}</div>
    </article>

    <nav className="lesson-nav" aria-label="Leckék közötti navigáció"><button disabled={active === 0} onClick={() => setActive(active - 1)}>← Előző lecke</button><span>{active + 1} / {module.lessons.length}</span><button disabled={active === module.lessons.length - 1} onClick={() => setActive(active + 1)}>Következő lecke →</button></nav>
  </div>
}

function ModuleViewer({ selected, setSelected, progress, updateAnswer, updateArtifact, completeLesson, initialLessonId }) {
  const m = modules[selected]
  const completedLessons = m.lessons?.filter(lesson => progress.lessonIds.includes(lesson.id)).length || 0
  return <section className="module-viewer" id="kezdes" aria-labelledby="module-title">
    <div className="section-index">MODUL / {m.number}</div>
    <div className="module-copy">
      <p className="module-time">{m.time}</p><h2 id="module-title">{m.title}</h2><p className="module-lead">{m.lead}</p>
      <ol className="learn-list">{m.learn.map((item, i) => <li key={item}><span>0{i + 1}</span>{item}</li>)}</ol>
    </div>
    <aside className="exercise"><span>MODULÁLLAPOT</span><p>{completedLessons} / {m.lessons.length} lecke kész</p><small>A modul akkor zárul le, ha az összes munkatermék és tudásellenőrzés elkészült.</small></aside>
    <LessonCourse key={`${m.id}-${initialLessonId || 'start'}`} module={m} progress={progress} updateAnswer={updateAnswer} updateArtifact={updateArtifact} completeLesson={completeLesson} initialLessonId={initialLessonId}/>
    <div className="module-nav"><button disabled={selected === 0} onClick={() => setSelected(selected - 1)}>← Előző</button><span>{selected + 1} / {modules.length}</span><button disabled={selected === modules.length - 1} onClick={() => setSelected(selected + 1)}>Következő →</button></div>
  </section>
}

function PromptLab({ value, onChange }) {
  const [checked, setChecked] = useState(false)
  const score = value.ratings.reduce((sum, rating) => sum + rating, 0)
  const passed = score >= 8 && value.ratings[4] > 0
  const updateRating = (index, rating) => {
    const ratings = [...value.ratings]
    ratings[index] = Number(rating)
    onChange({ ...value, ratings })
    setChecked(false)
  }
  return <section className="prompt-section" id="munkafolyamatok">
    <div className="formula"><span>Bemenet</span><b>+</b><span>elvárt kimenet</span><b>+</b><span>ellenőrzési mérce</span></div>
    <div className="prompt-heading"><div className="section-index">MUNKAFOLYAMAT</div><h2>Egy jó feladat<br/>anatómiája</h2></div>
    <div className="anatomy-steps">{['Válassz egy munkaterméket', 'Add át a biztonságos bemeneteket', 'Mondd meg, milyen legyen a kész eredmény', 'Írd le, hogyan ellenőrizhető'].map((s, i) => <div key={s}><span>0{i + 1}</span><p>{s}</p></div>)}</div>
    <div className="prompt-lab">
      <div><span className="lab-label">PROMPTMŰHELY</span><h3>Próbáld ki egy valódi feladaton</h3><p>Itt nem kulcsszókereső pontoz. Hat átlátható szempont szerint te értékeled, hogy a briefet egy kolléga félreértés nélkül át tudná-e venni.</p></div>
      <div><label htmlFor="prompt">A munkamegbízásod</label><textarea id="prompt" value={value.prompt} onChange={e => { onChange({ ...value, prompt: e.target.value }); setChecked(false) }} rows="8"/><button className="button light" onClick={() => setChecked(true)}>Rubrika kiértékelése <Arrow/></button></div>
      <div className="rubric-grid">{rubric.map(([label, help], index) => <label key={label}><span>{label}</span><small>{help}</small><select aria-label={`${label} pontszáma`} value={value.ratings[index]} onChange={event => updateRating(index, event.target.value)}><option value="0">0 – hiányzik</option><option value="1">1 – részleges</option><option value="2">2 – egyértelmű</option></select></label>)}</div>
      <div className="rubric-result" aria-live="polite"><strong>{score} / 12 pont</strong>{checked ? <p>{passed ? 'A brief átadható alap. A valódi futás után még ellenőrizd az eredményt a saját elfogadási mércéddel.' : value.ratings[4] === 0 ? 'A biztonság és az emberi kapuk nem maradhatnak ki akkor sem, ha az összpontszám magas.' : 'Legalább 8 pont szükséges. A 0–1 pontos szempontokat tedd konkrétabbá, majd értékeld újra.'}</p> : <p>Legalább 8 pont és a biztonsági szempontnál legalább 1 pont szükséges.</p>}</div>
    </div>
  </section>
}

function RoleCases() {
  const [active, setActive] = useState(0)
  const role = roles[active]
  return <section className="roles" id="szerepkorok">
    <div className="roles-intro"><div className="section-index">GYAKORLATI PÉLDÁK</div><h2>Más szerepkör.<br/>Ugyanaz a mérce.</h2><p>Az első használati eset legyen valódi munkatermék, ne képességbemutató.</p></div>
    <div className="role-tabs" role="tablist" aria-label="Szerepkör választása">{roles.map((r, i) => <button id={`role-tab-${r.id}`} role="tab" aria-controls={`role-panel-${r.id}`} aria-selected={active === i} key={r.id} onClick={() => setActive(i)}><span>0{i + 1}</span>{r.label}</button>)}</div>
    <div className="role-detail" id={`role-panel-${role.id}`} role="tabpanel" aria-labelledby={`role-tab-${role.id}`}><div><span>MUNKATERMÉK</span><h3>{role.artifact}</h3><p>{role.copy}</p></div><dl><div><dt>Biztonságos bemenet</dt><dd>{role.inputs}</dd></div><div><dt>Gyors review</dt><dd>{role.review}</dd></div></dl></div>
  </section>
}

function ExtensionFlow() {
  const [level, setLevel] = useState(0)
  const permissions = [
    ['Csak olvasás', 'Forrásfeltárás, elemzés és javaslat készítése módosítás nélkül.'],
    ['Projekt szerkesztése', 'A kijelölt projektfájlok létrehozása és módosítása.'],
    ['Hálózati hozzáférés', 'Külső szolgáltatások és nyilvános web elérése a feladathoz.'],
  ]
  return <section className="extension" id="eszkoztar">
    <div className="section-index">ISMÉTELHETŐSÉG</div><div className="extension-title"><h2>Ha már működik,<br/>tedd ismételhetővé.</h2><p>Ne rögtön automatizálj. Először válaszd ki, mi hiányzik a stabil kézi folyamathoz.</p></div>
    <div className="system-flow">
      <div><span>01</span><h3>Plugin</h3><p>Hozzáférés eszközökhöz és adatokhoz.</p></div><Arrow/><div><span>02</span><h3>Skill</h3><p>Bevált munkamenet újrahasználható utasításokkal.</p></div><Arrow/><div><span>03</span><h3>Ütemezett feladat</h3><p>Stabil folyamat rendszeres futtatása.</p></div>
    </div>
    <div className="permission-panel"><div><span>BIZTONSÁGI MŰHELY</span><h3>A jogosultság nem bizalom,<br/>hanem hatókör.</h3><p>Mindig a legszűkebb szükséges hozzáféréssel indulj.</p></div><div className="permission-controls">{permissions.map((p, i) => <button className={level === i ? 'active' : ''} key={p[0]} onClick={() => setLevel(i)}><span>{i + 1}</span><strong>{p[0]}</strong><small>{p[1]}</small></button>)}</div></div>
  </section>
}

function Sources() {
  const [filter, setFilter] = useState('Mind')
  const cats = ['Mind', ...new Set(sources.map(s => s[0]))]
  const shown = filter === 'Mind' ? sources : sources.filter(s => s[0] === filter)
  return <section className="sources" id="forrasok">
    <div className="source-head"><div className="section-index">FORRÁSJEGYZÉK</div><h2>Hivatalos OpenAI<br/>források</h2></div>
    <div className="source-filters" aria-label="Forráskategória">{cats.map(c => <button className={filter === c ? 'active' : ''} onClick={() => setFilter(c)} key={c}>{c}</button>)}</div>
    <div className="source-list">{shown.map(([cat, title, url], i) => <a href={url} target="_blank" rel="noreferrer" key={`${cat}::${title}::${url}`}><span>{String(i + 1).padStart(2, '0')}</span><small>{cat}</small><strong>{title}</strong><Arrow/></a>)}</div>
    <p className="source-note">Ez független, magyar nyelvű tananyag. Nem az OpenAI hivatalos fordítása, hanem a hivatkozott hivatalos forrásokra épülő oktatási feldolgozás.</p>
  </section>
}

function ProgressTools({ onExport, onReset }) {
  const [confirming, setConfirming] = useState(false)
  const [exportHref, setExportHref] = useState(null)
  return <aside className="progress-tools" aria-label="Saját tanulási adatok kezelése">
    <div><span>SAJÁT ADATOK</span><h3>Vidd magaddal, vagy kezdd újra.</h3><p>A haladás, a munkatermékek és az önértékelés csak ebben a böngészőben tárolódik. Export előtt ellenőrizd, hogy nem írtál-e be érzékeny adatot.</p></div>
    <div className="progress-actions"><button className="button" onClick={() => setExportHref(onExport())}>Exportfájl elkészítése</button>{exportHref ? <a className="button download-link" href={exportHref} download={`codex-tananyag-haladas-${new Date().toISOString().slice(0, 10)}.json`}>JSON-fájl letöltése</a> : null}<button className="text-button danger" onClick={() => setConfirming(true)}>Haladás törlése</button></div>
    {confirming ? <div className="reset-confirm" role="alert"><p>Ez végleg törli a helyben mentett válaszokat, munkatermékeket és leckeállapotokat.</p><button className="text-button" onClick={() => setConfirming(false)}>Mégse</button><button className="button danger" onClick={() => { onReset(); setConfirming(false) }}>Végleges törlés</button></div> : null}
  </aside>
}

export default function App() {
  const [selected, setSelected] = useState(0)
  const [initialLessonId, setInitialLessonId] = useState(null)
  const [courseProgress, setCourseProgress] = useState(() => {
    try {
      const current = JSON.parse(localStorage.getItem('codex-course-progress-v3'))
      if (current?.version === 3) return { ...emptyProgress(), ...current, promptLab: { ...emptyProgress().promptLab, ...current.promptLab } }
      const saved = JSON.parse(localStorage.getItem('codex-course-progress-v2'))
      if (saved?.version === 2) return { ...emptyProgress(), lessonIds: saved.lessonIds || [], answers: saved.answers || {}, artifacts: saved.artifacts || {} }
      const legacy = JSON.parse(localStorage.getItem('codex-course-progress')) || []
      return { ...emptyProgress(), lessonIds: Array.isArray(legacy) ? legacy.filter(id => id.includes('.')) : [] }
    } catch {
      return emptyProgress()
    }
  })
  useEffect(() => { localStorage.setItem('codex-course-progress-v3', JSON.stringify(courseProgress)) }, [courseProgress])
  const completed = modules
    .filter(module => module.lessons.every(lesson => courseProgress.lessonIds.includes(lesson.id)))
    .map(module => module.id)
  const updateAnswer = (lessonId, questionIndex, optionIndex) => setCourseProgress(current => {
    const lessonAnswers = [...(current.answers[lessonId] || [])]
    lessonAnswers[questionIndex] = optionIndex
    return { ...current, answers: { ...current.answers, [lessonId]: lessonAnswers } }
  })
  const updateArtifact = (lessonId, value) => setCourseProgress(current => ({ ...current, artifacts: { ...current.artifacts, [lessonId]: value } }))
  const completeLesson = lessonId => setCourseProgress(current => current.lessonIds.includes(lessonId) ? current : ({ ...current, lessonIds: [...current.lessonIds, lessonId] }))
  const updatePromptLab = promptLab => setCourseProgress(current => ({ ...current, promptLab }))
  const progress = Math.round((completed.length / modules.length) * 100)
  const lessonSequence = useMemo(() => modules.flatMap((module, moduleIndex) => module.lessons.map(lesson => ({ module, moduleIndex, lesson }))), [])
  const nextLesson = lessonSequence.find(item => !courseProgress.lessonIds.includes(item.lesson.id))
  const lastArtifact = [...lessonSequence].reverse().find(item => courseProgress.artifacts[item.lesson.id]?.trim())
  const chooseModule = index => { setSelected(index); setInitialLessonId(null); document.getElementById('kezdes')?.scrollIntoView({ behavior: 'smooth' }) }
  const resume = () => { if (!nextLesson) return; setSelected(nextLesson.moduleIndex); setInitialLessonId(nextLesson.lesson.id); document.getElementById('kezdes')?.scrollIntoView({ behavior: 'smooth' }) }
  const exportProgress = () => {
    const payload = { exportedAt: new Date().toISOString(), course: 'Codex Munkaműhely', ...courseProgress }
    return `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(payload, null, 2))}`
  }
  const resetProgress = () => {
    localStorage.removeItem('codex-course-progress')
    localStorage.removeItem('codex-course-progress-v2')
    localStorage.removeItem('codex-course-progress-v3')
    setCourseProgress(emptyProgress())
    setSelected(0)
    setInitialLessonId(null)
  }
  return <>
    <div id="top" className="page-shell"><Header/>
      <main>
        <section className="hero">
          <div className="hero-copy"><h1>Ne azt kérdezd,<br/>mire képes.<br/><em>Adj neki valódi munkát.</em></h1><p>Gyakorlati, magyar nyelvű útvonal a biztonságos első feladattól az ismételhető munkafolyamatig.</p><div className="hero-actions"><a className="button" href="#kezdes">Kezdem az alapokkal <Arrow/></a><a className="text-link" href="#utvonal">Útvonal választása ↓</a></div></div>
          <ArtifactStack/>
        </section>
        <section className="route" id="utvonal"><div className="route-head"><div><span>TANULÁSI ÚTVONAL</span><h2>Hat lépés a használható eredményig.</h2></div><div className="progress-copy"><strong>{completed.length} / {modules.length} modul</strong><span>{progress}%</span><div><i style={{width: `${progress}%`}}/></div></div></div><CourseRail completed={completed} onSelect={chooseModule}/><div className="resume-panel"><div><span>KÖVETKEZŐ LECKE</span><strong>{nextLesson ? `${nextLesson.lesson.number} · ${nextLesson.lesson.title}` : 'Minden lecke kész'}</strong></div><div><span>UTOLSÓ MENTETT MUNKATERMÉK</span><strong>{lastArtifact ? `${lastArtifact.lesson.number} · ${lastArtifact.lesson.artifact.label}` : 'Még nincs mentett munkatermék'}</strong></div>{nextLesson ? <button className="button" onClick={resume}>Folytatom <Arrow/></button> : null}</div></section>
        <ModuleViewer selected={selected} setSelected={chooseModule} progress={courseProgress} updateAnswer={updateAnswer} updateArtifact={updateArtifact} completeLesson={completeLesson} initialLessonId={initialLessonId}/>
        <PromptLab value={courseProgress.promptLab} onChange={updatePromptLab}/><RoleCases/><ExtensionFlow/><ProgressTools onExport={exportProgress} onReset={resetProgress}/><Sources/>
      </main>
    </div>
    <footer><div><span>CODEX MUNKAMŰHELY</span><h2>A jó eredmény<br/><em>gyorsan ellenőrizhető.</em></h2></div><a className="button light" href="#top">Vissza az elejére ↑</a><p>Magyar oktatási feldolgozás · Hivatalos OpenAI-források alapján · 2026</p></footer>
  </>
}
