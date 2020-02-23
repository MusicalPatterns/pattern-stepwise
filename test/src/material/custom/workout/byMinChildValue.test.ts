// tslint:disable no-duplicate-string

import { as, musicalAs } from '@musical-patterns/utilities'
import { computeWorkoutShapedChildStairs } from '../../../../../src/indexForTest'

describe('by minimum child value', (): void => {
    it('errors for even minimum child values', (): void => {
        expect((): void => {
            computeWorkoutShapedChildStairs(musicalAs.Value(9), { minChildValue: musicalAs.Value(2) })
        })
            .toThrowError(`Cannot compute workout-shaped child stairs with an even minimum child value. This minimum child value was 2.`)
        expect((): void => {
            computeWorkoutShapedChildStairs(musicalAs.Value(9), { minChildValue: musicalAs.Value(8) })
        })
            .toThrowError(`Cannot compute workout-shaped child stairs with an even minimum child value. This minimum child value was 8.`)
    })

    describe(
        `minimum child value of 1 (for each minimum child value, the values for which it works are where \
the constant is either one of the two elements of the workout cycle for that minimum child value, \
and the multiple is 4x whichth odd number it is)`,
        (): void => {
            it('works for parent values of 1 + 4n', (): void => {
                expect(computeWorkoutShapedChildStairs(musicalAs.Value(1), { minChildValue: musicalAs.Value(1) }))
                    .toEqual(as.Block([ 1 ]))
                expect(computeWorkoutShapedChildStairs(musicalAs.Value(5), { minChildValue: musicalAs.Value(1) }))
                    .toEqual(as.Block([ 1, 3, 1 ]))
                expect(computeWorkoutShapedChildStairs(musicalAs.Value(9), { minChildValue: musicalAs.Value(1) }))
                    .toEqual(as.Block([ 1, 3, 1, 3, 1 ]))
                expect(computeWorkoutShapedChildStairs(musicalAs.Value(13), { minChildValue: musicalAs.Value(1) }))
                    .toEqual(as.Block([ 1, 3, 1, 3, 1, 3, 1 ]))
            })

            it('works for parent values of 3 + 4n', (): void => {
                expect(computeWorkoutShapedChildStairs(musicalAs.Value(3), { minChildValue: musicalAs.Value(1) }))
                    .toEqual(as.Block([ 3 ]))
                expect(computeWorkoutShapedChildStairs(musicalAs.Value(7), { minChildValue: musicalAs.Value(1) }))
                    .toEqual(as.Block([ 3, 1, 3 ]))
                expect(computeWorkoutShapedChildStairs(musicalAs.Value(11), { minChildValue: musicalAs.Value(1) }))
                    .toEqual(as.Block([ 3, 1, 3, 1, 3 ]))
                expect(computeWorkoutShapedChildStairs(musicalAs.Value(15), { minChildValue: musicalAs.Value(1) }))
                    .toEqual(as.Block([ 3, 1, 3, 1, 3, 1, 3 ]))
            })
        },
    )

    describe('minimum child value of 3', (): void => {
        it('works for parent values of 3 + 8n', (): void => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(3), { minChildValue: musicalAs.Value(3) }))
                .toEqual(as.Block([ 3 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(11), { minChildValue: musicalAs.Value(3) }))
                .toEqual(as.Block([ 3, 5, 3 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(19), { minChildValue: musicalAs.Value(3) }))
                .toEqual(as.Block([ 3, 5, 3, 5, 3 ]))
        })

        it('works for parent values of 5 + 8n', (): void => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(5), { minChildValue: musicalAs.Value(3) }))
                .toEqual(as.Block([ 5 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(13), { minChildValue: musicalAs.Value(3) }))
                .toEqual(as.Block([ 5, 3, 5 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(21), { minChildValue: musicalAs.Value(3) }))
                .toEqual(as.Block([ 5, 3, 5, 3, 5 ]))
        })

        it('errors for other odd parent values', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(1), { minChildValue: musicalAs.Value(3) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 1 and minimum child value 3.')

            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(7), { minChildValue: musicalAs.Value(3) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 7 and minimum child value 3.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(9), { minChildValue: musicalAs.Value(3) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 9 and minimum child value 3.')

            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(15), { minChildValue: musicalAs.Value(3) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 15 and minimum child value 3.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(17), { minChildValue: musicalAs.Value(3) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 17 and minimum child value 3.')
        })
    })

    describe('minimum child value of 5', (): void => {
        it('works for parent values of 5 + 12n', (): void => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(5), { minChildValue: musicalAs.Value(5) }))
                .toEqual(as.Block([ 5 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(17), { minChildValue: musicalAs.Value(5) }))
                .toEqual(as.Block([ 5, 7, 5 ]))
        })

        it('works for parent values of 7 + 12n', (): void => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(7), { minChildValue: musicalAs.Value(5) }))
                .toEqual(as.Block([ 7 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(19), { minChildValue: musicalAs.Value(5) }))
                .toEqual(as.Block([ 7, 5, 7 ]))
        })

        it('errors for other odd parent values', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(1), { minChildValue: musicalAs.Value(5) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 1 and minimum child value 5.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(3), { minChildValue: musicalAs.Value(5) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 3 and minimum child value 5.')

            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(9), { minChildValue: musicalAs.Value(5) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 9 and minimum child value 5.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(11), { minChildValue: musicalAs.Value(5) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 11 and minimum child value 5.')
        })
    })

    describe('minimum child value of 7', (): void => {
        it('works for parent values of 7 + 16n', (): void => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(7), { minChildValue: musicalAs.Value(7) }))
                .toEqual(as.Block([ 7 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(23), { minChildValue: musicalAs.Value(7) }))
                .toEqual(as.Block([ 7, 9, 7 ]))
        })

        it('works for parent values of 9 + 16n', (): void => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(9), { minChildValue: musicalAs.Value(7) }))
                .toEqual(as.Block([ 9 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(25), { minChildValue: musicalAs.Value(7) }))
                .toEqual(as.Block([ 9, 7, 9 ]))
        })

        it('errors for other odd parent values', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(11), { minChildValue: musicalAs.Value(7) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 11 and minimum child value 7.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(13), { minChildValue: musicalAs.Value(7) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 13 and minimum child value 7.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(15), { minChildValue: musicalAs.Value(7) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 15 and minimum child value 7.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(17), { minChildValue: musicalAs.Value(7) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 17 and minimum child value 7.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(19), { minChildValue: musicalAs.Value(7) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 19 and minimum child value 7.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(21), { minChildValue: musicalAs.Value(7) })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 21 and minimum child value 7.')
        })
    })
})
