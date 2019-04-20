// tslint:disable no-magic-numbers

import {
    as,
    Hz,
    Ms,
    ofNotAs,
    Scalar,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
} from '@musical-patterns/utilities'

const STEPWISE_INITIAL_BASE_FREQUENCY: Scalar<Hz> =
    as.Scalar(ofNotAs(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.F_SHARP_G_FLAT ][ ScientificPitchOctaveNumber._7 ]))
const STEPWISE_INITIAL_BASE_DURATION: Scalar<Ms> = as.Scalar<Ms>(150)

export {
    STEPWISE_INITIAL_BASE_FREQUENCY,
    STEPWISE_INITIAL_BASE_DURATION,
}
