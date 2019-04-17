export const RESPOND_NFC = 'RESPOND_NFC';
export const RESPOND_NFC_SUCCESS = 'RESPOND_NFC_SUCCESS';
export const RESPOND_NFC_FAILURE = 'RESPOND_NFC_FAILURE';

export const respondNfc = (response, nfc) => ({
  type: RESPOND_NFC,
  response,
  nfc,
});

export const respondNfcSuccess = status => ({
  type: RESPOND_NFC_SUCCESS,
  status,
});

export const respondNfcFailure = error => ({
  type: RESPOND_NFC_FAILURE,
  error,
});
