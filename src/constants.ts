// tslint:disable:no-magic-numbers

import { Scalar, to } from '@musical-patterns/shared'

const C8: Scalar = to.Scalar(4186)
const STEPWISE_PITCH_SCALAR: Scalar = C8
const STEPWISE_DURATION_SCALAR: Scalar = to.Scalar(15)

export {
    STEPWISE_PITCH_SCALAR,
    STEPWISE_DURATION_SCALAR,
}
