// tslint:disable no-magic-numbers

import {
    Hz,
    Ms,
    Scalar,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
} from '@musical-patterns/utilities'

const STEPWISE_INITIAL_BASE_FREQUENCY: Scalar<Hz> =
    to.Scalar(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._8 ])
const STEPWISE_INITIAL_BASE_DURATION: Scalar<Ms> = to.Scalar(to.Ms(100))

export {
    STEPWISE_INITIAL_BASE_FREQUENCY,
    STEPWISE_INITIAL_BASE_DURATION,
}
