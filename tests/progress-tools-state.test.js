import test from 'node:test'
import assert from 'node:assert/strict'
import { initialProgressToolsState, progressToolsReducer } from '../src/progress-tools-state.js'

test('a végleges törlés az exportlinket és a megerősítést is eltávolítja', () => {
  const withExport = progressToolsReducer(initialProgressToolsState, { type: 'prepare-export', href: 'data:application/json,tesztadat' })
  const confirming = progressToolsReducer(withExport, { type: 'request-reset' })
  const reset = progressToolsReducer(confirming, { type: 'reset-complete' })
  assert.deepEqual(reset, initialProgressToolsState)
})

test('a haladás módosítása érvényteleníti a korábban elkészített exportot', () => {
  const withExport = progressToolsReducer(initialProgressToolsState, { type: 'prepare-export', href: 'data:application/json,regi-allapot' })
  const changed = progressToolsReducer(withExport, { type: 'progress-changed' })
  assert.equal(changed.exportHref, null)
})
