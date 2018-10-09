export type Worksite = {
  id: number,
  name: string,
  address: string,
  contact: string,
  shift: number,
  deleted: boolean,
  client: number
}

export type DeviceSync = {
  imei: string,
  worksite: Worksite
}
