// tslint:disable no-magic-numbers

import {
    Hz,
    Ms,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
} from '@musical-patterns/utilities'

const STEPWISE_INITIAL_BASE_FREQUENCY: Hz =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._8 ]
const STEPWISE_INITIAL_BASE_DURATION: Ms = to.Ms(100)

export {
    STEPWISE_INITIAL_BASE_FREQUENCY,
    STEPWISE_INITIAL_BASE_DURATION,
}
