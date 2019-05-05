import { as, Block, dividesEvenly, musicalAs, quotient, sequence, sum } from '@musical-patterns/utilities'
import { computeAscentStoop, computeBackboneStoop, computeFlight, stepwiseAs } from '../../../../src/indexForTest'

describe('flights', () => {
    it('works for landing of 0', () => {
        expect(computeFlight(stepwiseAs.Landing(0)))
            .toEqual(as.Block([
                3,
                1, 3, 1,
                3, 1, 3,
                5, 3, 1,
            ]))
        expect(computeFlight(stepwiseAs.Landing(0)))
            .toEqual(as.Block(sequence(
                [ 3 ],
                computeBackboneStoop(musicalAs.Value(5), { length: as.Cardinal<Block>(3) }),
                computeBackboneStoop(musicalAs.Value(7), { length: as.Cardinal<Block>(3) }),
                computeAscentStoop(musicalAs.Value(9), { length: as.Cardinal<Block>(3) }),
            )))
    })

    it('works for landing of 1', () => {
        expect(computeFlight(stepwiseAs.Landing(1)))
            .toEqual(as.Block([
                3, 5, 3,
                5, 3, 5,
            ]))
        expect(computeFlight(stepwiseAs.Landing(1)))
            .toEqual(as.Block(sequence(
                computeBackboneStoop(musicalAs.Value(11), { length: as.Cardinal<Block>(3) }),
                computeBackboneStoop(musicalAs.Value(13), { length: as.Cardinal<Block>(3) }),
            )))
    })

    it('works for landing of 2', () => {
        expect(computeFlight(stepwiseAs.Landing(2)))
            .toEqual(as.Block([
                7, 5, 3,
                5, 7, 5,
                7, 5, 7,
                9, 7, 5,
            ]))
        expect(computeFlight(stepwiseAs.Landing(2)))
            .toEqual(as.Block(sequence(
                computeAscentStoop(musicalAs.Value(15), { length: as.Cardinal<Block>(3) }),
                computeBackboneStoop(musicalAs.Value(17), { length: as.Cardinal<Block>(3) }),
                computeBackboneStoop(musicalAs.Value(19), { length: as.Cardinal<Block>(3) }),
                computeAscentStoop(musicalAs.Value(21), { length: as.Cardinal<Block>(3) }),
            )))
    })

    it('works for landing of 3', () => {
        expect(computeFlight(stepwiseAs.Landing(3)))
            .toEqual(as.Block([
                7, 9, 7,
                9, 7, 9,
            ]))
        expect(computeFlight(stepwiseAs.Landing(3)))
            .toEqual(as.Block(sequence(
                computeBackboneStoop(musicalAs.Value(23), { length: as.Cardinal<Block>(3) }),
                computeBackboneStoop(musicalAs.Value(25), { length: as.Cardinal<Block>(3) }),
            )))
    })

    it('works for landing of 4', () => {
        expect(computeFlight(stepwiseAs.Landing(4)))
            .toEqual(as.Block([
                11, 9, 7,
                9, 11, 9,
                11, 9, 11,
                13, 11, 9,
            ]))
        expect(computeFlight(stepwiseAs.Landing(4)))
            .toEqual(as.Block(sequence(
                computeAscentStoop(musicalAs.Value(27), { length: as.Cardinal<Block>(3) }),
                computeBackboneStoop(musicalAs.Value(29), { length: as.Cardinal<Block>(3) }),
                computeBackboneStoop(musicalAs.Value(31), { length: as.Cardinal<Block>(3) }),
                computeAscentStoop(musicalAs.Value(33), { length: as.Cardinal<Block>(3) }),
            )))
    })

    it('works for landing of 5', () => {
        expect(computeFlight(stepwiseAs.Landing(5)))
            .toEqual(as.Block([
                11, 13, 11,
                13, 11, 13,
            ]))
        expect(computeFlight(stepwiseAs.Landing(5)))
            .toEqual(as.Block(sequence(
                computeBackboneStoop(musicalAs.Value(35), { length: as.Cardinal<Block>(3) }),
                computeBackboneStoop(musicalAs.Value(37), { length: as.Cardinal<Block>(3) }),
            )))
    })

    it('every flight has a length divisible by 24', () => {
        expect(dividesEvenly(sum(...computeFlight(stepwiseAs.Landing(0))), 24))
            .toBeTruthy()
        expect(dividesEvenly(sum(...computeFlight(stepwiseAs.Landing(1))), 24))
            .toBeTruthy()
        expect(dividesEvenly(sum(...computeFlight(stepwiseAs.Landing(2))), 24))
            .toBeTruthy()
        expect(dividesEvenly(sum(...computeFlight(stepwiseAs.Landing(3))), 24))
            .toBeTruthy()
        expect(dividesEvenly(sum(...computeFlight(stepwiseAs.Landing(4))), 24))
            .toBeTruthy()
        expect(dividesEvenly(sum(...computeFlight(stepwiseAs.Landing(5))), 24))
            .toBeTruthy()
    })

    it('the duration of every nth flight, if n is even, is 24 times the ((n / 2) + 1)th odd number; i.e. it increments along the odd numbers starting with 1', () => {
        expect(quotient(sum(...computeFlight(stepwiseAs.Landing(0))), 24))
            .toBe(1)
        expect(quotient(sum(...computeFlight(stepwiseAs.Landing(2))), 24))
            .toBe(3)
        expect(quotient(sum(...computeFlight(stepwiseAs.Landing(4))), 24))
            .toBe(5)
    })

    it('the duration of every nth flight, if n is odd, is 24 times ((n - 1) / 2) + 1; i.e. it increments along the whole numbers starting with 1', () => {
        expect(quotient(sum(...computeFlight(stepwiseAs.Landing(1))), 24))
            .toBe(1)
        expect(quotient(sum(...computeFlight(stepwiseAs.Landing(3))), 24))
            .toBe(2)
        expect(quotient(sum(...computeFlight(stepwiseAs.Landing(5))), 24))
            .toBe(3)
    })
})
