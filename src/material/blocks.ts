// tslint:disable max-line-length no-magic-numbers no-dead-store

import { Block, DictionaryOf, from, INITIAL, positiveIntegers, to } from '@musical-patterns/utilities'

const buildBlocks: () => DictionaryOf<Block> =
    (): DictionaryOf<Block> => {
        const mainDescentBlock: Block = to.Block(positiveIntegers
            .slice(from.Index(INITIAL), 28)
            .map((integer: number): number => integer * 2 + 1),
        )

        const mainDescentContinuationBlock: Block = to.Block(positiveIntegers
            .slice(from.Index(INITIAL), 12)
            .map((integer: number): number => integer * 2 + 57),
        )

        const threePerBlock: Block = to.Block([
            3, 1, 3, 1, 3, 1, 3, 5, 3, 1, 3, 5, 3, 5, 3, 5, 7, 5, 3, 5, 7, 5, 7, 5, 7, 9, 7, 5, 7, 9, 7, 9, 7, 9, 11, 9, 7, 9, 11, 9, 11, 9, 11, 13, 11, 9, 11, 13, 11, 13, 11, 13, 15, 13, 11, 13, 15, 13, 15, 13, 15, 17, 15, 13, 15, 17, 15, 17, 15, 17, 19, 17, 15, 17, 19, 17, 19, 17, 19, 21, 19, 17,
        ])

        const fivePerBlock: Block = to.Block([
            11, 13, 11, 13, 11, 13, 15, 13, 11, 9, 7, 5, 3, 5, 3, 1, 3, 5, 7, 9, 7, 5, 3, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 9, 7, 5, 3, 5, 7, 9, 11, 9, 7, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 11, 9, 7, 5, 7, 9, 11, 13, 11, 9, 7, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 7, 9, 11, 13, 15, 13, 11, 9, 11, 13,
        ])

        const sevenPerBlock: Block = to.Block([
            7, 9, 7, 9, 11, 9, 7, 5, 7, 9, 7, 9, 11, 13, 15, 13, 11, 9, 7, 5, 3, 5, 7, 9, 11, 13, 11, 9, 7, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 11, 9, 11, 9, 7, 9, 7, 9, 7, 5, 3, 1, 3, 5, 7, 9, 11, 13, 11, 9, 7, 5, 7, 5, 7, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9,
        ])

        const ninePerBlock: Block = to.Block([
            15, 13, 11, 9, 11, 9, 11, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 5, 7, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1, 3, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 11, 13, 15, 17, 19, 17, 15, 13, 11, 9, 7, 5, 7, 5, 7, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1,
        ])

        const backboneBlock: Block = to.Block([ 3, 1 ])

        const kickBlock: Block = to.Block([ 8 ])

        const snareBlock: Block = to.Block([ 24 ])

        const hihatBlock: Block = to.Block([ 1 ])

        const divideFortyeightByTwelveBlock: Block = to.Block([
            3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
        ])

        const divideFortyeightBySixBlock: Block = to.Block([
            3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5,
        ])

        const dividFortyeightByFourBlock: Block = to.Block([
            7, 5, 7, 5, 7, 5, 7, 5,
        ])

        const divideFortyeightByThreeBlock: Block = to.Block([
            7, 9, 7, 9, 7, 9,
        ])

        const divideFortyeightByTwoBlock: Block = to.Block([
            11, 13, 11, 13,
        ])

        const divideFortyeightByOneBlock: Block = to.Block([
            47, 49,
        ])

        return {
            backboneBlock,
            fivePerBlock,
            hihatBlock,
            kickBlock,
            mainDescentBlock,
            mainDescentContinuationBlock,
            ninePerBlock,
            sevenPerBlock,
            snareBlock,
            threePerBlock,
        }
    }

export {
    buildBlocks,
}
