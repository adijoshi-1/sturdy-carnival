import { createStore } from 'redux'

const initialState = {
  currentPath: window.location.pathname,
  loggedIn: localStorage.getItem('userToken') ? true : false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'update_path':
      return { ...state, currentPath: action.payload }

    case 'update_loggedIn':
      return { ...state, loggedIn: action.payload }

    default:
      return state
  }
}

export const store = createStore(reducer)
