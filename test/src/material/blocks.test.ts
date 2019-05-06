// tslint:disable binary-expression-operand-order

import { as, Block, slice, sum } from '@musical-patterns/utilities'
import { computeBlocks, StepwiseBlocks } from '../../../src/indexForTest'

describe('blocks', () => {
    let blocks: StepwiseBlocks
    beforeEach(() => {
        blocks = computeBlocks()
    })

    it(
        `the main descent, its continuation, and all of the "per" blocks have the same total value, \
which is thirtyfive multiples of the underlying rhythm of duration 24`,
        () => {
            expect(sum(...blocks.mainDescent))
                .toBe(24 * 35)
            expect(sum(...blocks.mainDescentContinuation))
                .toBe(24 * 35)
            expect(sum(...blocks.threePer))
                .toBe(24 * 35)
            expect(sum(...blocks.fivePer))
                .toBe(24 * 35)
            expect(sum(...blocks.sevenPer))
                .toBe(24 * 35)
            expect(sum(...blocks.ninePer))
                .toBe(24 * 35)
        },
    )

    describe('main descent and its continuation', () => {
        it(`main descent descends from 3 to 57, by 2's (only odds)`, () => {
            expect(blocks.mainDescent)
                .toEqual([
                    //                  .. MainDescent ×24s
                    //                  .. Odds .. All
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

        it(`main descent continuation picks up where main descent ends, continuing the descent from 59 to 81, again by 2's (only odds)`, () => {
            expect(blocks.mainDescentContinuation)
                .toEqual([
                    //                  .. Continuation ×24s
                    //                  .. Odds .. All
                    59, 61,                     // 5×24
                    63, 65, 67, 69,     // 11×24
                    71, 73,                     // 6×24
                    75, 77, 79, 81,     // 13×24
                ])
        })

        it(
            `frequently realigns with multiples of an underlying rhythm of duration 24; \
where said multiples increase each time, alternating between two different patterns of increasion; \
one which increments along the odd numbers, and the other which increments along all the whole numbers; \
also the former takes 4 steps to realign each time, while the latter takes only 2 each time; \
also this pattern wraps from the main descent to its continuation just fine`,
            () => {
                // Odds
                expect(sum(...slice(blocks.mainDescent, as.Ordinal<Block>(0), as.Ordinal<Block>(0 + 4))))
                    .toBe(1 * 24)
                expect(sum(...slice(blocks.mainDescent, as.Ordinal<Block>(6), as.Ordinal<Block>(6 + 4))))
                    .toBe(3 * 24)
                expect(sum(...slice(blocks.mainDescent, as.Ordinal<Block>(12), as.Ordinal<Block>(12 + 4))))
                    .toBe(5 * 24)
                expect(sum(...slice(blocks.mainDescent, as.Ordinal<Block>(18), as.Ordinal<Block>(18 + 4))))
                    .toBe(7 * 24)
                expect(sum(...slice(blocks.mainDescent, as.Ordinal<Block>(24), as.Ordinal<Block>(24 + 4))))
                    .toBe(9 * 24)
                expect(sum(...slice(blocks.mainDescentContinuation, as.Ordinal<Block>(2), as.Ordinal<Block>(2 + 4))))
                    .toBe(11 * 24)
                expect(sum(...slice(blocks.mainDescentContinuation, as.Ordinal<Block>(8), as.Ordinal<Block>(8 + 4))))
                    .toBe(13 * 24)

                // All
                expect(sum(...slice(blocks.mainDescent, as.Ordinal<Block>(4), as.Ordinal<Block>(4 + 2))))
                    .toBe(1 * 24)
                expect(sum(...slice(blocks.mainDescent, as.Ordinal<Block>(10), as.Ordinal<Block>(10 + 2))))
                    .toBe(2 * 24)
                expect(sum(...slice(blocks.mainDescent, as.Ordinal<Block>(16), as.Ordinal<Block>(16 + 2))))
                    .toBe(3 * 24)
                expect(sum(...slice(blocks.mainDescent, as.Ordinal<Block>(22), as.Ordinal<Block>(22 + 2))))
                    .toBe(4 * 24)
                expect(sum(...slice(blocks.mainDescentContinuation, as.Ordinal<Block>(0), as.Ordinal<Block>(0 + 2))))
                    .toBe(5 * 24)
                expect(sum(...slice(blocks.mainDescentContinuation, as.Ordinal<Block>(6), as.Ordinal<Block>(6 + 2))))
                    .toBe(6 * 24)
            },
        )

        it(
            `the main descent and its continuation line up with each other not only at the beginning/end, \
but also at two other spots: one five 24's in, and another twentytwo 24's in \
thus the total thirtyfive 24's are divided into three sections of length five, seventeen, and thirteen`,
            () => {
                expect(sum(...slice(blocks.mainDescent, as.Ordinal<Block>(0), as.Ordinal<Block>(10))))              // 3 + ... + 21
                    .toBe(5 * 24)
                expect(sum(...slice(blocks.mainDescentContinuation, as.Ordinal<Block>(0), as.Ordinal<Block>(2))))   // 59 + ... + 61
                    .toBe(5 * 24)

                expect(sum(...slice(blocks.mainDescent, as.Ordinal<Block>(10), as.Ordinal<Block>(22))))             // 23 + ... + 45
                    .toBe(17 * 24)
                expect(sum(...slice(blocks.mainDescentContinuation, as.Ordinal<Block>(2), as.Ordinal<Block>(8))))   // 63 + ... + 73
                    .toBe(17 * 24)

                expect(sum(...slice(blocks.mainDescent, as.Ordinal<Block>(22), as.Ordinal<Block>(28))))             // 47 + ... + 57
                    .toBe(13 * 24)
                expect(sum(...slice(blocks.mainDescentContinuation, as.Ordinal<Block>(8), as.Ordinal<Block>(12))))  // 75 + ... + 81
                    .toBe(13 * 24)
            },
        )
    })

    describe('three per', () => {
        it('corresponds with the main descent, breaking each of its steps into three parts', () => {
            expect(blocks.threePer)
                .toEqual([
                    //              .. MainDescent
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
                    //                                              .. MainDescent ×24s
                    //                                              .. Odds .. All
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

            // MainDescent ×24s

            // Odds
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(0), as.Ordinal<Block>(0 + 10)))) // The first alignment period is an exception, lasting 10 steps instead of 12, because the first of its 4 steps really should be a three-per [ -1, 1, 3 ] where the first two cancel out, but instead, since negative time doesn't make sense, it's just a [ 3 ]
                .toBe(1 * 24)
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(16), as.Ordinal<Block>(16 + (3 * 4)))))
                .toBe(3 * 24)
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(34), as.Ordinal<Block>(34 + (3 * 4)))))
                .toBe(5 * 24)
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(52), as.Ordinal<Block>(52 + (3 * 4)))))
                .toBe(7 * 24)
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(70), as.Ordinal<Block>(70 + (3 * 4)))))
                .toBe(9 * 24)

            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(10), as.Ordinal<Block>(10 + (3 * 2)))))
                .toBe(1 * 24)
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(28), as.Ordinal<Block>(28 + (3 * 2)))))
                .toBe(2 * 24)
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(46), as.Ordinal<Block>(46 + (3 * 2)))))
                .toBe(3 * 24)
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(64), as.Ordinal<Block>(64 + (3 * 2)))))
                .toBe(4 * 24)
        })
    })

    describe('five per', () => {
        it(
            `corresponds with the main descent continuation \
until the first spot where it aligns with the main descent (five 24's in), \
then stays with the main descent for the rest of it, \
breaking each of its steps into five parts`,
            () => {
                expect(blocks.fivePer)
                    .toEqual([
                        //                      .. MainDescent  .. Continuation
                        15, 13, 11, 9, 11,                      // 59
                        13, 15, 13, 11, 9,                      // 61
                        7, 5, 3, 5, 3,          // 23
                        1, 3, 5, 7, 9,          // 25
                        7, 5, 3, 5, 7,          // 27
                        5, 7, 5, 7, 5,          // 29
                        7, 5, 7, 5, 7,          // 31
                        5, 7, 9, 7, 5,          // 33
                        3, 5, 7, 9, 11,         // 35
                        9, 7, 5, 7, 9,          // 37
                        7, 9, 7, 9, 7,          // 39
                        9, 7, 9, 7, 9,          // 41
                        7, 9, 11, 9, 7,         // 43
                        5, 7, 9, 11, 13,        // 45
                        11, 9, 7, 9, 11,        // 47
                        9, 11, 9, 11, 9,        // 49
                        11, 9, 11, 9, 11,       // 51
                        9, 11, 13, 11, 9,       // 53
                        7, 9, 11, 13, 15,       // 55
                        13, 11, 9, 11, 13,      // 57
                    ])
            },
        )

        /*
        15-13-11-9-11 lopsidevee
13-15-13-11-9 lopsidevee
 7-5-3-5-3 aitch
1-3-5-7-9 scent, min 1
7-5-3-5-7 vee, min 3

5-7-5-7-5 backbone, min 5
7-5-7-5-7 backbone, min 5
5-7-9-7-5 vee, min 5
3-5-7-9-11 scent, min 3
9-7-5-7-9 vee, min 5

7-9-7-9-7 backbone, min 7
9-7-9-7-9 backbone, min 7
7-9-11-9-7 vee, min 7
5-7-9-11-13 scent, min 5
11-9-7-9-11 vee, min 7

9-11-9-11-9 backbone
11-9-11-9-11 backbone
9-11-13-11-9 vee
7-9-11-13-15 scent
13-11-9-11-13 vee
         */

        it('can also be looked at in terms of how, by virtue of being a detail-ization of the main descent and its continuation, it also lines up with the underlying 24 rhythm following a pattern of multiples', () => {
            expect(blocks.fivePer)
                .toEqual([
                    //                                                                  .. MainDescent ×24s .. Continuation ×24s
                    //                                                                  .. Odds .. All      .. Odds .. All
                    15, 13, 11, 9,                                                                                  // 2×24
                    11, 13,                                                                                         // 1×24
                    15, 13, 11, 9,                                                                                  // 2×24
                    7, 5, 3, 5, 3, 1,                                                           // 1×24
                    3, 5, 7, 9,                                                                 // 1×24
                    7, 5, 3, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 9, 7, 5,         // 5×24
                    3, 5, 7, 9,                                                                 // 1×24
                    11, 9, 7, 5, 7, 9,                                                          // 2×24
                    7, 9, 7, 9, 7, 9,                                                   // 2×24
                    7, 9, 7, 9, 7, 9,                                                   // 2×24
                    11, 9, 7, 5, 7, 9,                                                  // 2×24
                    11, 13,                                                             // 1×24
                    11, 9, 7, 9, 11, 9, 11, 9, 11, 9,                                           // 4×24
                    11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 7, 9,                           // 5×24
                    11, 13,                                                             // 1×24
                    15, 13, 11, 9,                                                      // 2×24
                    11, 13,                                                             // 1×24
                ])

            // Continuation ×24s

            // All
            expect(sum(...slice(blocks.fivePer, as.Ordinal<Block>(0), as.Ordinal<Block>(0 + (5 * 2)))))
                .toBe(5 * 24)

            // MainDescent ×24s

            // Odds
            expect(sum(...slice(blocks.fivePer, as.Ordinal<Block>(20), as.Ordinal<Block>(20 + (5 * 4)))))
                .toBe(5 * 24)
            expect(sum(...slice(blocks.fivePer, as.Ordinal<Block>(50), as.Ordinal<Block>(50 + (5 * 4)))))
                .toBe(7 * 24)
            expect(sum(...slice(blocks.fivePer, as.Ordinal<Block>(80), as.Ordinal<Block>(80 + (5 * 4)))))
                .toBe(9 * 24)

            // All
            expect(sum(...slice(blocks.fivePer, as.Ordinal<Block>(10), as.Ordinal<Block>(10 + (5 * 2)))))
                .toBe(2 * 24)
            expect(sum(...slice(blocks.fivePer, as.Ordinal<Block>(40), as.Ordinal<Block>(40 + (5 * 2)))))
                .toBe(3 * 24)
            expect(sum(...slice(blocks.fivePer, as.Ordinal<Block>(70), as.Ordinal<Block>(70 + (5 * 2)))))
                .toBe(4 * 24)
        })
    })

    describe('seven per', () => {
        it('corresponds with the main descent continuation at first for most of it, then the main descent for a bit of it, breaking each of its steps into seven parts', () => {
            expect(blocks.sevenPer)
                .toEqual([
                    //                          .. MainDescent  .. Continuation
                    7, 9, 7, 9, 11, 9, 7,                       // 59
                    5, 7, 9, 7, 9, 11, 13,                      // 61
                    15, 13, 11, 9, 7, 5, 3,                     // 63
                    5, 7, 9, 11, 13, 11, 9,                     // 65
                    7, 9, 11, 9, 11, 9, 11,                     // 67
                    9, 11, 9, 11, 9, 11, 9,                     // 69
                    11, 9, 11, 9, 11, 9, 11,                    // 71
                    13, 11, 9, 11, 9, 11, 9,                    // 73
                    7, 9, 7, 9, 7, 5, 3,        // 47
                    1, 3, 5, 7, 9, 11, 13,      // 49
                    11, 9, 7, 5, 7, 5, 7,       // 51
                    5, 7, 9, 7, 9, 7, 9,        // 53
                    7, 9, 7, 9, 7, 9, 7,        // 55
                    9, 7, 9, 7, 9, 7, 9,        // 57
                ])
        })

        it('can also be looked at in terms of how, by virtue of being a detail-ization of the main descent and its continuation, it also lines up with the underlying 24 rhythm following a pattern of multiples', () => {
            expect(blocks.sevenPer)
                .toEqual([
                    //                                                                                              .. MainDescent ×24s .. Continuation ×24s
                    //                                                                                              .. Odds .. All      .. Odds .. All
                    7, 9, 7, 9, 11, 9, 7, 5, 7, 9, 7, 9, 11, 13,                                                                                // 5×24
                    15, 13, 11, 9, 7, 5, 3, 5, 7, 9, 11, 13, 11, 9, 7, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9,                     // 11×24
                    11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 11, 9, 11, 9,                                                                           // 6×24
                    7, 9, 7, 9, 7, 5, 3, 1, 3, 5, 7, 9, 11, 13,                                                             // 4×24
                    11, 9, 7, 5, 7, 5, 7, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9,            // 9×24
                ])

            // Continuation ×24s

            // Odds
            expect(sum(...slice(blocks.sevenPer, as.Ordinal<Block>(14), as.Ordinal<Block>(14 + (7 * 4)))))
                .toBe(11 * 24)

            // All
            expect(sum(...slice(blocks.sevenPer, as.Ordinal<Block>(0), as.Ordinal<Block>(0 + (7 * 2)))))
                .toBe(5 * 24)
            expect(sum(...slice(blocks.sevenPer, as.Ordinal<Block>(42), as.Ordinal<Block>(42 + (7 * 2)))))
                .toBe(6 * 24)

            // MainDescent ×24s

            // Odds
            expect(sum(...slice(blocks.sevenPer, as.Ordinal<Block>(70), as.Ordinal<Block>(70 + (7 * 4)))))
                .toBe(9 * 24)

            // All
            expect(sum(...slice(blocks.sevenPer, as.Ordinal<Block>(56), as.Ordinal<Block>(56 + (7 * 2)))))
                .toBe(4 * 24)
        })
    })

    describe('nine per', () => {
        it('corresponds the main descent continuation, breaking each of its steps into nine parts', () => {
            expect(blocks.ninePer)
                .toEqual([
                    //                                  .. Continuation
                    7, 5, 7, 5, 7, 9, 7, 5, 7,		    // 59
                    5, 7, 5, 7, 9, 7, 5, 7, 9,		    // 61
                    7, 9, 7, 9, 7, 5, 7, 5, 7,          // 63
                    5, 3, 5, 7, 5, 7, 9, 11, 13,        // 65
                    15, 13, 11, 9, 7, 5, 3, 1, 3,       // 67
                    5, 7, 9, 7, 9, 7, 9, 7, 9,          // 69
                    7, 9, 7, 9, 7, 9, 7, 9, 7,          // 71
                    9, 7, 9, 7, 9, 7, 9, 7, 9,          // 73
                    11, 9, 7, 9, 7, 9, 7, 9, 7,         // 75
                    9, 11, 9, 7, 9, 7, 9, 7, 9,         // 77
                    7, 5, 7, 5, 7, 9, 11, 13, 15,       // 79
                    17, 15, 13, 11, 9, 7, 5, 3, 1,      // 81
                ])
        })

        it('can also be looked at in terms of how, by virtue of being a detail-ization of the main descent continuation, it also lines up with the underlying 24 rhythm following a pattern of multiples', () => {
            expect(blocks.ninePer)
                .toEqual([
                    //                                                                                                                      .. Continuation ×24s
                    //                                                                                                                      .. Odds .. All
                    7, 5, 7, 5, 7, 9, 7, 5, 7, 5, 7, 5, 7, 9, 7, 5, 7, 9,                                                                           // 5×24
                    7, 9, 7, 9, 7, 5, 7, 5, 7, 5, 3, 5, 7, 5, 7, 9, 11, 13, 15, 13, 11, 9, 7, 5, 3, 1, 3, 5, 7, 9, 7, 9, 7, 9, 7, 9,        // 11×24
                    7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9,                                                                           // 6×24
                    11, 9, 7, 9, 7, 9, 7, 9, 7, 9, 11, 9, 7, 9, 7, 9, 7, 9, 7, 5, 7, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1,    // 13×24
                ])

            // Continuation ×24s

            // Odds
            expect(sum(...slice(blocks.ninePer, as.Ordinal<Block>(18), as.Ordinal<Block>(18 + (9 * 4)))))
                .toBe(11 * 24)
            expect(sum(...slice(blocks.ninePer, as.Ordinal<Block>(72), as.Ordinal<Block>(72 + (9 * 4)))))
                .toBe(13 * 24)

            // All
            expect(sum(...slice(blocks.ninePer, as.Ordinal<Block>(0), as.Ordinal<Block>(0 + (9 * 2)))))
                .toBe(5 * 24)
            expect(sum(...slice(blocks.ninePer, as.Ordinal<Block>(54), as.Ordinal<Block>(54 + (9 * 2)))))
                .toBe(6 * 24)
        })
    })
})
