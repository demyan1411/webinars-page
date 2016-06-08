import * as types from '../constants/ActionTypes';

export function addWebinarUrl(url) {
  return {
    type: types.SET_WEBINAR_URL,
    url
  }
}