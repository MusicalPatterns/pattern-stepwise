import { BaseSongSpec, DEFAULT_DURATION_SCALAR, Scalar } from '../../../src'

// tslint:disable-next-line:no-any no-magic-numbers
const C8_FOR_STEPWISE: Scalar = 4186 as any

const stepwiseSongSpec: BaseSongSpec = {
    songDurationScalar: DEFAULT_DURATION_SCALAR,
    songPitchScalar: C8_FOR_STEPWISE,
}

export {
    stepwiseSongSpec,
}
