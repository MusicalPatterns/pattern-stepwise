import { flatten, Integer, musicalAs, ONE, product, range, sum, TWO } from '@musical-patterns/utilities'
import { THREE_PER_STOOP_CHUNK_COUNT } from './constants'
import { StoopInstruction, StoopType } from './types'

const threePerStoopInstructions: StoopInstruction[] = flatten(
    range(THREE_PER_STOOP_CHUNK_COUNT)
        .map((integer: Integer) => sum(product(integer, TWO), ONE))
        .map((oddNumber: Integer): StoopInstruction[] => [
                [ musicalAs.Value(oddNumber), StoopType.BACKBONE ],
                [ musicalAs.Value(oddNumber), StoopType.BACKBONE ],
                [ musicalAs.Value(oddNumber), StoopType.ASCENT ],
            ],
        ),
)

export {
    threePerStoopInstructions,
}
