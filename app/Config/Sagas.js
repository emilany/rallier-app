import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  SYNC_DEVICE, SYNC_DEVICE_SUCCESS, SYNC_DEVICE_FAILURE,
} from '../Actions/Device';
import {
  REGISTER_NFC, REGISTER_NFC_SUCCESS, REGISTER_NFC_FAILURE,
} from '../Actions/Register';
import {
  RESPOND_NFC, RESPOND_NFC_SUCCESS, RESPOND_NFC_FAILURE,
} from '../Actions/Respond';
import {
  GET_RESPONSES_LIST, GET_RESPONSES_LIST_SUCCESS, GET_RESPONSES_LIST_FAILURE,
} from '../Actions/Responses';
import ApiConstants from '../Constants/ApiConstants';

function* syncDeviceSaga(action) {
  const url = `${ApiConstants.API_URL}devices/sync`;
  const params = {
    imei: action.uid,
  };

  try {
    const response = yield call(
      axios.post,
      url,
      params,
    );
    console.log('RESPONSE', response);
    yield put({
      type: SYNC_DEVICE_SUCCESS,
      deviceSync: response.data,
    });
    console.log('RESPONSE', response.data);
  } catch (error) {
    yield put({
      type: SYNC_DEVICE_FAILURE,
      error: error.message,
    });
  }
}

function* registerNfcSaga(action) {
  console.log('REGISTER...');
  const url = `${ApiConstants.API_URL}nfc/`;
  const params = {
    tag: action.nfc,
  };
  try {
    const response = yield call(
      axios.post,
      url,
      params,
    );
    console.log('RESPONSE', response);
    yield put({
      type: REGISTER_NFC_SUCCESS,
      status: response.status,
    });
  } catch (error) {
    yield put({
      type: REGISTER_NFC_FAILURE,
      error: error.message,
    });
  }
}

function* respondSaga(action) {
  const url = `${ApiConstants.API_URL}respond/`;
  console.log('url', url);
  const headers = {
    headers: {
      NFC: action.nfc,
    },
  };
  console.log('headers', headers);
  const params = {
    nfc_tag: action.nfc,
    response: action.response,
  };
  try {
    const response = yield call(
      axios.post,
      url,
      params,
      headers,
    );
    console.log('RESPONSE', response);
    yield put({
      type: RESPOND_NFC_SUCCESS,
      status: response.status,
    });
  } catch (error) {
    yield put({
      type: RESPOND_NFC_FAILURE,
      error: error.message,
    });
  }
}

function* getResponsesListSaga(action) {
  const url = `${ApiConstants.API_URL}list_responses?site=${action.id}`;
  console.log('URL', url);
  try {
    const response = yield call(
      axios.get,
      url,
    );

    yield put({
      type: GET_RESPONSES_LIST_SUCCESS,
      responses: response.data,
    });
    console.log('RESPONSE', response);
  } catch (error) {
    yield put({
      type: GET_RESPONSES_LIST_FAILURE,
      error: error.message,
    });
  }
}

function* rootSaga() {
  yield takeLatest(SYNC_DEVICE, syncDeviceSaga);
  yield takeLatest(REGISTER_NFC, registerNfcSaga);
  yield takeLatest(RESPOND_NFC, respondSaga);
  yield takeLatest(GET_RESPONSES_LIST, getResponsesListSaga);
}

export default rootSaga;
