import { DEFAULT_DURATION_SCALAR } from '../../../src/constants'
import { BaseSongSpec } from '../../../src/songTypes'
import { Scalar } from '../../../src/utilities/nominalTypes'

// tslint:disable-next-line:no-any no-magic-numbers
const C8_FOR_STEPWISE: Scalar = 4186 as any

const stepwiseSongSpec: BaseSongSpec = {
    songDurationScalar: DEFAULT_DURATION_SCALAR,
    songPitchScalar: C8_FOR_STEPWISE,
}

export {
    stepwiseSongSpec,
}
