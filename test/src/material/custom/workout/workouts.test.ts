// tslint:disable no-duplicate-string

import { musicalAs } from '@musical-patterns/utilities'
import { computeWorkoutShapedChildStairs } from '../../../../../src/indexForTest'

describe('workouts', () => {
    it('errors for even parent values', () => {
        expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(2), { minChildValue: musicalAs.Value(9) }))
            .toThrowError('Cannot compute workout-shaped child stairs for an even parent value. This parent value was 2.')
        expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(6), { minChildValue: musicalAs.Value(9) }))
            .toThrowError('Cannot compute workout-shaped child stairs for an even parent value. This parent value was 6.')
        expect(() => computeWorkoutShapedChildStairs(musicalAs.Value(10), { minChildValue: musicalAs.Value(9) }))
            .toThrowError('Cannot compute workout-shaped child stairs for an even parent value. This parent value was 10.')
    })
})
