// tslint:disable no-duplicate-string

import { as, Block, musicalAs } from '@musical-patterns/utilities'
import { computeBackboneStoop } from '../../../../../src/indexForTest'

describe('by both minimum and length', () => {
    it('errors for even minima', () => {
        expect(() => computeBackboneStoop(musicalAs.Value(9), {
            length: as.Cardinal<Block>(3),
            minimum: musicalAs.Value(2),
        }))
            .toThrowError(`Cannot compute a backbone stoop with an even minimum. This minimum was 2.`)
        expect(() => computeBackboneStoop(musicalAs.Value(9), {
            length: as.Cardinal<Block>(3),
            minimum: musicalAs.Value(8),
        }))
            .toThrowError(`Cannot compute a backbone stoop with an even minimum. This minimum was 8.`)
    })

    it('errors for even length', () => {
        expect(() => computeBackboneStoop(musicalAs.Value(9), {
            length: as.Cardinal<Block>(2),
            minimum: musicalAs.Value(9),
        }))
            .toThrowError(`Cannot compute a backbone stoop with an even length. This length was 2.`)
        expect(() => computeBackboneStoop(musicalAs.Value(9), {
            length: as.Cardinal<Block>(8),
            minimum: musicalAs.Value(9),
        }))
            .toThrowError(`Cannot compute a backbone stoop with an even length. This length was 8.`)
    })

    describe('minimum 3 and length 1', () => {
        it('works for values of 3 or 5', () => {
            expect(computeBackboneStoop(musicalAs.Value(3), {
                length: as.Cardinal<Block>(1),
                minimum: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 3 ]))
            expect(computeBackboneStoop(musicalAs.Value(5), {
                length: as.Cardinal<Block>(1),
                minimum: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 5 ]))
        })

        it('errors for other odd values, but because length of 1 works for any odd value, you cannot get a new error here, only the ones you would get trying a bad minimum and value combination', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(1), {
                length: as.Cardinal<Block>(1),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 1 and minimum 3.')
            expect(() => computeBackboneStoop(musicalAs.Value(7), {
                length: as.Cardinal<Block>(1),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 7 and minimum 3.')
        })
    })

    describe('minimum 3 and length 3', () => {
        it('works for values of 11 or 13', () => {
            expect(computeBackboneStoop(musicalAs.Value(11), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 3, 5, 3 ]))
            expect(computeBackboneStoop(musicalAs.Value(13), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 5, 3, 5 ]))
        })

        it('errors for other values that could have worked for that value & minimum combo or that value & length combo but cannot work all together', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(5), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 5, length 3, and minimum 3.')
            expect(() => computeBackboneStoop(musicalAs.Value(29), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 29, length 3, and minimum 3.')
        })

        it('can still give you the error specific to value and length', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(3), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 3 and length 3.')
            expect(() => computeBackboneStoop(musicalAs.Value(21), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 21 and length 3.')
        })

        it('can still give you the error specific to value and minimum', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(7), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 7 and minimum 3.')
            expect(() => computeBackboneStoop(musicalAs.Value(17), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 17 and minimum 3.')
        })

        it('can give you an error if it cannot work for either that value and length combo or that value and minimum combo', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(1), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for either value 1 and length 3 or for value 1 and minimum 3, let alone value 1, length 3, and minimum 3.')
            expect(() => computeBackboneStoop(musicalAs.Value(9), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for either value 9 and length 3 or for value 9 and minimum 3, let alone value 9, length 3, and minimum 3.')
        })
    })

    describe('minimum 3 and length 5', () => {
        it('works for values of 19 or 21', () => {
            expect(computeBackboneStoop(musicalAs.Value(19), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 3, 5, 3, 5, 3 ]))
            expect(computeBackboneStoop(musicalAs.Value(21), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 5, 3, 5, 3, 5 ]))
        })

        it('errors for other values that could have worked for that value & minimum combo or that value & length combo but cannot work all together', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(11), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 11, length 5, and minimum 3.')
            expect(() => computeBackboneStoop(musicalAs.Value(29), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 29, length 5, and minimum 3.')
        })

        it('can still give you the error specific to value and length', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(3), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 3 and length 5.')
            expect(() => computeBackboneStoop(musicalAs.Value(5), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 5 and length 5.')
        })

        it('can still give you the error specific to value and minimum', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(9), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 9 and minimum 3.')
            expect(() => computeBackboneStoop(musicalAs.Value(31), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 31 and minimum 3.')
        })

        it('can give you an error if it cannot work for either that value and length combo or that value and minimum combo', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(1), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for either value 1 and length 5 or for value 1 and minimum 3, let alone value 1, length 5, and minimum 3.')
            expect(() => computeBackboneStoop(musicalAs.Value(7), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a backbone stoop for either value 7 and length 5 or for value 7 and minimum 3, let alone value 7, length 5, and minimum 3.')
        })
    })

    describe('minimum 5 and length 1', () => {
        it('works for values of 5 or 7', () => {
            expect(computeBackboneStoop(musicalAs.Value(5), {
                length: as.Cardinal<Block>(1),
                minimum: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 5 ]))
            expect(computeBackboneStoop(musicalAs.Value(7), {
                length: as.Cardinal<Block>(1),
                minimum: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 7 ]))
        })

        it('errors for other odd values, but because length of 1 works for any odd value, you cannot get a new error here, only the ones you would get trying a bad minimum and value combination', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(3), {
                length: as.Cardinal<Block>(1),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 3 and minimum 5.')
            expect(() => computeBackboneStoop(musicalAs.Value(9), {
                length: as.Cardinal<Block>(1),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 9 and minimum 5.')
        })
    })

    describe('minimum 5 and length 3', () => {
        it('works for values of 17 or 19', () => {
            expect(computeBackboneStoop(musicalAs.Value(17), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 5, 7, 5 ]))
            expect(computeBackboneStoop(musicalAs.Value(19), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 7, 5, 7 ]))
        })

        it('errors for other values that could have worked for that value & minimum combo or that value & length combo but cannot work all together', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(29), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 29, length 3, and minimum 5.')
            expect(() => computeBackboneStoop(musicalAs.Value(31), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 31, length 3, and minimum 5.')
        })

        it('actually cannot give the error specific to value and length because for that to happen it would have to work for value and minimum but not for value and length, and the only ones that would work for value and minimum would also work for value and length', () => {
            // tslint:disable-next-line no-empty-block
        })

        it('can still give you the error specific to value and minimum', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(11), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 11 and minimum 5.')
            expect(() => computeBackboneStoop(musicalAs.Value(25), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 25 and minimum 5.')
        })

        it('can give you an error if it cannot work for either that value and length combo or that value and minimum combo', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(1), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for either value 1 and length 3 or for value 1 and minimum 5, let alone value 1, length 3, and minimum 5.')
            expect(() => computeBackboneStoop(musicalAs.Value(3), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for either value 3 and length 3 or for value 3 and minimum 5, let alone value 3, length 3, and minimum 5.')
        })
    })

    describe('minimum 5, length 5', () => {
        it('works for values of 29 or 31', () => {
            expect(computeBackboneStoop(musicalAs.Value(29), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 5, 7, 5, 7, 5 ]))
            expect(computeBackboneStoop(musicalAs.Value(31), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 7, 5, 7, 5, 7 ]))
        })

        it('errors for other values that could have worked for that value & minimum combo or that value & length combo but cannot work all together', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(19), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 19, length 5, and minimum 5.')
            expect(() => computeBackboneStoop(musicalAs.Value(41), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 41, length 5, and minimum 5.')
        })

        it('can still give you the error specific to value and length', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(5), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 5 and length 5.')
            expect(() => computeBackboneStoop(musicalAs.Value(7), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 7 and length 5.')
        })

        it('can still give you the error specific to value and minimum', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(9), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 9 and minimum 5.')
            expect(() => computeBackboneStoop(musicalAs.Value(11), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for value 11 and minimum 5.')
        })

        it('can give you an error if it cannot work for either that value and length combo or that value and minimum combo', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(1), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for either value 1 and length 5 or for value 1 and minimum 5, let alone value 1, length 5, and minimum 5.')
            expect(() => computeBackboneStoop(musicalAs.Value(3), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a backbone stoop for either value 3 and length 5 or for value 3 and minimum 5, let alone value 3, length 5, and minimum 5.')
        })
    })
})
