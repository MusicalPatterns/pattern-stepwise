import { as, Block, musicalAs } from '@musical-patterns/utilities'
import { ChildStairsShape, computeChildStairs } from '../../../../src/indexForTest'

describe('child stairs', () => {
    it('can compute child stairs with the workout shape', () => {
        expect(computeChildStairs(ChildStairsShape.WORKOUT, musicalAs.Value(31), { minChildValue: musicalAs.Value(5) }))
            .toEqual(as.Block([ 7, 5, 7, 5, 7 ]))
    })

    it('can compute child stairs with the descent shape', () => {
        expect(computeChildStairs(ChildStairsShape.DESCENT, musicalAs.Value(35), { childCount: as.Cardinal<Block>(5) }))
            .toEqual(as.Block([ 3, 5, 7, 9, 11 ]))
    })
})
