// tslint:disable no-magic-numbers max-line-length max-file-line-count

import {
    as,
    Block,
    FIRST,
    indexJustBeyondFinalElement,
    insteadOf,
    Integer,
    map,
    musicalAs,
    ONE,
    Ordinal,
    product,
    range,
    repeat,
    sequence,
    slice,
    sum,
    use,
} from '@musical-patterns/utilities'
import { computeStoop, StoopInstruction, threePerStoopInstructions } from './custom'
import { StepwiseBlocks } from './types'

const computeBlocks: () => StepwiseBlocks =
    (): StepwiseBlocks => {
        const mainDescent: Block = as.Block(
            range(ONE, as.Integer(29))
                .map((integer: Integer) => sum(product(integer, 2), 1)),
        )
        const mainDescentContinuation: Block = as.Block(
            range(ONE, as.Integer(13))
                .map((integer: Integer) => sum(product(integer, 2), 57)),
        )

        const threePer: Block = as.Block(sequence([ 3 ], ...map(
            slice(mainDescent, insteadOf<Ordinal, Block>(FIRST), indexJustBeyondFinalElement(mainDescent)),
            (descentStepValue: number, index: Ordinal) => {
                const [ minimum, stoopType ] = use.Ordinal(threePerStoopInstructions, insteadOf<Ordinal, StoopInstruction[]>(index))

                return computeStoop(stoopType, musicalAs.Value(descentStepValue), { length: as.Cardinal<Block>(3), minimum })
            },
        )))

        const fivePer: Block = as.Block([
            //                                                                  .. MainDescent ×24s .. Continuation ×24s
            //                                                                  .. Odds .. All      .. Odds .. All
            15, 13, 11, 9,                                                                                  // 2×24
            11, 13,                                                                                         // 1×24
            15, 13, 11, 9,                                                                                  // 2×24
            7, 5, 3, 5, 3, 1,                                                           // 1×24
            3, 5, 7, 9,                                                                 // 1×24
            7, 5, 3, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 9, 7, 5,         // 5×24
            3, 5, 7, 9,                                                                 // 1×24
            11, 9, 7, 5, 7, 9,                                                          // 2×24
            7, 9, 7, 9, 7, 9,                                                   // 2×24
            7, 9, 7, 9, 7, 9,                                                   // 2×24
            11, 9, 7, 5, 7, 9,                                                  // 2×24
            11, 13,                                                             // 1×24
            11, 9, 7, 9, 11, 9, 11, 9, 11, 9,                                           // 4×24
            11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 7, 9,                           // 5×24
            11, 13,                                                             // 1×24
            15, 13, 11, 9,                                                      // 2×24
            11, 13,                                                             // 1×24
        ])

        const sevenPer: Block = as.Block([
            //                                                                                              .. MainDescent ×24s .. Continuation ×24s
            //                                                                                              .. Odds .. All      .. Odds .. All
            7, 9, 7, 9, 11, 9, 7, 5, 7, 9, 7, 9, 11, 13,                                                                                // 5×24
            15, 13, 11, 9, 7, 5, 3, 5, 7, 9, 11, 13, 11, 9, 7, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9,                     // 11×24
            11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 11, 9, 11, 9,                                                                           // 6×24
            7, 9, 7, 9, 7, 5, 3, 1, 3, 5, 7, 9, 11, 13,                                                             // 4×24
            11, 9, 7, 5, 7, 5, 7, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9,            // 9×24
        ])

        const ninePer: Block = as.Block([
            //                                                                                                                      .. Continuation ×24s
            //                                                                                                                      .. Odds .. All
            7, 5, 7, 5, 7, 9, 7, 5, 7, 5, 7, 5, 7, 9, 7, 5, 7, 9,                                                                           // 5×24
            7, 9, 7, 9, 7, 5, 7, 5, 7, 5, 3, 5, 7, 5, 7, 9, 11, 13, 15, 13, 11, 9, 7, 5, 3, 1, 3, 5, 7, 9, 7, 9, 7, 9, 7, 9,        // 11×24
            7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9,                                                                           // 6×24
            11, 9, 7, 9, 7, 9, 7, 9, 7, 9, 11, 9, 7, 9, 7, 9, 7, 9, 7, 5, 7, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1,    // 13×24
        ])

        const backbone: Block = as.Block(repeat([ 3, 1 ], as.Cardinal<number[]>(6 * 35)))

        const kick: Block = as.Block([ 8 ])
        const snare: Block = as.Block([ 24 ])
        const hihat: Block = as.Block([ 3 ])

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
    computeBlocks,
}
