import * as types from '../constants/ActionTypes';

export function getCurrentWebinar(currentWebinar) {
  return {
    type: types.RENDER_CURRENT_WEBINAR,
    currentWebinar
  }
}

export function getPreviousWebinar(previousWebinar) {
  return {
    type: types.RENDER_PREVIOUS_WEBINAR,
    previousWebinar
  }
}