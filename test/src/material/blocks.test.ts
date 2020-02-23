// tslint:disable binary-expression-operand-order

import { as, Block, slice, sum } from '@musical-patterns/utilities'
import { StepwiseBlocks, thunkBlocks } from '../../../src/indexForTest'

const PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN: number = 4
const PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN: number = 2

describe('blocks', (): void => {
    let blocks: StepwiseBlocks
    beforeEach((): void => {
        blocks = thunkBlocks()
    })

    it(
        `the ParentAisles (Alpha and Beta) and all of the ChildAisles (ThreePer, FivePer, SevenPer, and NinePer) share the same total value, \
which is thirty-five Balusters (multiples of the underlying rhythm of duration 24) = 840`,
        (): void => {
            expect(sum(...blocks.alpha))
                .toBe(24 * 35)
            expect(sum(...blocks.beta))
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

    describe('ParentAisles: Alpha and Beta', (): void => {
        it(
            `the ParentAisle Alpha's ParentStairs grow in value from 3 to 57, by 2's (only odds), in a series of Flights which alternate \
between two FlightChains, where one FlightChain increases in Baluster count along the odd numbers and the other along the whole numbers`,
            (): void => {
                expect(blocks.alpha)
                    .toEqual([
                        // ParentAisle:     // Alpha
                        // FlightChain:     // Odds // All
                        // ParentStairs \/  // Baluster Count \/
                        3, 5, 7, 9,         // 1
                        11, 13,                     // 1
                        15, 17, 19, 21,     // 3
                        23, 25,                     // 2
                        27, 29, 31, 33,     // 5
                        35, 37,                     // 3
                        39, 41, 43, 45,     // 7
                        47, 49,                     // 4
                        51, 53, 55, 57,     // 9
                    ])
            },
        )

        it(
            `the ParentAisle Beta picks up where the Alpha ends, continuing the growth from 59 to 81, again by 2's (only odds), \
while continuing the alternating between FlightChains growing by Baluster count, one along the odd numbers, one along the whole numbers`,
            (): void => {
                expect(blocks.beta)
                    .toEqual([
                        // ParentAisle:     // Beta
                        // FlightChain:     // Odds // All
                        // ParentStairs \/  // Baluster Count \/
                        59, 61,                     // 5
                        63, 65, 67, 69,     // 11
                        71, 73,                     // 6
                        75, 77, 79, 81,     // 13
                    ])
            },
        )

        it(
            `frequently syncs with multiples of an underlying rhythm of duration 24, "Balusters"; \
where said multiples increase each time, alternating between two different patterns of increasion, "FlightChains"; \
one which increments along the odd numbers, and the other which increments along all the whole numbers; \
also the former takes 4 ParentStairs between syncs ("Landings") each time, while the latter takes only 2 each time; \
also this pattern wraps from Alpha to Beta just fine`,
            (): void => {
                // Odds
                expect(sum(...slice(blocks.alpha, as.Ordinal<Block>(0), as.Ordinal<Block>(0 + PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN))))
                    .toBe(1 * 24)
                expect(sum(...slice(blocks.alpha, as.Ordinal<Block>(6), as.Ordinal<Block>(6 + PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN))))
                    .toBe(3 * 24)
                expect(sum(...slice(blocks.alpha, as.Ordinal<Block>(12), as.Ordinal<Block>(12 + PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN))))
                    .toBe(5 * 24)
                expect(sum(...slice(blocks.alpha, as.Ordinal<Block>(18), as.Ordinal<Block>(18 + PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN))))
                    .toBe(7 * 24)
                expect(sum(...slice(blocks.alpha, as.Ordinal<Block>(24), as.Ordinal<Block>(24 + PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN))))
                    .toBe(9 * 24)
                expect(sum(...slice(blocks.beta, as.Ordinal<Block>(2), as.Ordinal<Block>(2 + PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN))))
                    .toBe(11 * 24)
                expect(sum(...slice(blocks.beta, as.Ordinal<Block>(8), as.Ordinal<Block>(8 + PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN))))
                    .toBe(13 * 24)

                // All
                expect(sum(...slice(blocks.alpha, as.Ordinal<Block>(4), as.Ordinal<Block>(4 + PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN))))
                    .toBe(1 * 24)
                expect(sum(...slice(blocks.alpha, as.Ordinal<Block>(10), as.Ordinal<Block>(10 + PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN))))
                    .toBe(2 * 24)
                expect(sum(...slice(blocks.alpha, as.Ordinal<Block>(16), as.Ordinal<Block>(16 + PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN))))
                    .toBe(3 * 24)
                expect(sum(...slice(blocks.alpha, as.Ordinal<Block>(22), as.Ordinal<Block>(22 + PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN))))
                    .toBe(4 * 24)
                expect(sum(...slice(blocks.beta, as.Ordinal<Block>(0), as.Ordinal<Block>(0 + PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN))))
                    .toBe(5 * 24)
                expect(sum(...slice(blocks.beta, as.Ordinal<Block>(6), as.Ordinal<Block>(6 + PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN))))
                    .toBe(6 * 24)
            },
        )

        it(
            `Alpha and Beta Sync with each other at three Stories: one at the beginning/end, \
one five Balusters in, and another twenty-two Balusters in; \
thus the total thirty-five Balusters are divided into three Staircases with Baluster counts five, seventeen, and thirteen, respectively`,
            (): void => {
                expect(sum(...slice(blocks.alpha, as.Ordinal<Block>(0), as.Ordinal<Block>(10))))              // 3 + ... + 21
                    .toBe(5 * 24)
                expect(sum(...slice(blocks.beta, as.Ordinal<Block>(0), as.Ordinal<Block>(2))))   // 59 + ... + 61
                    .toBe(5 * 24)

                expect(sum(...slice(blocks.alpha, as.Ordinal<Block>(10), as.Ordinal<Block>(22))))             // 23 + ... + 45
                    .toBe(17 * 24)
                expect(sum(...slice(blocks.beta, as.Ordinal<Block>(2), as.Ordinal<Block>(8))))   // 63 + ... + 73
                    .toBe(17 * 24)

                expect(sum(...slice(blocks.alpha, as.Ordinal<Block>(22), as.Ordinal<Block>(28))))             // 47 + ... + 57
                    .toBe(13 * 24)
                expect(sum(...slice(blocks.beta, as.Ordinal<Block>(8), as.Ordinal<Block>(12))))  // 75 + ... + 81
                    .toBe(13 * 24)
            },
        )
    })

    describe('ThreePer ChildAisle', (): void => {
        it('spawns entirely from the ParentAisle Alpha, breaking each of the ParentStairs into three ChildStairs', (): void => {
            expect(blocks.threePer)
                .toEqual([
                    // ParentAisle:     // Alpha
                    // ChildStairs \/   // Value \/
                    3,                  // 3
                    1, 3, 1,            // 5
                    3, 1, 3,            // 7
                    5, 3, 1,            // 9
                    3, 5, 3,            // 11
                    5, 3, 5,            // 13
                    7, 5, 3,            // 15
                    5, 7, 5,            // 17
                    7, 5, 7,            // 19
                    9, 7, 5,            // 21
                    7, 9, 7,            // 23
                    9, 7, 9,            // 25
                    11, 9, 7,           // 27
                    9, 11, 9,           // 29
                    11, 9, 11,          // 31
                    13, 11, 9,          // 33
                    11, 13, 11,         // 35
                    13, 11, 13,         // 37
                    15, 13, 11,         // 39
                    13, 15, 13,         // 41
                    15, 13, 15,         // 43
                    17, 15, 13,         // 45
                    15, 17, 15,         // 47
                    17, 15, 17,         // 49
                    19, 17, 15,         // 51
                    17, 19, 17,         // 53
                    19, 17, 19,         // 55
                    21, 19, 17,         // 57
                ])
        })

        it('can also be looked at in terms of how, by virtue of subdividing the ParentStairs of the ParentAisle Alpha, it also lines up with the same Balusters, and also alternates Flights between the same two FlightChains as it does', (): void => {
            expect(blocks.threePer)
                .toEqual([
                    // ParentAisle:                                 // Alpha
                    // FlightChain:                                 // Odds // All
                    // ChildStairs \/                               // Baluster count \/
                    3, 1, 3, 1, 3, 1, 3, 5, 3, 1,                   // 1
                    3, 5, 3, 5, 3, 5,                                       // 1
                    7, 5, 3, 5, 7, 5, 7, 5, 7, 9, 7, 5,             // 3
                    7, 9, 7, 9, 7, 9,                                       // 2
                    11, 9, 7, 9, 11, 9, 11, 9, 11, 13, 11, 9,       // 5
                    11, 13,                                                 // 1
                    11, 13,                                                 // 1
                    11, 13,                                                 // 1
                    15, 13, 11, 13, 15, 13, 15, 13, 15, 17, 15, 13, // 7
                    15, 17, 15, 17, 15, 17,                                 // 4
                    19, 17, 15, 17, 19, 17, 19, 17, 19, 21, 19, 17, // 9
                ])

            // Alpha

            // Odds
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(0), as.Ordinal<Block>(0 + 10)))) // The first Flight is an exception, lasting only 10 ChildStairs instead of 12, because the first of its 4 ParentStairs, 3, does not get subdivided, but strictly following the pattern it would be subdivided into three ChildStairs: [ -1, 1, 3 ] where the first two would cancel out, but negative time does not exist
                .toBe(1 * 24)
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(16), as.Ordinal<Block>(16 + (3 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN)))))
                .toBe(3 * 24)
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(34), as.Ordinal<Block>(34 + (3 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN)))))
                .toBe(5 * 24)
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(52), as.Ordinal<Block>(52 + (3 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN)))))
                .toBe(7 * 24)
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(70), as.Ordinal<Block>(70 + (3 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN)))))
                .toBe(9 * 24)

            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(10), as.Ordinal<Block>(10 + (3 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN)))))
                .toBe(1 * 24)
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(28), as.Ordinal<Block>(28 + (3 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN)))))
                .toBe(2 * 24)
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(46), as.Ordinal<Block>(46 + (3 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN)))))
                .toBe(3 * 24)
            expect(sum(...slice(blocks.threePer, as.Ordinal<Block>(64), as.Ordinal<Block>(64 + (3 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN)))))
                .toBe(4 * 24)
        })
    })

    describe('FivePer', (): void => {
        it(
            `spawns from the ParentAisle Beta for the first Staircase, i.e. until the first Story \
(spot where both ParentAisles Sync with each other), five Balusters in, \
then spawns from the ParentAisle Alpha for the remaining two Staircases, \
breaking each of the ParentStairs into five ChildStairs`,
            (): void => {
                expect(blocks.fivePer)
                    .toEqual([
                        // ParentAisle:         // Alpha        // Beta
                        // ChildStairs \/       // Value \/     // Value \/
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

        it('can also be looked at in terms of how, by virtue of subdividing the ParentStairs of the ParentAisles, it also lines up with the same Balusters, and also alternates Flights between the same two FlightChains as they do', (): void => {
            expect(blocks.fivePer)
                .toEqual([
                    // ParentAisle:                                                     // Alpha                // Beta
                    // FlightChain:                                                     // Odds // All          // Odds // All
                    // ChildStairs \/                                                   // Baluster count \/    // Baluster count \/
                    15, 13, 11, 9,                                                                                      // 2
                    11, 13,                                                                                             // 1
                    15, 13, 11, 9,                                                                                      // 2
                    7, 5, 3, 5, 3, 1,                                                           // 1
                    3, 5, 7, 9,                                                                 // 1
                    7, 5, 3, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 9, 7, 5,         // 5
                    3, 5, 7, 9,                                                                 // 1
                    11, 9, 7, 5, 7, 9,                                                          // 2
                    7, 9, 7, 9, 7, 9,                                                   // 2
                    7, 9, 7, 9, 7, 9,                                                   // 2
                    11, 9, 7, 5, 7, 9,                                                  // 2
                    11, 13,                                                             // 1
                    11, 9, 7, 9, 11, 9, 11, 9, 11, 9,                                           // 4
                    11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 7, 9,                           // 5
                    11, 13,                                                             // 1
                    15, 13, 11, 9,                                                      // 2
                    11, 13,                                                             // 1
                ])

            // Beta

            // All
            expect(sum(...slice(blocks.fivePer, as.Ordinal<Block>(0), as.Ordinal<Block>(0 + (5 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN)))))
                .toBe(5 * 24)

            // Alpha

            // Odds
            expect(sum(...slice(blocks.fivePer, as.Ordinal<Block>(20), as.Ordinal<Block>(20 + (5 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN)))))
                .toBe(5 * 24)
            expect(sum(...slice(blocks.fivePer, as.Ordinal<Block>(50), as.Ordinal<Block>(50 + (5 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN)))))
                .toBe(7 * 24)
            expect(sum(...slice(blocks.fivePer, as.Ordinal<Block>(80), as.Ordinal<Block>(80 + (5 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN)))))
                .toBe(9 * 24)

            // All
            expect(sum(...slice(blocks.fivePer, as.Ordinal<Block>(10), as.Ordinal<Block>(10 + (5 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN)))))
                .toBe(2 * 24)
            expect(sum(...slice(blocks.fivePer, as.Ordinal<Block>(40), as.Ordinal<Block>(40 + (5 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN)))))
                .toBe(3 * 24)
            expect(sum(...slice(blocks.fivePer, as.Ordinal<Block>(70), as.Ordinal<Block>(70 + (5 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN)))))
                .toBe(4 * 24)
        })
    })

    describe('SevenPer ChildAisle', (): void => {
        it(
            `spawns from the ParentAisle Beta for the first two Staircases, i.e. until the second Story \
(spot where both ParentAisles Sync with each other), twenty-two Balusters in, \
then spawns from the ParentAisle Alpha for the remaining Staircase, \
breaking each of the ParentStairs into seven ChildStairs`,
            (): void => {
                expect(blocks.sevenPer)
                    .toEqual([
                        // ParentAisle:             // Alpha        // Beta
                        // ChildStairs \/           // Value \/     // Value \/
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
            },
        )

        it('can also be looked at in terms of how, by virtue of subdividing the ParentStairs of the ParentAisle of Alpha and Beta, it also lines up with the same Balusters, and also alternates Flights between the same two FlightChains as they do', (): void => {
            expect(blocks.sevenPer)
                .toEqual([
                    // ParentAisle:                                                                                 // Alpha                // Beta
                    // FlightChain:                                                                                 // Odds // All          // Odds // All
                    // ChildStairs \/                                                                               // Baluster count \/    // Baluster count \/
                    7, 9, 7, 9, 11, 9, 7, 5, 7, 9, 7, 9, 11, 13,                                                                                    // 5
                    15, 13, 11, 9, 7, 5, 3, 5, 7, 9, 11, 13, 11, 9, 7, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9,                         // 11
                    11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 11, 9, 11, 9,                                                                               // 6
                    7, 9, 7, 9, 7, 5, 3, 1, 3, 5, 7, 9, 11, 13,                                                             // 4
                    11, 9, 7, 5, 7, 5, 7, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9,            // 9
                ])

            // Beta

            // Odds
            expect(sum(...slice(blocks.sevenPer, as.Ordinal<Block>(14), as.Ordinal<Block>(14 + (7 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN)))))
                .toBe(11 * 24)

            // All
            expect(sum(...slice(blocks.sevenPer, as.Ordinal<Block>(0), as.Ordinal<Block>(0 + (7 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN)))))
                .toBe(5 * 24)
            expect(sum(...slice(blocks.sevenPer, as.Ordinal<Block>(42), as.Ordinal<Block>(42 + (7 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN)))))
                .toBe(6 * 24)

            // Alpha

            // Odds
            expect(sum(...slice(blocks.sevenPer, as.Ordinal<Block>(70), as.Ordinal<Block>(70 + (7 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN)))))
                .toBe(9 * 24)

            // All
            expect(sum(...slice(blocks.sevenPer, as.Ordinal<Block>(56), as.Ordinal<Block>(56 + (7 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN)))))
                .toBe(4 * 24)
        })
    })

    describe('NinePer', (): void => {
        it('spawns entirely from the ParentAisle Beta, breaking each of the ParentStairs into nine ChildStairs', (): void => {
            expect(blocks.ninePer)
                .toEqual([
                    // ParentAisle:                     // Beta
                    // ChildStairs \/                   // Value \/
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

        it('can also be looked at in terms of how, by virtue of subdividing the ParentStairs of the ParentAisle Beta, it also lines up with the same Balusters, and also alternates Flights between the same two FlightChains as it does', (): void => {
            expect(blocks.ninePer)
                .toEqual([
                    // ParentAisle:                                                                                                         // Beta
                    // FlightChain:                                                                                                         // Odds // All
                    // ChildStairs \/                                                                                                       // Baluster count \/
                    7, 5, 7, 5, 7, 9, 7, 5, 7, 5, 7, 5, 7, 9, 7, 5, 7, 9,                                                                           // 5
                    7, 9, 7, 9, 7, 5, 7, 5, 7, 5, 3, 5, 7, 5, 7, 9, 11, 13, 15, 13, 11, 9, 7, 5, 3, 1, 3, 5, 7, 9, 7, 9, 7, 9, 7, 9,        // 11
                    7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9,                                                                           // 6
                    11, 9, 7, 9, 7, 9, 7, 9, 7, 9, 11, 9, 7, 9, 7, 9, 7, 9, 7, 5, 7, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1,    // 13
                ])

            // Beta

            // Odds
            expect(sum(...slice(blocks.ninePer, as.Ordinal<Block>(18), as.Ordinal<Block>(18 + (9 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN)))))
                .toBe(11 * 24)
            expect(sum(...slice(blocks.ninePer, as.Ordinal<Block>(72), as.Ordinal<Block>(72 + (9 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_ODDS_FLIGHT_CHAIN)))))
                .toBe(13 * 24)

            // All
            expect(sum(...slice(blocks.ninePer, as.Ordinal<Block>(0), as.Ordinal<Block>(0 + (9 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN)))))
                .toBe(5 * 24)
            expect(sum(...slice(blocks.ninePer, as.Ordinal<Block>(54), as.Ordinal<Block>(54 + (9 * PARENT_STAIR_COUNT_PER_FLIGHT_FOR_WHOLES_FLIGHT_CHAIN)))))
                .toBe(6 * 24)
        })
    })
})
