export const GET_RESPONSES_LIST = 'GET_RESPONSES_LIST';
export const GET_RESPONSES_LIST_SUCCESS = 'GET_RESPONSES_LIST_SUCCESS';
export const GET_RESPONSES_LIST_FAILURE = 'GET_RESPONSES_LIST_FAILURE';

export const getResponsesList = id => ({
  type: GET_RESPONSES_LIST,
  id,
});

export const getResponsesListSuccess = responses => ({
  type: GET_RESPONSES_LIST_SUCCESS,
  responses,
});

export const getResponsesListFailure = error => ({
  type: GET_RESPONSES_LIST_FAILURE,
  error,
});
