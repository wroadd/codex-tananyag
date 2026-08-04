export const initialProgressToolsState = { confirming: false, exportHref: null }

export const progressToolsReducer = (state, action) => {
  switch (action.type) {
    case 'prepare-export':
      return { ...state, exportHref: action.href }
    case 'request-reset':
      return { ...state, confirming: true }
    case 'cancel-reset':
      return { ...state, confirming: false }
    case 'progress-changed':
      return { ...state, exportHref: null }
    case 'reset-complete':
      return initialProgressToolsState
    default:
      return state
  }
}
