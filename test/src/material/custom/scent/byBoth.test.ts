// tslint:disable no-duplicate-string

import { as, Block, musicalAs } from '@musical-patterns/utilities'
import { computeDescentShapedChildStairs } from '../../../../../src/indexForTest'

describe('by both child count and minimum child value', (): void => {
    it('errors for even minimum child values', (): void => {
        expect((): void => {
            computeDescentShapedChildStairs(musicalAs.Value(9), {
                childCount: as.Cardinal<Block>(3),
                minChildValue: musicalAs.Value(2),
            })
        })
            .toThrowError(`Cannot compute scent-shaped child stairs with an even minimum child value. This minimum child value was 2.`)
        expect((): void => {
            computeDescentShapedChildStairs(musicalAs.Value(9), {
                childCount: as.Cardinal<Block>(3),
                minChildValue: musicalAs.Value(8),
            })
        })
            .toThrowError(`Cannot compute scent-shaped child stairs with an even minimum child value. This minimum child value was 8.`)
    })

    it('errors for even child counts', (): void => {
        expect((): void => {
            computeDescentShapedChildStairs(musicalAs.Value(9), {
                childCount: as.Cardinal<Block>(2),
                minChildValue: musicalAs.Value(9),
            })
        })
            .toThrowError(`Cannot compute scent-shaped child stairs with an even child count. This child count was 2.`)
        expect((): void => {
            computeDescentShapedChildStairs(musicalAs.Value(9), {
                childCount: as.Cardinal<Block>(8),
                minChildValue: musicalAs.Value(9),
            })
        })
            .toThrowError(`Cannot compute scent-shaped child stairs with an even child count. This child count was 8.`)
    })

    describe('minimum child value of 3 and child count of 1', (): void => {
        it('works for parent value of 3 only', (): void => {
            expect(computeDescentShapedChildStairs(musicalAs.Value(3), {
                childCount: as.Cardinal<Block>(1),
                minChildValue: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 3 ]))
        })

        it('errors for other odd parent values', (): void => {
            expect((): void => {
                computeDescentShapedChildStairs(musicalAs.Value(1), {
                    childCount: as.Cardinal<Block>(1),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 1, child count 1, and minimum child value 3.')
            expect((): void => {
                computeDescentShapedChildStairs(musicalAs.Value(5), {
                    childCount: as.Cardinal<Block>(1),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 5, child count 1, and minimum child value 3.')
        })
    })

    describe('minimum child value of 3 and child count of 3', (): void => {
        it('works for parent value of 15 only', (): void => {
            expect(computeDescentShapedChildStairs(musicalAs.Value(15), {
                childCount: as.Cardinal<Block>(3),
                minChildValue: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 3, 5, 7 ]))
        })

        it('errors for other odd parent values', (): void => {
            expect((): void => {
                computeDescentShapedChildStairs(musicalAs.Value(9), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 9, child count 3, and minimum child value 3.')
            expect((): void => {
                computeDescentShapedChildStairs(musicalAs.Value(21), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 21, child count 3, and minimum child value 3.')
        })
    })

    describe('minimum child value of 3 and child count 5', (): void => {
        it('works for parent value of 35 only', (): void => {
            expect(computeDescentShapedChildStairs(musicalAs.Value(35), {
                childCount: as.Cardinal<Block>(5),
                minChildValue: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 3, 5, 7, 9, 11 ]))
        })

        it('errors for other odd parent values', (): void => {
            expect((): void => {
                computeDescentShapedChildStairs(musicalAs.Value(25), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 25, child count 5, and minimum child value 3.')
            expect((): void => {
                computeDescentShapedChildStairs(musicalAs.Value(45), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 45, child count 5, and minimum child value 3.')
        })
    })

    describe('minimum child value of 5 and child count of 1', (): void => {
        it('works for parent value of 5 only', (): void => {
            expect(computeDescentShapedChildStairs(musicalAs.Value(5), {
                childCount: as.Cardinal<Block>(1),
                minChildValue: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 5 ]))
        })

        it('errors for other odd parent values', (): void => {
            expect((): void => {
                computeDescentShapedChildStairs(musicalAs.Value(3), {
                    childCount: as.Cardinal<Block>(1),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 3, child count 1, and minimum child value 5.')
            expect((): void => {
                computeDescentShapedChildStairs(musicalAs.Value(7), {
                    childCount: as.Cardinal<Block>(1),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 7, child count 1, and minimum child value 5.')
        })
    })

    describe('minimum child value of 5 and child count of 3', (): void => {
        it('works for parent value of 21 only', (): void => {
            expect(computeDescentShapedChildStairs(musicalAs.Value(21), {
                childCount: as.Cardinal<Block>(3),
                minChildValue: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 5, 7, 9 ]))
        })

        it('errors for other odd parent values', (): void => {
            expect((): void => {
                computeDescentShapedChildStairs(musicalAs.Value(15), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 15, child count 3, and minimum child value 5.')
            expect((): void => {
                computeDescentShapedChildStairs(musicalAs.Value(27), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 27, child count 3, and minimum child value 5.')
        })
    })

    describe('minimum child value of 5 and child count of 5', (): void => {
        it('works for parent value of 45 only', (): void => {
            expect(computeDescentShapedChildStairs(musicalAs.Value(45), {
                childCount: as.Cardinal<Block>(5),
                minChildValue: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 5, 7, 9, 11, 13 ]))
        })

        it('errors for other odd parent values', (): void => {
            expect((): void => {
                computeDescentShapedChildStairs(musicalAs.Value(35), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 35, child count 5, and minimum child value 5.')
            expect((): void => {
                computeDescentShapedChildStairs(musicalAs.Value(55), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 55, child count 5, and minimum child value 5.')
        })
    })
})
