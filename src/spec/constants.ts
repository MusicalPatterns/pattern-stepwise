// tslint:disable no-magic-numbers

import {
    Duration,
    musicalAs,
    Pitch,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
} from '@musical-patterns/utilities'

const STEPWISE_INITIAL_BASIS_FREQUENCY: Pitch =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.F_SHARP_G_FLAT ][ ScientificPitchOctaveNumber._7 ]
const STEPWISE_INITIAL_BASIS_DURATION: Duration = musicalAs.Duration(150)

export {
    STEPWISE_INITIAL_BASIS_FREQUENCY,
    STEPWISE_INITIAL_BASIS_DURATION,
}
