// tslint:disable no-magic-numbers

import {
    Frequency,
    Milliseconds,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
} from '@musical-patterns/utilities'

const STEPWISE_INITIAL_BASE_FREQUENCY: Frequency =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._8 ]
const STEPWISE_INITIAL_BASE_DURATION: Milliseconds = to.Milliseconds(100)

export {
    STEPWISE_INITIAL_BASE_FREQUENCY,
    STEPWISE_INITIAL_BASE_DURATION,
}
