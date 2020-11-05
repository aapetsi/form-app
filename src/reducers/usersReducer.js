import { FETCH_DATA, LOADING } from '../action-types'

const initialState = {
  isLoading: false,
  usersList: [],
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        usersList: action.payload,
      }

    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }

    default:
      return state
  }
}
