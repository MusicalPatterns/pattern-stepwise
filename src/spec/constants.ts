// tslint:disable no-magic-numbers

import {
    as,
    Duration,
    Ms,
    Pitch,
    Point,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
} from '@musical-patterns/utilities'

const STEPWISE_INITIAL_BASIS_FREQUENCY: Pitch =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.F_SHARP_G_FLAT ][ ScientificPitchOctaveNumber._7 ]
const STEPWISE_INITIAL_BASIS_DURATION: Duration = as.Translation<Point<Ms>>(150)

export {
    STEPWISE_INITIAL_BASIS_FREQUENCY,
    STEPWISE_INITIAL_BASIS_DURATION,
}
