import { combineReducers } from 'redux'
import { userReducer } from './usersReducer'
import { reducer as reduxFormReducer } from 'redux-form'

const rootReducer = combineReducers({
  user: userReducer,
  form: reduxFormReducer,
})

export default rootReducer
