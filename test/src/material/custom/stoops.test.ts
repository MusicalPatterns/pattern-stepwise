import { as, Block, musicalAs } from '@musical-patterns/utilities'
import { computeStoop, StoopType } from '../../../../src/indexForTest'

describe('stoops', () => {
    it('can return a backbone stoop', () => {
        expect(computeStoop(StoopType.BACKBONE, musicalAs.Value(31), { minimum: musicalAs.Value(5) }))
            .toEqual(as.Block([ 7, 5, 7, 5, 7 ]))
    })

    it('can return a scent stoop', () => {
        expect(computeStoop(StoopType.DESCENT, musicalAs.Value(35), { length: as.Cardinal<Block>(5) }))
            .toEqual(as.Block([ 3, 5, 7, 9, 11 ]))
    })
})
