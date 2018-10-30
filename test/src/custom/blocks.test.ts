import { Block, from, Index, SumOfIndices, to } from '../../../../../src/indexForTest'
import { buildStepwiseBlocks } from '../../../src/indexForTest'

const calculateTotalBlockDuration: (block: Block) => SumOfIndices =
    (block: Block): SumOfIndices =>
        block.reduce(
            (accumulator: SumOfIndices, blockElement: Index) =>
                to.SumOfIndices(from.SumOfIndices(accumulator) + from.Index(blockElement)),
            to.SumOfIndices(0),
        )

describe('stepwise blocks', () => {
    describe('main descent', () => {
        it('descends from 3 to 57, by 2 (only odds)', () => {
            const {
                mainDescentBlock,
            } = buildStepwiseBlocks()

            expect(mainDescentBlock)
                .toEqual([
                    3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57,
                ].map(to.Index))
        })
    })

    describe('main descent continuation', () => {
        it('descends from 59 to 81, by 2 (only odds)', () => {
            const {
                mainDescentContinuationBlock,
            } = buildStepwiseBlocks()

            expect(mainDescentContinuationBlock)
                .toEqual([
                    59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81,
                ].map(to.Index))
        })
    })

    it('is the case that the main descent and its continuation have the same total duration', () => {
        const {
            mainDescentBlock,
            mainDescentContinuationBlock,
        } = buildStepwiseBlocks()

        expect(calculateTotalBlockDuration(mainDescentBlock))
            .toBe(calculateTotalBlockDuration(mainDescentContinuationBlock))
    })
})
