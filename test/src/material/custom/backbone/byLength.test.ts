import { as, Block, musicalAs } from '@musical-patterns/utilities'
import { computeBackboneStoop } from '../../../../../src/indexForTest'

describe('by length', () => {
    it('errors for even length', () => {
        expect(() => computeBackboneStoop(musicalAs.Value(9), { length: as.Cardinal<Block>(2) }))
            .toThrowError(`Cannot compute a backbone stoop with an even length. This length was 2.`)
        expect(() => computeBackboneStoop(musicalAs.Value(9), { length: as.Cardinal<Block>(8) }))
            .toThrowError(`Cannot compute a backbone stoop with an even length. This length was 8.`)
    })

    describe('length of 1', () => {
        it('works for any odd value', () => {
            expect(computeBackboneStoop(musicalAs.Value(1), { length: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 1 ]))
            expect(computeBackboneStoop(musicalAs.Value(3), { length: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 3 ]))
            expect(computeBackboneStoop(musicalAs.Value(5), { length: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 5 ]))
            expect(computeBackboneStoop(musicalAs.Value(13), { length: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 13 ]))
            expect(computeBackboneStoop(musicalAs.Value(77), { length: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 77 ]))
        })
    })

    describe('length of 3', () => {
        it('works for values of 5 + 6n', () => {
            expect(computeBackboneStoop(musicalAs.Value(5), { length: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 1, 3, 1 ]))
            expect(computeBackboneStoop(musicalAs.Value(11), { length: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 3, 5, 3 ]))
            expect(computeBackboneStoop(musicalAs.Value(17), { length: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 5, 7, 5 ]))
        })

        it('works for values of 7 + 6n', () => {
            expect(computeBackboneStoop(musicalAs.Value(7), { length: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 3, 1, 3 ]))
            expect(computeBackboneStoop(musicalAs.Value(13), { length: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 5, 3, 5 ]))
            expect(computeBackboneStoop(musicalAs.Value(19), { length: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 7, 5, 7 ]))
        })

        it('errors for other odd values', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(1), { length: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute a backbone stoop for value 1 and length 3.')
            expect(() => computeBackboneStoop(musicalAs.Value(3), { length: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute a backbone stoop for value 3 and length 3.')

            expect(() => computeBackboneStoop(musicalAs.Value(9), { length: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute a backbone stoop for value 9 and length 3.')

            expect(() => computeBackboneStoop(musicalAs.Value(15), { length: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute a backbone stoop for value 15 and length 3.')

            expect(() => computeBackboneStoop(musicalAs.Value(21), { length: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute a backbone stoop for value 21 and length 3.')
        })
    })

    describe('length of 5', () => {
        it('works for values of 9 + 10n', () => {
            expect(computeBackboneStoop(musicalAs.Value(9), { length: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 1, 3, 1, 3, 1 ]))
            expect(computeBackboneStoop(musicalAs.Value(19), { length: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 3, 5, 3, 5, 3 ]))
            expect(computeBackboneStoop(musicalAs.Value(29), { length: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 5, 7, 5, 7, 5 ]))
        })

        it('works for values of 11 + 10n', () => {
            expect(computeBackboneStoop(musicalAs.Value(11), { length: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 3, 1, 3, 1, 3 ]))
            expect(computeBackboneStoop(musicalAs.Value(21), { length: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 5, 3, 5, 3, 5 ]))
            expect(computeBackboneStoop(musicalAs.Value(31), { length: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 7, 5, 7, 5, 7 ]))
        })

        it('errors for other odd values', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(1), { length: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute a backbone stoop for value 1 and length 5.')
            expect(() => computeBackboneStoop(musicalAs.Value(3), { length: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute a backbone stoop for value 3 and length 5.')
            expect(() => computeBackboneStoop(musicalAs.Value(5), { length: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute a backbone stoop for value 5 and length 5.')
            expect(() => computeBackboneStoop(musicalAs.Value(7), { length: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute a backbone stoop for value 7 and length 5.')

            expect(() => computeBackboneStoop(musicalAs.Value(13), { length: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute a backbone stoop for value 13 and length 5.')
            expect(() => computeBackboneStoop(musicalAs.Value(15), { length: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute a backbone stoop for value 15 and length 5.')
            expect(() => computeBackboneStoop(musicalAs.Value(17), { length: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute a backbone stoop for value 17 and length 5.')
        })
    })
})
