// tslint:disable no-magic-numbers

import {
    as,
    Block,
    Cardinal,
    Cycle,
    Multiple,
    musicalAs,
    negative,
    Ordinal,
    use,
    Value,
} from '@musical-patterns/utilities'

// tslint:disable-next-line no-any
const NEXT_ODD: Cardinal<any> = as.Cardinal<any>(2)
// tslint:disable-next-line no-any
const NEXT_NEXT_ODD: Cardinal<any> = as.Cardinal<any>(4)
// tslint:disable-next-line no-any
const NEXT_NEXT_NEXT_ODD: Cardinal<any> = as.Cardinal<any>(6)

const INDEX_OF_THE_BIGGER_BACKBONE_CYCLE_ELEMENT: Ordinal<Cycle> = as.Ordinal<Cycle>(1)
const INDEX_OF_THE_SMALLER_BACKBONE_CYCLE_ELEMENT: Ordinal<Cycle> = as.Ordinal<Cycle>(0)

const TWO_ODDS: number = 4

const STOOP_LENGTH: Cardinal<Block> = as.Cardinal<Block>(3)

const STARTING_STOOP: Block = as.Block([ 3 ])

const MULTIPLE_TO_GET_INITIAL_VALUE_FOR_LANDING: Multiple<Ordinal> = as.Multiple<Ordinal>(12)
const BASIS_VALUE_FOR_EVEN_LANDING_FLIGHTS: Value = musicalAs.Value(3)
const BASIS_VALUE_FOR_ODD_LANDING_FLIGHTS: Value = use.Cardinal(
    BASIS_VALUE_FOR_EVEN_LANDING_FLIGHTS,
    as.Cardinal<Value>(negative(TWO_ODDS)),
)

export {
    NEXT_ODD,
    NEXT_NEXT_ODD,
    NEXT_NEXT_NEXT_ODD,
    INDEX_OF_THE_BIGGER_BACKBONE_CYCLE_ELEMENT,
    INDEX_OF_THE_SMALLER_BACKBONE_CYCLE_ELEMENT,
    TWO_ODDS,
    STOOP_LENGTH,
    STARTING_STOOP,
    MULTIPLE_TO_GET_INITIAL_VALUE_FOR_LANDING,
    BASIS_VALUE_FOR_EVEN_LANDING_FLIGHTS,
    BASIS_VALUE_FOR_ODD_LANDING_FLIGHTS,
}
