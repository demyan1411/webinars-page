
const initialState = JSON.parse(window.localStorage.getItem('rr_user')) || {}
export default function homestate(state = initialState) {

  return state

}