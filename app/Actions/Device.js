export const SYNC_DEVICE = 'SYNC_DEVICE';
export const SYNC_DEVICE_SUCCESS = 'SYNC_DEVICE_SUCCESS';
export const SYNC_DEVICE_FAILURE = 'SYNC_DEVICE_FAILURE';

export const syncDevice = uid => ({
  type: SYNC_DEVICE,
  uid,
});

export const syncDeviceSuccess = deviceSync => ({
  type: SYNC_DEVICE_SUCCESS,
  deviceSync,
});

export const syncDeviceFailure = error => ({
  type: SYNC_DEVICE_FAILURE,
  error,
});
