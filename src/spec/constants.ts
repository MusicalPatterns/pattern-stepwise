// tslint:disable no-magic-numbers

import {
    Duration,
    musicalAs,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    Tone,
} from '@musical-patterns/utilities'

const STEPWISE_INITIAL_HZ_PHYSICALIZATION: Tone =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.F_SHARP_G_FLAT ][ ScientificPitchOctaveNumber._7 ]
const STEPWISE_INITIAL_MS_PHYSICALIZATION: Duration = musicalAs.Duration(150)

export {
    STEPWISE_INITIAL_HZ_PHYSICALIZATION,
    STEPWISE_INITIAL_MS_PHYSICALIZATION,
}
