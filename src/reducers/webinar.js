export default function webinar(state = [], action) {

  switch (action.type) {
    case 'RENDER_CURRENT_WEBINAR':
      return {...state, currentWebinar: action.currentWebinar}
      
    case 'RENDER_PREVIOUS_WEBINAR':
      return {...state, previousWebinar: action.previousWebinar}
      
    default:
      return state
      
  }
}