import { Block, sum } from '@musical-patterns/utilities'
import { computeBlocks, StepwiseBlocks } from '../../../../src/indexForTest'

const computeTotalBlockDuration: (block: Block) => number =
    (block: Block): number =>
        block.reduce(
            // tslint:disable-next-line no-unnecessary-callback-wrapper
            (accumulator: number, cell: number) =>
                sum(accumulator, cell),
            0,
        )

describe('blocks', () => {
    let blocks: StepwiseBlocks
    beforeEach(() => {
        blocks = computeBlocks()
    })

    describe('main descent', () => {
        it('descends from 3 to 57, by 2 (only odds)', () => {
            expect(blocks.mainDescent)
                .toEqual([
                    3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57,
                ])
        })
    })

    describe('main descent continuation', () => {
        it('descends from 59 to 81, by 2 (only odds)', () => {
            expect(blocks.mainDescentContinuation)
                .toEqual([
                    59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81,
                ])
        })
    })

    it('is the case that the main descent and its continuation have the same total duration', () => {
        expect(computeTotalBlockDuration(blocks.mainDescent))
            .toBe(computeTotalBlockDuration(blocks.mainDescentContinuation))
    })
})
