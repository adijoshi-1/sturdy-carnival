import { createStore } from 'redux'

const initialState = {
  currentPath: window.location.pathname,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'update_path':
      return { ...state, currentPath: action.payload }

    default:
      return state
  }
}

export const store = createStore(reducer)
