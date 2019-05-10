// tslint:disable no-magic-numbers

import { as, Cardinal, Cycle, Ordinal } from '@musical-patterns/utilities'

// tslint:disable-next-line no-any
const NEXT_ODD: Cardinal<any> = as.Cardinal<any>(2)

const INDEX_OF_THE_BIGGER_WORKOUT_CYCLE_ELEMENT: Ordinal<Cycle> = as.Ordinal<Cycle>(1)
const INDEX_OF_THE_SMALLER_WORKOUT_CYCLE_ELEMENT: Ordinal<Cycle> = as.Ordinal<Cycle>(0)

const TWO_ODDS: number = 4

const THREE_PER_CHILD_STAIRS_INSTRUCTIONS_CHUNK_COUNT: Cardinal = as.Cardinal(17)

export {
    NEXT_ODD,
    INDEX_OF_THE_BIGGER_WORKOUT_CYCLE_ELEMENT,
    INDEX_OF_THE_SMALLER_WORKOUT_CYCLE_ELEMENT,
    TWO_ODDS,
    THREE_PER_CHILD_STAIRS_INSTRUCTIONS_CHUNK_COUNT,
}
