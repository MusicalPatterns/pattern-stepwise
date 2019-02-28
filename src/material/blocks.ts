// tslint:disable max-line-length no-magic-numbers no-dead-store

import {
    Block,
    INITIAL,
    Integer,
    positiveIntegers,
    product,
    slice,
    sum,
    to,
} from '@musical-patterns/utilities'
import { StepwiseBlocks } from './types'

const buildBlocks: () => StepwiseBlocks =
    (): StepwiseBlocks => {
        const mainDescent: Block = to.Block(
            slice(positiveIntegers, INITIAL, to.Ordinal(28))
                .map((integer: Integer): number => sum(product(integer, to.Integer(2)), to.Integer(1))),
        )

        const mainDescentContinuation: Block = to.Block(
            slice(positiveIntegers, INITIAL, to.Ordinal(12))
                .map((integer: Integer): number => sum(product(integer, to.Integer(2)), to.Integer(57))),
        )

        const threePer: Block = to.Block([
            3, 1, 3, 1, 3, 1, 3, 5, 3, 1, 3, 5, 3, 5, 3, 5, 7, 5, 3, 5, 7, 5, 7, 5, 7, 9, 7, 5, 7, 9, 7, 9, 7, 9, 11, 9, 7, 9, 11, 9, 11, 9, 11, 13, 11, 9, 11, 13, 11, 13, 11, 13, 15, 13, 11, 13, 15, 13, 15, 13, 15, 17, 15, 13, 15, 17, 15, 17, 15, 17, 19, 17, 15, 17, 19, 17, 19, 17, 19, 21, 19, 17,
        ])

        const fivePer: Block = to.Block([
            11, 13, 11, 13, 11, 13, 15, 13, 11, 9, 7, 5, 3, 5, 3, 1, 3, 5, 7, 9, 7, 5, 3, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 9, 7, 5, 3, 5, 7, 9, 11, 9, 7, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 11, 9, 7, 5, 7, 9, 11, 13, 11, 9, 7, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 7, 9, 11, 13, 15, 13, 11, 9, 11, 13,
        ])

        const sevenPer: Block = to.Block([
            7, 9, 7, 9, 11, 9, 7, 5, 7, 9, 7, 9, 11, 13, 15, 13, 11, 9, 7, 5, 3, 5, 7, 9, 11, 13, 11, 9, 7, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 11, 9, 11, 9, 7, 9, 7, 9, 7, 5, 3, 1, 3, 5, 7, 9, 11, 13, 11, 9, 7, 5, 7, 5, 7, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9,
        ])

        const ninePer: Block = to.Block([
            15, 13, 11, 9, 11, 9, 11, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 5, 7, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1, 3, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 11, 13, 15, 17, 19, 17, 15, 13, 11, 9, 7, 5, 7, 5, 7, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1,
        ])

        const backbone: Block = to.Block([ 3, 1 ])

        const kick: Block = to.Block([ 8 ])

        const snare: Block = to.Block([ 24 ])

        const hihat: Block = to.Block([ 3 ])

        const divideFortyeightByTwelve: Block = to.Block([
            3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
        ])

        const divideFortyeightBySix: Block = to.Block([
            3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5,
        ])

        const dividFortyeightByFour: Block = to.Block([
            7, 5, 7, 5, 7, 5, 7, 5,
        ])

        const divideFortyeightByThree: Block = to.Block([
            7, 9, 7, 9, 7, 9,
        ])

        const divideFortyeightByTwo: Block = to.Block([
            11, 13, 11, 13,
        ])

        const divideFortyeightByOne: Block = to.Block([
            47, 49,
        ])

        return {
            backbone,
            fivePer,
            hihat,
            kick,
            mainDescent,
            mainDescentContinuation,
            ninePer,
            sevenPer,
            snare,
            threePer,
        }
    }

export {
    buildBlocks,
}
