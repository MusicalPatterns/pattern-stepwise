import { as, Block, musicalAs } from '@musical-patterns/utilities'
import { computeWorkoutShapedChildStairs } from '../../../../../src/indexForTest'

describe('by child count', () => {
    it('errors for even child counts', () => {
        expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(9), { childCount: as.Cardinal<Block>(2) }))
            .toThrowError(`Cannot compute workout-shaped child stairs with an even child count. This child count was 2.`)
        expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(9), { childCount: as.Cardinal<Block>(8) }))
            .toThrowError(`Cannot compute workout-shaped child stairs with an even child count. This child count was 8.`)
    })

    describe('child count of 1', () => {
        it('works for any odd parent value', () => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(1), { childCount: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 1 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(3), { childCount: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 3 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(5), { childCount: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 5 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(13), { childCount: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 13 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(77), { childCount: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 77 ]))
        })
    })

    describe('child count of 3', () => {
        it('works for parent values of 5 + 6n', () => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(5), { childCount: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 1, 3, 1 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(11), { childCount: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 3, 5, 3 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(17), { childCount: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 5, 7, 5 ]))
        })

        it('works for parent values of 7 + 6n', () => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(7), { childCount: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 3, 1, 3 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(13), { childCount: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 5, 3, 5 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(19), { childCount: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 7, 5, 7 ]))
        })

        it('errors for other odd parent values', () => {
            expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(1), { childCount: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 1 and child count 3.')
            expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(3), { childCount: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 3 and child count 3.')

            expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(9), { childCount: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 9 and child count 3.')

            expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(15), { childCount: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 15 and child count 3.')

            expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(21), { childCount: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 21 and child count 3.')
        })
    })

    describe('child count of 5', () => {
        it('works for parent values of 9 + 10n', () => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(9), { childCount: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 1, 3, 1, 3, 1 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(19), { childCount: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 3, 5, 3, 5, 3 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(29), { childCount: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 5, 7, 5, 7, 5 ]))
        })

        it('works for parent values of 11 + 10n', () => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(11), { childCount: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 3, 1, 3, 1, 3 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(21), { childCount: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 5, 3, 5, 3, 5 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(31), { childCount: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 7, 5, 7, 5, 7 ]))
        })

        it('errors for other odd parent values', () => {
            expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(1), { childCount: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 1 and child count 5.')
            expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(3), { childCount: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 3 and child count 5.')
            expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(5), { childCount: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 5 and child count 5.')
            expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(7), { childCount: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 7 and child count 5.')

            expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(13), { childCount: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 13 and child count 5.')
            expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(15), { childCount: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 15 and child count 5.')
            expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(17), { childCount: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 17 and child count 5.')
        })
    })
})
