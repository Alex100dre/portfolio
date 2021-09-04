import { easterEggTypes } from '.'

export const enable = () => ({ type: easterEggTypes.EASTER_EGG_ENABLE })
export const disable = () => ({ type: easterEggTypes.EASTER_EGG_DISABLE })
