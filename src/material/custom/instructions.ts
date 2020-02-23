import { flatten, Integer, musicalAs, ONE, product, range, sum, TWO } from '@musical-patterns/utilities'
import { THREE_PER_CHILD_STAIRS_INSTRUCTIONS_CHUNK_COUNT } from './constants'
import { ChildStairsInstruction, ChildStairsShape } from './types'

const threePerChildStairsInstructionsChunk: ChildStairsInstruction[] = flatten(
    range(THREE_PER_CHILD_STAIRS_INSTRUCTIONS_CHUNK_COUNT)
        .map((integer: Integer): Integer => sum(product(integer, TWO), ONE))
        .map((oddNumber: Integer): ChildStairsInstruction[] => [
                [ musicalAs.Value(oddNumber), ChildStairsShape.WORKOUT ],
                [ musicalAs.Value(oddNumber), ChildStairsShape.WORKOUT ],
                [ musicalAs.Value(oddNumber), ChildStairsShape.ASCENT ],
            ],
        ),
)

export {
    threePerChildStairsInstructionsChunk,
}
