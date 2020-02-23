// tslint:disable no-duplicate-string

import { as, Block, musicalAs } from '@musical-patterns/utilities'
import { computeWorkoutShapedChildStairs } from '../../../../../src/indexForTest'

describe('by both minimum child value and child count', (): void => {
    it('errors for even minimum child values', (): void => {
        expect((): void => {
            computeWorkoutShapedChildStairs(musicalAs.Value(9), {
                childCount: as.Cardinal<Block>(3),
                minChildValue: musicalAs.Value(2),
            })
        })
            .toThrowError(`Cannot compute workout-shaped child stairs with an even minimum child value. This minimum child value was 2.`)
        expect((): void => {
            computeWorkoutShapedChildStairs(musicalAs.Value(9), {
                childCount: as.Cardinal<Block>(3),
                minChildValue: musicalAs.Value(8),
            })
        })
            .toThrowError(`Cannot compute workout-shaped child stairs with an even minimum child value. This minimum child value was 8.`)
    })

    it('errors for even child counts', (): void => {
        expect((): void => {
            computeWorkoutShapedChildStairs(musicalAs.Value(9), {
                childCount: as.Cardinal<Block>(2),
                minChildValue: musicalAs.Value(9),
            })
        })
            .toThrowError(`Cannot compute workout-shaped child stairs with an even child count. This child count was 2.`)
        expect((): void => {
            computeWorkoutShapedChildStairs(musicalAs.Value(9), {
                childCount: as.Cardinal<Block>(8),
                minChildValue: musicalAs.Value(9),
            })
        })
            .toThrowError(`Cannot compute workout-shaped child stairs with an even child count. This child count was 8.`)
    })

    describe('minimum child value of 3 and child count of 1', (): void => {
        it('works for parent values of 3 or 5', (): void => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(3), {
                childCount: as.Cardinal<Block>(1),
                minChildValue: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 3 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(5), {
                childCount: as.Cardinal<Block>(1),
                minChildValue: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 5 ]))
        })

        it('errors for other odd parent values, but because child count of 1 works for any odd parent value, you cannot get a new error here, only the ones you would get trying a bad minimum child value and parent value combination', (): void => {
            // tslint:disable-next-line no-empty-block
        })
    })

    describe('minimum child value of 3 and child count of 3', (): void => {
        it('works for parent values of 11 or 13', (): void => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(11), {
                childCount: as.Cardinal<Block>(3),
                minChildValue: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 3, 5, 3 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(13), {
                childCount: as.Cardinal<Block>(3),
                minChildValue: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 5, 3, 5 ]))
        })

        it('errors for other values that could have worked for that parent value and minimum child value combination or that parent value and child count combination but cannot work all together', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(5), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 5, child count 3, and minimum child value 3.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(29), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 29, child count 3, and minimum child value 3.')
        })

        it('can still give you the error specific to parent value and child count', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(3), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 3 and child count 3.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(21), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 21 and child count 3.')
        })

        it('can still give you the error specific to parent value and minimum child value', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(7), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 7 and minimum child value 3.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(17), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 17 and minimum child value 3.')
        })

        it('can give you an error if it cannot work for either that parent value and child count combination or that parent value and minimum child value combination', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(1), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for either parent value 1 and child count 3 or for parent value 1 and minimum child value 3, let alone parent value 1, child count 3, and minimum child value 3.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(9), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for either parent value 9 and child count 3 or for parent value 9 and minimum child value 3, let alone parent value 9, child count 3, and minimum child value 3.')
        })
    })

    describe('minimum child value of 3 and child count of 5', (): void => {
        it('works for parent values of 19 or 21', (): void => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(19), {
                childCount: as.Cardinal<Block>(5),
                minChildValue: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 3, 5, 3, 5, 3 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(21), {
                childCount: as.Cardinal<Block>(5),
                minChildValue: musicalAs.Value(3),
            }))
                .toEqual(as.Block([ 5, 3, 5, 3, 5 ]))
        })

        it('errors for other values that could have worked for that parent value and minimum child value combination or that parent value and child count combination but cannot work all together', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(11), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 11, child count 5, and minimum child value 3.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(29), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 29, child count 5, and minimum child value 3.')
        })

        it('can still give you the error specific to parent value and child count', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(3), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 3 and child count 5.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(5), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 5 and child count 5.')
        })

        it('can still give you the error specific to parent value and minimum child value', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(9), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 9 and minimum child value 3.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(31), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 31 and minimum child value 3.')
        })

        it('can give you an error if it cannot work for either that parent value and child count combination or that parent value and minimum child value combination', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(1), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for either parent value 1 and child count 5 or for parent value 1 and minimum child value 3, let alone parent value 1, child count 5, and minimum child value 3.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(7), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(3),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for either parent value 7 and child count 5 or for parent value 7 and minimum child value 3, let alone parent value 7, child count 5, and minimum child value 3.')
        })
    })

    describe('minimum child value of 5 and child count of 1', (): void => {
        it('works for parent values of 5 or 7', (): void => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(5), {
                childCount: as.Cardinal<Block>(1),
                minChildValue: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 5 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(7), {
                childCount: as.Cardinal<Block>(1),
                minChildValue: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 7 ]))
        })

        it('errors for other odd parent values, but because child count of 1 works for any odd parent value, you cannot get a new error here, only the ones you would get trying a bad minChildValue and parentValue combination', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(3), {
                    childCount: as.Cardinal<Block>(1),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 3 and minimum child value 5.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(9), {
                    childCount: as.Cardinal<Block>(1),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 9 and minimum child value 5.')
        })
    })

    describe('minimum child value of 5 and child count of 3', (): void => {
        it('works for parent values of 17 or 19', (): void => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(17), {
                childCount: as.Cardinal<Block>(3),
                minChildValue: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 5, 7, 5 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(19), {
                childCount: as.Cardinal<Block>(3),
                minChildValue: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 7, 5, 7 ]))
        })

        it('errors for other values that could have worked for that parent value and minimum child value combination or that parent value and child count combination but cannot work all together', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(29), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 29, child count 3, and minimum child value 5.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(31), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 31, child count 3, and minimum child value 5.')
        })

        it('actually cannot give the error specific to parent value and child count because for that to happen it would have to work for parent value and minimum child value but not for parent value and child count, and the only ones that would work for parent value and minimum child value would also work for parent value and child count', (): void => {
            // tslint:disable-next-line no-empty-block
        })

        it('can still give you the error specific to parent value and minimum child value', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(11), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 11 and minimum child value 5.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(25), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 25 and minimum child value 5.')
        })

        it('can give you an error if it cannot work for either that parent value and child count combination or that parent value and minimum child value combination', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(1), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for either parent value 1 and child count 3 or for parent value 1 and minimum child value 5, let alone parent value 1, child count 3, and minimum child value 5.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(3), {
                    childCount: as.Cardinal<Block>(3),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for either parent value 3 and child count 3 or for parent value 3 and minimum child value 5, let alone parent value 3, child count 3, and minimum child value 5.')
        })
    })

    describe('min child value of 5 and child count of 5', (): void => {
        it('works for parent values of 29 or 31', (): void => {
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(29), {
                childCount: as.Cardinal<Block>(5),
                minChildValue: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 5, 7, 5, 7, 5 ]))
            expect(computeWorkoutShapedChildStairs(musicalAs.Value(31), {
                childCount: as.Cardinal<Block>(5),
                minChildValue: musicalAs.Value(5),
            }))
                .toEqual(as.Block([ 7, 5, 7, 5, 7 ]))
        })

        it('errors for other values that could have worked for that parent value and minimum child value combination or that parent value and child count combination but cannot work all together', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(19), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 19, child count 5, and minimum child value 5.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(41), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 41, child count 5, and minimum child value 5.')
        })

        it('can still give you the error specific to parent value and child count', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(5), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 5 and child count 5.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(7), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 7 and child count 5.')
        })

        it('can still give you the error specific to parent value and minimum child value', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(9), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 9 and minimum child value 5.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(11), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for parent value 11 and minimum child value 5.')
        })

        it('can give you an error if it cannot work for either that parent value and child count combination or that parent value and minimum child value combination', (): void => {
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(1), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for either parent value 1 and child count 5 or for parent value 1 and minimum child value 5, let alone parent value 1, child count 5, and minimum child value 5.')
            expect((): void => {
                computeWorkoutShapedChildStairs(musicalAs.Value(3), {
                    childCount: as.Cardinal<Block>(5),
                    minChildValue: musicalAs.Value(5),
                })
            })
                .toThrowError('Cannot compute workout-shaped child stairs for either parent value 3 and child count 5 or for parent value 3 and minimum child value 5, let alone parent value 3, child count 5, and minimum child value 5.')
        })
    })
})
