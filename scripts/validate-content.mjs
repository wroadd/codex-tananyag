import { modules, roles, sources } from '../src/data.js'

const failures = []
const expect = (condition, message) => {
  if (!condition) failures.push(message)
}

const unique = values => new Set(values).size === values.length
const sourceKey = ([category, title, url]) => `${category}::${title}::${url}`
const categoryCounts = Object.fromEntries(
  ['Alapok', 'Gyakorlati példák', 'Kiterjesztés', 'Technikai mélyítés']
    .map(category => [category, sources.filter(([itemCategory]) => itemCategory === category).length]),
)
const detailedModules = modules.filter(module => module.lessons)
const detailedLessons = detailedModules.flatMap(module => module.lessons)
const sourceUrls = new Set(sources.map(([, , url]) => url))
const usedSourceUrls = new Set(detailedLessons.flatMap(lesson => lesson.sources.map(([, url]) => url)))
const expectedLessonCounts = [6, 6, 7, 8, 8, 7]

expect(modules.length === 6, `A modulok száma 6 helyett ${modules.length}.`)
expect(unique(modules.map(module => module.id)), 'A modulazonosítók nem egyediek.')
expect(unique(roles.map(role => role.id)), 'A szerepkör-azonosítók nem egyediek.')
expect(sources.length === 20, `A források száma 20 helyett ${sources.length}.`)
expect(unique(sources.map(sourceKey)), 'A React-forráskulcsok nem egyediek.')
expect(unique(sources.map(([, , url]) => url)), 'A forrásjegyzék azonos kanonikus URL-t többször tartalmaz.')
expect(categoryCounts['Alapok'] === 6, `Az Alapok szűrő 6 helyett ${categoryCounts['Alapok']} elemet ad.`)
expect(categoryCounts['Gyakorlati példák'] === 5, `A Gyakorlati példák szűrő 5 helyett ${categoryCounts['Gyakorlati példák']} elemet ad.`)
expect(categoryCounts.Kiterjesztés === 3, `A Kiterjesztés szűrő 3 helyett ${categoryCounts.Kiterjesztés} elemet ad.`)
expect(categoryCounts['Technikai mélyítés'] === 6, `A Technikai mélyítés szűrő 6 helyett ${categoryCounts['Technikai mélyítés']} elemet ad.`)
expect(sources.every(([, title, url]) => title && url.startsWith('https://')), 'Minden forráshoz cím és HTTPS URL szükséges.')
expect(detailedModules.length === 6, `A részletezett modulok száma 6 helyett ${detailedModules.length}.`)
expect(modules.every((module, index) => module.lessons.length === expectedLessonCounts[index]), `A modulok leckeszáma eltér a tervezett ${expectedLessonCounts.join(', ')} értékektől.`)
expect(detailedLessons.length === 42, `A részletes leckék száma 42 helyett ${detailedLessons.length}.`)
expect(unique(detailedLessons.map(lesson => lesson.id)), 'A részletes leckeazonosítók nem egyediek.')
expect(detailedLessons.every(lesson => lesson.sections.length >= 3 && lesson.questions.length >= 1 && lesson.sources.length >= 1), 'Minden részletes leckéhez legalább három magyarázó rész, egy kérdés és egy forrás szükséges.')
expect(detailedLessons.every(lesson => lesson.artifact?.minLength >= 70), 'Minden részletes leckéhez legalább 70 karakteres munkatermék szükséges.')
expect(detailedLessons.every(lesson => lesson.sources.every(([, url]) => sourceUrls.has(url))), 'Minden leckeforrásnak szerepelnie kell az összevont forrásjegyzékben.')
expect([...sourceUrls].every(url => usedSourceUrls.has(url)), 'A 20 hivatalos forrás mindegyikét legalább egy leckéhez hozzá kell rendelni.')
expect(modules.every(module => module.lessons.at(-1).questions.length >= 3), 'Minden modul záróleckéjéhez legalább három helyzetalapú kérdés szükséges.')

if (failures.length) {
  console.error('Tartalom-ellenőrzési hibák:')
  failures.forEach(failure => console.error(`- ${failure}`))
  process.exit(1)
}

console.log(`Tartalom rendben: ${modules.length} modul, ${detailedLessons.length} részletes lecke, ${roles.length} szerepkör, ${sources.length} egyedi forrás.`)
console.log(`Forrásszűrők: ${Object.entries(categoryCounts).map(([name, count]) => `${name}=${count}`).join(', ')}.`)
