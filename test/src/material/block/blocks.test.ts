import { sum } from '@musical-patterns/utilities'
import { computeBlocks, StepwiseBlocks } from '../../../../src/indexForTest'

describe('blocks', () => {
    let blocks: StepwiseBlocks
    beforeEach(() => {
        blocks = computeBlocks()
    })

    describe('main descent', () => {
        it('descends from 3 to 57, by 2 (only odds), realigning with multiples of an underlying rhythm of duration 24, where the multiplies increase alternating along the whole numbers and the odds only', () => {
            expect(blocks.mainDescent)
                .toEqual([
                    3, 5, 7, 9,         // 1×24
                    11, 13,                     // 1×24
                    15, 17, 19, 21,     // 3×24
                    23, 25,                     // 2×24
                    27, 29, 31, 33,     // 5×24
                    35, 37,                     // 3×24
                    39, 41, 43, 45,     // 7×24
                    47, 49,                     // 4×24
                    51, 53, 55, 57,     // 9×24
                ])
        })
    })

    describe('main descent continuation', () => {
        it('descends from 59 to 81, by 2 (only odds), realigning with multiples of an underlying rhythm of duration 24, where the multiplies increase alternating along the whole numbers and the odds only, continuing right from where the main descent left off (so it wraps)', () => {
            expect(blocks.mainDescentContinuation)
                .toEqual([
                    59, 61,                     // 5×24
                    63, 65, 67, 69,     // 11×24
                    71, 73,                     // 6×24
                    75, 77, 79, 81,     // 13×24
                ])
        })
    })

    describe('three per', () => {
        it('corresponds with the main descent, breaking each of its steps into three parts', () => {
            expect(blocks.threePer)
                .toEqual([
                    3,              // 3
                    1, 3, 1,        // 5
                    3, 1, 3,        // 7
                    5, 3, 1,        // 9
                    3, 5, 3,        // 11
                    5, 3, 5,        // 13
                    7, 5, 3,        // 15
                    5, 7, 5,        // 17
                    7, 5, 7,        // 19
                    9, 7, 5,        // 21
                    7, 9, 7,        // 23
                    9, 7, 9,        // 25
                    11, 9, 7,       // 27
                    9, 11, 9,       // 29
                    11, 9, 11,      // 31
                    13, 11, 9,      // 33
                    11, 13, 11,     // 35
                    13, 11, 13,     // 37
                    15, 13, 11,     // 39
                    13, 15, 13,     // 41
                    15, 13, 15,     // 43
                    17, 15, 13,     // 45
                    15, 17, 15,     // 47
                    17, 15, 17,     // 49
                    19, 17, 15,     // 51
                    17, 19, 17,     // 53
                    19, 17, 19,     // 55
                    21, 19, 17,     // 57
                ])
        })

        it('can also be looked at in terms of how, by virtue of being a detail-ization of the main descent, it also lines up with the underlying 24 rhythm following a pattern of multiples', () => {
            expect(blocks.threePer)
                .toEqual([
                    3, 1, 3, 1, 3, 1, 3, 5, 3, 1,                   // 1×24
                    3, 5, 3, 5, 3, 5,                                       // 1×24
                    7, 5, 3, 5, 7, 5, 7, 5, 7, 9, 7, 5,             // 3×24
                    7, 9, 7, 9, 7, 9,                                       // 2×24
                    11, 9, 7, 9, 11, 9, 11, 9, 11, 13, 11, 9,       // 5×24
                    11, 13,                                                 // 1×24
                    11, 13,                                                 // 1×24
                    11, 13,                                                 // 1×24
                    15, 13, 11, 13, 15, 13, 15, 13, 15, 17, 15, 13, // 7×24
                    15, 17, 15, 17, 15, 17,                                 // 4×24
                    19, 17, 15, 17, 19, 17, 19, 17, 19, 21, 19, 17, // 9×24
                ])
        })
    })

    describe('five per', () => {
        it('corresponds the main descent continuation at first for a bit of it, then the main descent for most of it, breaking each of its steps into five parts', () => {
            expect(blocks.fivePer)
                .toEqual([
                    11, 13, 11, 13, 11,     // 59
                    13, 15, 13, 11, 9,      // 61
                    7, 5, 3, 5, 3,                  // 23
                    1, 3, 5, 7, 9,                  // 25
                    7, 5, 3, 5, 7,                  // 27
                    5, 7, 5, 7, 5,                  // 29
                    7, 5, 7, 5, 7,                  // 31
                    5, 7, 9, 7, 5,                  // 33
                    3, 5, 7, 9, 11,                 // 35
                    9, 7, 5, 7, 9,                  // 37
                    7, 9, 7, 9, 7,                  // 39
                    9, 7, 9, 7, 9,                  // 41
                    7, 9, 11, 9, 7,                 // 43
                    5, 7, 9, 11, 13,                // 45
                    11, 9, 7, 9, 11,                // 47
                    9, 11, 9, 11, 9,                // 49
                    11, 9, 11, 9, 11,               // 51
                    9, 11, 13, 11, 9,               // 53
                    7, 9, 11, 13, 15,               // 55
                    13, 11, 9, 11, 13,              // 57
                ])
        })

        it('can also be looked at in terms of how, by virtue of being a detail-ization of the main descent and its continuation, it also lines up with the underlying 24 rhythm following a pattern of multiples', () => {
            expect(blocks.fivePer)
                .toEqual([
                    11, 13,                                                             // 1×24
                    11, 13,                                                             // 1×24
                    11, 13,                                                             // 1×24
                    15, 13, 11, 9,                                                      // 2×24
                    7, 5, 3, 5, 3, 1,                                                           // 1×24
                    3, 5, 7, 9,                                                                 // 1×24
                    7, 5, 3, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 9, 7, 5,                         // 5×24
                    3, 5, 7, 9,                                                                 // 1×24
                    11, 9, 7, 5, 7, 9,                                                          // 2×24
                    7, 9, 7, 9, 7, 9,                                                                   // 2×24
                    7, 9, 7, 9, 7, 9,                                                                   // 2×24
                    11, 9, 7, 5, 7, 9,                                                                  // 2×24
                    11, 13,                                                                             // 1×24
                    11, 9, 7, 9, 11, 9, 11, 9, 11, 9,                                           // 4×24
                    11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 7, 9,                                           // 5×24
                    11, 13,                                                                             // 1×24
                    15, 13, 11, 9,                                                                      // 2×24
                    11, 13,                                                                             // 1×24
                ])
        })
    })

    describe('seven per', () => {
        it('corresponds with the main descent continuation at first for most of it, then the main descent for a bit of it, breaking each of its steps into seven parts', () => {
            expect(blocks.sevenPer)
                .toEqual([
                    7, 9, 7, 9, 11, 9, 7,       // 59
                    5, 7, 9, 7, 9, 11, 13,      // 61
                    15, 13, 11, 9, 7, 5, 3,     // 63
                    5, 7, 9, 11, 13, 11, 9,     // 65
                    7, 9, 11, 9, 11, 9, 11,     // 67
                    9, 11, 9, 11, 9, 11, 9,     // 69
                    11, 9, 11, 9, 11, 9, 11,    // 71
                    13, 11, 9, 11, 9, 11, 9,    // 73
                    7, 9, 7, 9, 7, 5, 3,                    // 47
                    1, 3, 5, 7, 9, 11, 13,                  // 49
                    11, 9, 7, 5, 7, 5, 7,                   // 51
                    5, 7, 9, 7, 9, 7, 9,                    // 53
                    7, 9, 7, 9, 7, 9, 7,                    // 55
                    9, 7, 9, 7, 9, 7, 9,                    // 57
                ])
        })

        it('can also be looked at in terms of how, by virtue of being a detail-ization of the main descent and its continuation, it also lines up with the underlying 24 rhythm following a pattern of multiples', () => {
            expect(blocks.sevenPer)
                .toEqual([
                    7, 9, 7, 9, 11, 9, 7, 5, 7, 9, 7, 9, 11, 13,                                                                // 5×24
                    15, 13, 11, 9, 7, 5, 3, 5, 7, 9, 11, 13, 11, 9, 7, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, // 11×24
                    11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 11, 9, 11, 9,                                                           // 6×24
                    7, 9, 7, 9, 7, 5, 3, 1, 3, 5, 7, 9, 11, 13,                                                     // 4×24
                    11, 9, 7, 5, 7, 5, 7, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9,            // 9×24
                ])
        })
    })

    describe('nine per', () => {

        it('corresponds the main descent continuation, breaking each of its steps into nine parts (except for its first two steps where it breaks into five and seven parts, respectively, because it just came out of being the three-per voice... oh, goddamnit, and it also lapses back into 5 and 7 in the middle too)', () => {
            expect(blocks.ninePer)
                .toEqual([
                    15, 13, 11, 9, 11,                  // 59
                    9, 11, 9, 7, 9, 7, 9,               // 61
                    7, 9, 7, 9, 7, 5, 7, 5, 7,          // 63
                    9, 11, 13, 15, 17,                  // 65
                    15, 13, 11, 9, 7, 5, 3, 1, 3,       // 67
                    5, 7, 9, 7, 9, 7, 9, 7, 9,          // 69
                    7, 9, 7, 9, 7, 9, 7, 9, 7,          // 71
                    9, 7, 9, 7, 9, 7, 9, 7, 9,          // 73
                    11, 13, 15, 17, 19,                 // 75
                    17, 15, 13, 11, 9, 7, 5,            // 77
                    7, 5, 7, 5, 7, 9, 11, 13, 15,       // 79
                    17, 15, 13, 11, 9, 7, 5, 3, 1,      // 81
                ])
        })

        it('can also be looked at in terms of how, by virtue of being a detail-ization of the main descent continuation, it also lines up with the underlying 24 rhythm following a pattern of multiples', () => {
            expect(blocks.ninePer)
                .toEqual([
                    15, 13, 11, 9, 11, 9, 11, 9, 7, 9, 7, 9,                                                                                    // 5×24
                    7, 9, 7, 9, 7, 5, 7, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1, 3, 5, 7, 9, 7, 9, 7, 9, 7, 9,          // 11×24
                    7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9,                                                                       // 6×24
                    11, 13,                                                                                                         // 1×24
                    15, 17, 19, 17, 15, 13, 11, 9, 7, 5, 7, 5, 7, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1,               // 12×24
                ])
        })
    })

    it('is the case that the main descent, its continuation, and all of the "per" blocks have the same total value', () => {
        expect(sum(...blocks.mainDescent))
            .toBe(sum(...blocks.mainDescentContinuation))
        expect(sum(...blocks.mainDescent))
            .toBe(sum(...blocks.threePer))
        expect(sum(...blocks.mainDescent))
            .toBe(sum(...blocks.fivePer))
        expect(sum(...blocks.mainDescent))
            .toBe(sum(...blocks.sevenPer))
        expect(sum(...blocks.mainDescent))
            .toBe(sum(...blocks.ninePer))
        expect(sum(...blocks.mainDescent))
            .toBe(24 * 35)
    })
})
