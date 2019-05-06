// tslint:disable no-duplicate-string

import { as, Block, musicalAs } from '@musical-patterns/utilities'
import { computeBackboneStoop } from '../../../../../src/indexForTest'

describe('backbones', () => {
    it('errors for even values', () => {
        expect(() => computeBackboneStoop(musicalAs.Value(2), { minimum: musicalAs.Value(9) }))
            .toThrowError('Cannot compute a backbone stoop for an even value. This value was 2.')
        expect(() => computeBackboneStoop(musicalAs.Value(6), { minimum: musicalAs.Value(9) }))
            .toThrowError('Cannot compute a backbone stoop for an even value. This value was 6.')
        expect(() => computeBackboneStoop(musicalAs.Value(10), { minimum: musicalAs.Value(9) }))
            .toThrowError('Cannot compute a backbone stoop for an even value. This value was 10.')
    })

    describe('by minimum', () => {
        it('errors for even minima', () => {
            expect(() => computeBackboneStoop(musicalAs.Value(9), { minimum: musicalAs.Value(2) }))
                .toThrowError(`Cannot compute a backbone stoop with an even minimum. This minimum was 2.`)
            expect(() => computeBackboneStoop(musicalAs.Value(9), { minimum: musicalAs.Value(8) }))
                .toThrowError(`Cannot compute a backbone stoop with an even minimum. This minimum was 8.`)
        })

        describe(
            `minimum of 1 (for each minimum, the values for which it works are where \
the constant is either one of the two elements of the backbone cycle for that minimum, \
and the multiple is 4x whichth odd number it is)`,
            () => {
                it('works for values of 1 + 4n', () => {
                    expect(computeBackboneStoop(musicalAs.Value(1), { minimum: musicalAs.Value(1) }))
                        .toEqual(as.Block([ 1 ]))
                    expect(computeBackboneStoop(musicalAs.Value(5), { minimum: musicalAs.Value(1) }))
                        .toEqual(as.Block([ 1, 3, 1 ]))
                    expect(computeBackboneStoop(musicalAs.Value(9), { minimum: musicalAs.Value(1) }))
                        .toEqual(as.Block([ 1, 3, 1, 3, 1 ]))
                    expect(computeBackboneStoop(musicalAs.Value(13), { minimum: musicalAs.Value(1) }))
                        .toEqual(as.Block([ 1, 3, 1, 3, 1, 3, 1 ]))
                })

                it('works for values of 3 + 4n', () => {
                    expect(computeBackboneStoop(musicalAs.Value(3), { minimum: musicalAs.Value(1) }))
                        .toEqual(as.Block([ 3 ]))
                    expect(computeBackboneStoop(musicalAs.Value(7), { minimum: musicalAs.Value(1) }))
                        .toEqual(as.Block([ 3, 1, 3 ]))
                    expect(computeBackboneStoop(musicalAs.Value(11), { minimum: musicalAs.Value(1) }))
                        .toEqual(as.Block([ 3, 1, 3, 1, 3 ]))
                    expect(computeBackboneStoop(musicalAs.Value(15), { minimum: musicalAs.Value(1) }))
                        .toEqual(as.Block([ 3, 1, 3, 1, 3, 1, 3 ]))
                })
            },
        )

        describe('minimum of 3', () => {
            it('works for values of 3 + 8n', () => {
                expect(computeBackboneStoop(musicalAs.Value(3), { minimum: musicalAs.Value(3) }))
                    .toEqual(as.Block([ 3 ]))
                expect(computeBackboneStoop(musicalAs.Value(11), { minimum: musicalAs.Value(3) }))
                    .toEqual(as.Block([ 3, 5, 3 ]))
                expect(computeBackboneStoop(musicalAs.Value(19), { minimum: musicalAs.Value(3) }))
                    .toEqual(as.Block([ 3, 5, 3, 5, 3 ]))
            })

            it('works for values of 5 + 8n', () => {
                expect(computeBackboneStoop(musicalAs.Value(5), { minimum: musicalAs.Value(3) }))
                    .toEqual(as.Block([ 5 ]))
                expect(computeBackboneStoop(musicalAs.Value(13), { minimum: musicalAs.Value(3) }))
                    .toEqual(as.Block([ 5, 3, 5 ]))
                expect(computeBackboneStoop(musicalAs.Value(21), { minimum: musicalAs.Value(3) }))
                    .toEqual(as.Block([ 5, 3, 5, 3, 5 ]))
            })

            it('errors for other odd values', () => {
                expect(() => computeBackboneStoop(musicalAs.Value(1), { minimum: musicalAs.Value(3) }))
                    .toThrowError('Cannot compute a backbone stoop for value 1 and minimum 3.')

                expect(() => computeBackboneStoop(musicalAs.Value(7), { minimum: musicalAs.Value(3) }))
                    .toThrowError('Cannot compute a backbone stoop for value 7 and minimum 3.')
                expect(() => computeBackboneStoop(musicalAs.Value(9), { minimum: musicalAs.Value(3) }))
                    .toThrowError('Cannot compute a backbone stoop for value 9 and minimum 3.')

                expect(() => computeBackboneStoop(musicalAs.Value(15), { minimum: musicalAs.Value(3) }))
                    .toThrowError('Cannot compute a backbone stoop for value 15 and minimum 3.')
                expect(() => computeBackboneStoop(musicalAs.Value(17), { minimum: musicalAs.Value(3) }))
                    .toThrowError('Cannot compute a backbone stoop for value 17 and minimum 3.')
            })
        })

        describe('minimum of 5', () => {
            it('works for values of 5 + 12n', () => {
                expect(computeBackboneStoop(musicalAs.Value(5), { minimum: musicalAs.Value(5) }))
                    .toEqual(as.Block([ 5 ]))
                expect(computeBackboneStoop(musicalAs.Value(17), { minimum: musicalAs.Value(5) }))
                    .toEqual(as.Block([ 5, 7, 5 ]))
            })

            it('works for values of 7 + 12n', () => {
                expect(computeBackboneStoop(musicalAs.Value(7), { minimum: musicalAs.Value(5) }))
                    .toEqual(as.Block([ 7 ]))
                expect(computeBackboneStoop(musicalAs.Value(19), { minimum: musicalAs.Value(5) }))
                    .toEqual(as.Block([ 7, 5, 7 ]))
            })

            it('errors for other odd values', () => {
                expect(() => computeBackboneStoop(musicalAs.Value(1), { minimum: musicalAs.Value(5) }))
                    .toThrowError('Cannot compute a backbone stoop for value 1 and minimum 5.')
                expect(() => computeBackboneStoop(musicalAs.Value(3), { minimum: musicalAs.Value(5) }))
                    .toThrowError('Cannot compute a backbone stoop for value 3 and minimum 5.')

                expect(() => computeBackboneStoop(musicalAs.Value(9), { minimum: musicalAs.Value(5) }))
                    .toThrowError('Cannot compute a backbone stoop for value 9 and minimum 5.')
                expect(() => computeBackboneStoop(musicalAs.Value(11), { minimum: musicalAs.Value(5) }))
                    .toThrowError('Cannot compute a backbone stoop for value 11 and minimum 5.')
            })
        })

        describe('minimum of 7', () => {
            it('works for values of 7 + 16n', () => {
                expect(computeBackboneStoop(musicalAs.Value(7), { minimum: musicalAs.Value(7) }))
                    .toEqual(as.Block([ 7 ]))
                expect(computeBackboneStoop(musicalAs.Value(23), { minimum: musicalAs.Value(7) }))
                    .toEqual(as.Block([ 7, 9, 7 ]))
            })

            it('works for values of 9 + 16n', () => {
                expect(computeBackboneStoop(musicalAs.Value(9), { minimum: musicalAs.Value(7) }))
                    .toEqual(as.Block([ 9 ]))
                expect(computeBackboneStoop(musicalAs.Value(25), { minimum: musicalAs.Value(7) }))
                    .toEqual(as.Block([ 9, 7, 9 ]))
            })

            it('errors for other odd values', () => {
                expect(() => computeBackboneStoop(musicalAs.Value(11), { minimum: musicalAs.Value(7) }))
                    .toThrowError('Cannot compute a backbone stoop for value 11 and minimum 7.')
                expect(() => computeBackboneStoop(musicalAs.Value(13), { minimum: musicalAs.Value(7) }))
                    .toThrowError('Cannot compute a backbone stoop for value 13 and minimum 7.')
                expect(() => computeBackboneStoop(musicalAs.Value(15), { minimum: musicalAs.Value(7) }))
                    .toThrowError('Cannot compute a backbone stoop for value 15 and minimum 7.')
                expect(() => computeBackboneStoop(musicalAs.Value(17), { minimum: musicalAs.Value(7) }))
                    .toThrowError('Cannot compute a backbone stoop for value 17 and minimum 7.')
                expect(() => computeBackboneStoop(musicalAs.Value(19), { minimum: musicalAs.Value(7) }))
                    .toThrowError('Cannot compute a backbone stoop for value 19 and minimum 7.')
                expect(() => computeBackboneStoop(musicalAs.Value(21), { minimum: musicalAs.Value(7) }))
                    .toThrowError('Cannot compute a backbone stoop for value 21 and minimum 7.')
            })
        })
    })

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

            it('errors for other odd values', () => {
                expect(() => computeBackboneStoop(musicalAs.Value(1), {
                    length: as.Cardinal<Block>(1),
                    minimum: musicalAs.Value(3),
                }))
                    .toThrowError('Cannot compute a backbone stoop for value 1, length 1, and minimum 3.')
                expect(() => computeBackboneStoop(musicalAs.Value(7), {
                    length: as.Cardinal<Block>(1),
                    minimum: musicalAs.Value(3),
                }))
                    .toThrowError('Cannot compute a backbone stoop for value 7, length 1, and minimum 3.')
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

            it('errors for other odd values', () => {
                expect(() => computeBackboneStoop(musicalAs.Value(5), {
                    length: as.Cardinal<Block>(3),
                    minimum: musicalAs.Value(3),
                }))
                    .toThrowError('Cannot compute a backbone stoop for value 5, length 3, and minimum 3.')
                expect(() => computeBackboneStoop(musicalAs.Value(17), {
                    length: as.Cardinal<Block>(3),
                    minimum: musicalAs.Value(3),
                }))
                    .toThrowError('Cannot compute a backbone stoop for value 17, length 3, and minimum 3.')
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

            it('errors for other odd values', () => {
                expect(() => computeBackboneStoop(musicalAs.Value(9), {
                    length: as.Cardinal<Block>(5),
                    minimum: musicalAs.Value(3),
                }))
                    .toThrowError('Cannot compute a backbone stoop for value 9, length 5, and minimum 3.')
                expect(() => computeBackboneStoop(musicalAs.Value(29), {
                    length: as.Cardinal<Block>(5),
                    minimum: musicalAs.Value(3),
                }))
                    .toThrowError('Cannot compute a backbone stoop for value 29, length 5, and minimum 3.')
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

            it('errors for other odd values', () => {
                expect(() => computeBackboneStoop(musicalAs.Value(3), {
                    length: as.Cardinal<Block>(1),
                    minimum: musicalAs.Value(5),
                }))
                    .toThrowError('Cannot compute a backbone stoop for value 3, length 1, and minimum 5.')
                expect(() => computeBackboneStoop(musicalAs.Value(9), {
                    length: as.Cardinal<Block>(1),
                    minimum: musicalAs.Value(5),
                }))
                    .toThrowError('Cannot compute a backbone stoop for value 9, length 1, and minimum 5.')
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

            it('errors for other odd values', () => {
                expect(() => computeBackboneStoop(musicalAs.Value(13), {
                    length: as.Cardinal<Block>(3),
                    minimum: musicalAs.Value(5),
                }))
                    .toThrowError('Cannot compute a backbone stoop for value 13, length 3, and minimum 5.')
                expect(() => computeBackboneStoop(musicalAs.Value(23), {
                    length: as.Cardinal<Block>(3),
                    minimum: musicalAs.Value(5),
                }))
                    .toThrowError('Cannot compute a backbone stoop for value 23, length 3, and minimum 5.')
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

            it('errors for other odd values', () => {
                expect(() => computeBackboneStoop(musicalAs.Value(21), {
                    length: as.Cardinal<Block>(5),
                    minimum: musicalAs.Value(5),
                }))
                    .toThrowError('Cannot compute a backbone stoop for value 21, length 5, and minimum 5.')
                expect(() => computeBackboneStoop(musicalAs.Value(39), {
                    length: as.Cardinal<Block>(5),
                    minimum: musicalAs.Value(5),
                }))
                    .toThrowError('Cannot compute a backbone stoop for value 39, length 5, and minimum 5.')
            })
        })
    })
})
