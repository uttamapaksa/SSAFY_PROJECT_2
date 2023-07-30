import { atom } from "recoil";

export const analysisRecordState = atom({
  key: 'analysisRecordState',
  default: [],
})

export const analysisRecordTimeState = atom({
  key: 'analysisRecordTimeState',
  default: [],
})

export const accentRecordState = atom({
  key: 'accentRecordState',
  default: [],
})

export const accentRecordTimeState = atom({
  key: 'accentRecordTimeState',
  default: [],
})

export const RoleSelectState = atom<boolean[]>({
  key: 'RoleSelectState',
  default: [],
})

export const ScriptSelectState = atom<boolean[]>({
  key: 'ScriptSelectState',
  default: [],
})

export const PlayChangebState = atom<number[]>({
  key: 'PlayChangebState',
  default: [],
})