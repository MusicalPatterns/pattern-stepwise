import { as, Block, musicalAs, reverse } from '@musical-patterns/utilities'
import { computeAscentStoop, computeDescentStoop } from '../../../../../src/indexForTest'

describe('ascents', () => {
    it('are all the reversals of the equivalent descent', () => {
        expect(computeAscentStoop(musicalAs.Value(15), { minimum: musicalAs.Value(3), length: as.Cardinal<Block>(3) }))
            .toEqual(reverse(computeDescentStoop(musicalAs.Value(15), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(3),
            })))

        expect(computeAscentStoop(musicalAs.Value(35), { minimum: musicalAs.Value(3) }))
            .toEqual(reverse(computeDescentStoop(musicalAs.Value(35), { minimum: musicalAs.Value(3) })))

        expect(computeAscentStoop(musicalAs.Value(21), { length: as.Cardinal<Block>(3) }))
            .toEqual(reverse(computeDescentStoop(musicalAs.Value(21), { length: as.Cardinal<Block>(3) })))
    })
})
