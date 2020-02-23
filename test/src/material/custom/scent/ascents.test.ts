import { as, Block, computeReverse, musicalAs } from '@musical-patterns/utilities'
import { computeAscentShapedChildStairs, computeDescentShapedChildStairs } from '../../../../../src/indexForTest'

describe('ascent-shaped child stairs', (): void => {
    it('are all the reversals of the equivalent descent-shaped child stairs', (): void => {
        expect(computeAscentShapedChildStairs(musicalAs.Value(15), {
            childCount: as.Cardinal<Block>(3),
            minChildValue: musicalAs.Value(3),
        }))
            .toEqual(computeReverse(computeDescentShapedChildStairs(musicalAs.Value(15), {
                childCount: as.Cardinal<Block>(3),
                minChildValue: musicalAs.Value(3),
            })))

        expect(computeAscentShapedChildStairs(musicalAs.Value(35), { minChildValue: musicalAs.Value(3) }))
            .toEqual(computeReverse(computeDescentShapedChildStairs(musicalAs.Value(35), { minChildValue: musicalAs.Value(3) })))

        expect(computeAscentShapedChildStairs(musicalAs.Value(21), { childCount: as.Cardinal<Block>(3) }))
            .toEqual(computeReverse(computeDescentShapedChildStairs(musicalAs.Value(21), { childCount: as.Cardinal<Block>(3) })))
    })
})
