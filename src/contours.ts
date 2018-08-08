// tslint:disable:max-line-length
// tslint:disable:no-magic-numbers

import { Contour } from './types'
import * as to from './utilities/to'

const mainDescent: Contour = to.Contour([...Array(29).keys()].map((n: number): number => (n + 1) * 2 - 1))

const mainDescentContinuation: Contour = to.Contour([...Array(12).keys()].map((n: number): number => (n + 1) * 2 + 57))

const threePer: Contour = to.Contour([
    3, 1, 3, 1, 3, 1, 3, 5, 3, 1, 3, 5, 3, 5, 3, 5, 7, 5, 3, 5, 7, 5, 7, 5, 7, 9, 7, 5, 7, 9, 7, 9, 7, 9, 11, 9, 7, 9, 11, 9, 11, 9, 11, 13, 11, 9, 11, 13, 11, 13, 11, 13, 15, 13, 11, 13, 15, 13, 15, 13, 15, 17, 15, 13, 15, 17, 15, 17, 15, 17, 19, 17, 15, 17, 19, 17, 19, 17, 19, 21, 19, 17,
])

const fivePer: Contour = to.Contour([
    11, 13, 11, 13, 11, 13, 15, 13, 11, 9, 7, 5, 3, 5, 3, 1, 3, 5, 7, 9, 7, 5, 3, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 9, 7, 5, 3, 5, 7, 9, 11, 9, 7, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 11, 9, 7, 5, 7, 9, 11, 13, 11, 9, 7, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 7, 9, 11, 13, 15, 13, 11, 9, 11, 13,
])

const sevenPer: Contour = to.Contour([
    7, 9, 7, 9, 11, 9, 7, 5, 7, 9, 7, 9, 11, 13, 15, 13, 11, 9, 7, 5, 3, 5, 7, 9, 11, 13, 11, 9, 7, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 11, 9, 11, 9, 7, 9, 7, 9, 7, 5, 3, 1, 3, 5, 7, 9, 11, 13, 11, 9, 7, 5, 7, 5, 7, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9,
])

const ninePer: Contour = to.Contour([
    15, 13, 11, 9, 11, 9, 11, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 5, 7, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1, 3, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 11, 13, 15, 17, 19, 17, 15, 13, 11, 9, 7, 5, 7, 5, 7, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1,
])

const backbone: Contour = to.Contour([3, 1])

const kick: Contour = to.Contour([8])

const snare: Contour = to.Contour([24])

const hihat: Contour = to.Contour([1])

const divideFortyeightByTwelve: Contour = to.Contour([
    3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
])

const divideFortyeightBySix: Contour = to.Contour([
    3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5,
])

const dividFortyeightByFour: Contour = to.Contour([
    7, 5, 7, 5, 7, 5, 7, 5,
])

const divideFortyeightByThree: Contour = to.Contour([
    7, 9, 7, 9, 7, 9,
])

const divideFortyeightByTwo: Contour = to.Contour([
    11, 13, 11, 13,
])

const divideFortyeightByOne: Contour = to.Contour([
    47, 49,
])

export {
    mainDescent,
    mainDescentContinuation,
    threePer,
    fivePer,
    sevenPer,
    ninePer,
    backbone,
    kick,
    snare,
    hihat,
}
