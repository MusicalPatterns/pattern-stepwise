// tslint:disable no-magic-numbers

import { PitchValue } from '@musical-patterns/material'
import { as, Cardinal, ContourPiece, Cycle } from '@musical-patterns/utilities'

const THREE_PER_CYCLING_CARDINAL: Cardinal<Cycle<ContourPiece<PitchValue>>> =
    as.Cardinal<Cycle<ContourPiece<PitchValue>>>(0)
const FIVE_PER_CYCLING_CARDINAL: Cardinal<Cycle<ContourPiece<PitchValue>>> =
    as.Cardinal<Cycle<ContourPiece<PitchValue>>>(-1)
const SEVEN_PER_CYCLING_CARDINAL: Cardinal<Cycle<ContourPiece<PitchValue>>> =
    as.Cardinal<Cycle<ContourPiece<PitchValue>>>(-2)
const NINE_PER_CYCLING_CARDINAL: Cardinal<Cycle<ContourPiece<PitchValue>>> =
    as.Cardinal<Cycle<ContourPiece<PitchValue>>>(-3)
const MAIN_DESCENT_CYCLING_CARDINAL: Cardinal<Cycle<ContourPiece<PitchValue>>> =
    as.Cardinal<Cycle<ContourPiece<PitchValue>>>(-4)
const MAIN_DESCENT_CONTINUATION_CYCLING_CARDINAL: Cardinal<Cycle<ContourPiece<PitchValue>>> =
    as.Cardinal<Cycle<ContourPiece<PitchValue>>>(-5)
const BACKBONE_CYCLING_CARDINAL: Cardinal<Cycle<ContourPiece<PitchValue>>> =
    as.Cardinal<Cycle<ContourPiece<PitchValue>>>(-6)

export {
    THREE_PER_CYCLING_CARDINAL,
    FIVE_PER_CYCLING_CARDINAL,
    SEVEN_PER_CYCLING_CARDINAL,
    NINE_PER_CYCLING_CARDINAL,
    MAIN_DESCENT_CYCLING_CARDINAL,
    MAIN_DESCENT_CONTINUATION_CYCLING_CARDINAL,
    BACKBONE_CYCLING_CARDINAL,
}
