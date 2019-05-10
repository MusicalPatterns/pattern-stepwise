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
import { ChildStairsInstruction, computeChildStairs, threePerChildStairsInstructionsChunk } from './custom'
import { StepwiseBlocks } from './types'

const computeBlocks: () => StepwiseBlocks =
    (): StepwiseBlocks => {
        const alpha: Block = as.Block(
            range(ONE, as.Integer(29))
                .map((integer: Integer) => sum(product(integer, 2), 1)),
        )
        const beta: Block = as.Block(
            range(ONE, as.Integer(13))
                .map((integer: Integer) => sum(product(integer, 2), 57)),
        )

        const threePer: Block = as.Block(sequence([ 3 ], ...map(
            slice(alpha, insteadOf<Ordinal, Block>(FIRST), indexJustBeyondFinalElement(alpha)),
            (parentStepValue: number, index: Ordinal) => {
                const [ minChildValue, childStairsShape ] = use.Ordinal(
                    threePerChildStairsInstructionsChunk,
                    insteadOf<Ordinal, ChildStairsInstruction[]>(index),
                )

                return computeChildStairs(
                    childStairsShape,
                    musicalAs.Value(parentStepValue),
                    { childCount: as.Cardinal<Block>(3), minChildValue },
                )
            },
        )))

        /*
        For the following three ChildAisles (FivePer, SevenPer, and NinePer):

        Each row is a ChildBalusterPhase (subdividing of a Flight)
        Each cluster in a column is a Flight (ParentBalusterPhase)
        Each column is a FlightChain, which a ParentAisle alternates between (either Odds or Wholes)
        Each pair of columns is a ParentAisle (either Alpha or Beta)
        These ChildStairs are children of ParentStairs from different ParentAisle & FlightChain combinations at different times
        They happen to divide each ParentStairs into 5 parts each, but that's not how we're viewing it here
        Here we're viewing it as how the ChildStairs sync with Balusters
        Each # represents a count of Balusters
         */

        const fivePer: Block = as.Block([
            //                                                                  // Stairs are children of Parent & FlightChain:
            //                                                                  // Alpha &          // Beta &
            //                                                                  // Odds // Wholes   // Odds // Wholes
            15, 13, 11, 9,                                                                                  // 2
            11, 13,                                                                                         // 1
            15, 13, 11, 9,                                                                                  // 2
            7, 5, 3, 5, 3, 1,                                                           // 1
            3, 5, 7, 9,                                                                 // 1
            7, 5, 3, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 9, 7, 5,         // 5
            3, 5, 7, 9,                                                                 // 1
            11, 9, 7, 5, 7, 9,                                                          // 2
            7, 9, 7, 9, 7, 9,                                                   // 2
            7, 9, 7, 9, 7, 9,                                                   // 2
            11, 9, 7, 5, 7, 9,                                                  // 2
            11, 13,                                                             // 1
            11, 9, 7, 9, 11, 9, 11, 9, 11, 9,                                           // 4
            11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 7, 9,                           // 5
            11, 13,                                                             // 1
            15, 13, 11, 9,                                                      // 2
            11, 13,                                                             // 1
        ])

        const sevenPer: Block = as.Block([
            //                                                                                              // Stairs are children of Parent & FlightChain:
            //                                                                                              // Alpha &          // Beta &
            //                                                                                              // Odds // Wholes   // Odds // Wholes
            7, 9, 7, 9, 11, 9, 7, 5, 7, 9, 7, 9, 11, 13,                                                                                // 5
            15, 13, 11, 9, 7, 5, 3, 5, 7, 9, 11, 13, 11, 9, 7, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9,                     // 11
            11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 11, 9, 11, 9,                                                                           // 6
            7, 9, 7, 9, 7, 5, 3, 1, 3, 5, 7, 9, 11, 13,                                                             // 4
            11, 9, 7, 5, 7, 5, 7, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9,            // 9
        ])

        const ninePer: Block = as.Block([
            //                                                                                                                      // Stairs are children of Parent & FlightChain:
            //                                                                                                                      // Beta &
            //                                                                                                                      // Odds // Wholes
            7, 5, 7, 5, 7, 9, 7, 5, 7, 5, 7, 5, 7, 9, 7, 5, 7, 9,                                                                           // 5
            7, 9, 7, 9, 7, 5, 7, 5, 7, 5, 3, 5, 7, 5, 7, 9, 11, 13, 15, 13, 11, 9, 7, 5, 3, 1, 3, 5, 7, 9, 7, 9, 7, 9, 7, 9,        // 11
            7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9,                                                                           // 6
            11, 9, 7, 9, 7, 9, 7, 9, 7, 9, 11, 9, 7, 9, 7, 9, 7, 9, 7, 5, 7, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1,    // 13
        ])

        const workout: Block = as.Block(repeat([ 3, 1 ], as.Cardinal<number[]>(6 * 35)))

        const kick: Block = as.Block([ 8 ])
        const snare: Block = as.Block([ 24 ])
        const hihat: Block = as.Block([ 3 ])

        return {
            alpha,
            beta,
            fivePer,
            hihat,
            kick,
            ninePer,
            sevenPer,
            snare,
            threePer,
            workout,
        }
    }

export {
    computeBlocks,
}
