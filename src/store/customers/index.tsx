import { atom } from 'recoil'

export const customersList = atom({
  key: '@list/customers',
  default: [],
})
