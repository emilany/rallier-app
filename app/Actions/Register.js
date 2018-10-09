export const REGISTER_NFC = 'REGISTER_NFC';
export const REGISTER_NFC_SUCCESS = 'REGISTER_NFC_SUCCESS';
export const REGISTER_NFC_FAILURE = 'REGISTER_NFC_FAILURE';

export const registerNfc = nfc => ({
  type: REGISTER_NFC,
  nfc,
});

export const registerNfcSuccess = status => ({
  type: REGISTER_NFC_SUCCESS,
  status,
});

export const registerNfcFailure = error => ({
  type: REGISTER_NFC_FAILURE,
  error,
});
