import { atom } from 'recoil'

export const candiesList = atom({
  key: '@list/candies',
  default: [],
})
