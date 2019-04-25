// tslint:disable no-magic-numbers

import { Amplitude, as, Scalar } from '@musical-patterns/utilities'

const REDUCE_GAIN_BECAUSE_SAMPLES_ARE_REALLY_LOUD: Scalar<Amplitude> = as.Scalar<Amplitude>(0.25)

export {
    REDUCE_GAIN_BECAUSE_SAMPLES_ARE_REALLY_LOUD,
}
