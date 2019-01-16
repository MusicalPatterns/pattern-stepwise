import { PatternSpec, standardInitialPatternSpec, StandardPatternSpecProperties } from '@musical-patterns/pattern'
import { STEPWISE_DURATION_SCALAR, STEPWISE_PITCH_SCALAR } from './constants'

const initialSpec: PatternSpec = {
    ...standardInitialPatternSpec,
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: STEPWISE_DURATION_SCALAR,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: STEPWISE_PITCH_SCALAR,
}

export {
    initialSpec,
}
