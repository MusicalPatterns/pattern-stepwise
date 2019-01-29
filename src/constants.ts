// tslint:disable:no-magic-numbers

import { Frequency, Millisecond, to } from '@musical-patterns/utilities'

const C8: Frequency = to.Frequency(4186)
const STEPWISE_INITIAL_BASE_FREQUENCY: Frequency = C8
const STEPWISE_INITIAL_BASE_DURATION: Millisecond = to.Millisecond(100)

export {
    STEPWISE_INITIAL_BASE_FREQUENCY,
    STEPWISE_INITIAL_BASE_DURATION,
}
