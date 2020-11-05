import Axios from 'axios'
import { FETCH_DATA, LOADING } from '../action-types'

export const fetchData = (api, dispatch) => {
  dispatch({ type: LOADING, payload: true })
  Axios.get(api)
    .then((res) => {
      dispatch({ type: LOADING, payload: false })
      console.log(res.data)
      dispatch({ type: FETCH_DATA, payload: res.data })
    })
    .catch((err) => {
      dispatch({ type: LOADING, payload: false })
      console.log(err.response)
    })
}
