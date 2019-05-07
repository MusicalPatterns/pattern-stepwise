// tslint:disable no-duplicate-string

import { as, Block, musicalAs } from '@musical-patterns/utilities'
import { computeDescentStoop } from '../../../../../src/indexForTest'

describe('by both length and minimum', () => {
    it('errors for even minima', () => {
        expect(() => computeDescentStoop(musicalAs.Value(9), {
            length: as.Cardinal<Block>(3),
            minimum: musicalAs.Value(2),
        }))
            .toThrowError(`Cannot compute a scent stoop with an even minimum. This minimum was 2.`)
        expect(() => computeDescentStoop(musicalAs.Value(9), {
            length: as.Cardinal<Block>(3),
            minimum: musicalAs.Value(8),
        }))
            .toThrowError(`Cannot compute a scent stoop with an even minimum. This minimum was 8.`)
    })

    it('errors for even length', () => {
        expect(() => computeDescentStoop(musicalAs.Value(9), {
            length: as.Cardinal<Block>(2),
            minimum: musicalAs.Value(9),
        }))
            .toThrowError(`Cannot compute a scent stoop with an even length. This length was 2.`)
        expect(() => computeDescentStoop(musicalAs.Value(9), {
            length: as.Cardinal<Block>(8),
            minimum: musicalAs.Value(9),
        }))
            .toThrowError(`Cannot compute a scent stoop with an even length. This length was 8.`)
    })

    describe('minimum 3 and length 1', () => {
        it('works for value 3 only', () => {
            expect(computeDescentStoop(musicalAs.Value(3), {
                length: as.Cardinal<Block>(1),
                minimum: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 3 ]))
        })

        it('errors for other odd values', () => {
            expect(() => computeDescentStoop(musicalAs.Value(1), {
                length: as.Cardinal<Block>(1),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a scent stoop for value 1, length 1, and minimum 3.')
            expect(() => computeDescentStoop(musicalAs.Value(5), {
                length: as.Cardinal<Block>(1),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a scent stoop for value 5, length 1, and minimum 3.')
        })
    })

    describe('minimum 3 and length 3', () => {
        it('works for value 15 only', () => {
            expect(computeDescentStoop(musicalAs.Value(15), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 3, 5, 7 ]))
        })

        it('errors for other odd values', () => {
            expect(() => computeDescentStoop(musicalAs.Value(9), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a scent stoop for value 9, length 3, and minimum 3.')
            expect(() => computeDescentStoop(musicalAs.Value(21), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a scent stoop for value 21, length 3, and minimum 3.')
        })
    })

    describe('minimum 3 and length 5', () => {
        it('works for value 35 only', () => {
            expect(computeDescentStoop(musicalAs.Value(35), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 3, 5, 7, 9, 11 ]))
        })

        it('errors for other odd values', () => {
            expect(() => computeDescentStoop(musicalAs.Value(25), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a scent stoop for value 25, length 5, and minimum 3.')
            expect(() => computeDescentStoop(musicalAs.Value(45), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(3),
            }))
                .toThrowError('Cannot compute a scent stoop for value 45, length 5, and minimum 3.')
        })
    })

    describe('minimum 5 and length 1', () => {
        it('works for value 5 only', () => {
            expect(computeDescentStoop(musicalAs.Value(5), {
                length: as.Cardinal<Block>(1),
                minimum: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 5 ]))
        })

        it('errors for other odd values', () => {
            expect(() => computeDescentStoop(musicalAs.Value(3), {
                length: as.Cardinal<Block>(1),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a scent stoop for value 3, length 1, and minimum 5.')
            expect(() => computeDescentStoop(musicalAs.Value(7), {
                length: as.Cardinal<Block>(1),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a scent stoop for value 7, length 1, and minimum 5.')
        })
    })

    describe('minimum 5 and length 3', () => {
        it('works for value 21 only', () => {
            expect(computeDescentStoop(musicalAs.Value(21), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 5, 7, 9 ]))
        })

        it('errors for other odd values', () => {
            expect(() => computeDescentStoop(musicalAs.Value(15), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a scent stoop for value 15, length 3, and minimum 5.')
            expect(() => computeDescentStoop(musicalAs.Value(27), {
                length: as.Cardinal<Block>(3),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a scent stoop for value 27, length 3, and minimum 5.')
        })
    })

    describe('minimum 5 and length 5', () => {
        it('works for value 45 only', () => {
            expect(computeDescentStoop(musicalAs.Value(45), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 5, 7, 9, 11, 13 ]))
        })

        it('errors for other odd values', () => {
            expect(() => computeDescentStoop(musicalAs.Value(35), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a scent stoop for value 35, length 5, and minimum 5.')
            expect(() => computeDescentStoop(musicalAs.Value(55), {
                length: as.Cardinal<Block>(5),
                minimum: musicalAs.Value(5),
            }))
                .toThrowError('Cannot compute a scent stoop for value 55, length 5, and minimum 5.')
        })
    })
})
