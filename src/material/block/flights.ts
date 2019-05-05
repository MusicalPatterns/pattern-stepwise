import { as, Block, INCREMENT, isEven, ONE_HALF, Ordinal, sequence, use, Value } from '@musical-patterns/utilities'
import { Landing, stepwiseAs } from '../../nominals'
import {
    BASIS_VALUE_FOR_EVEN_LANDING_FLIGHTS,
    BASIS_VALUE_FOR_ODD_LANDING_FLIGHTS,
    MULTIPLE_TO_GET_INITIAL_VALUE_FOR_LANDING,
    NEXT_NEXT_NEXT_ODD,
    NEXT_NEXT_ODD,
    NEXT_ODD,
    STARTING_STOOP,
    STOOP_LENGTH,
} from './constants'
import { computeAscentStoop, computeBackboneStoop } from './stoop'

const computeParityClassIndexFromEvenLanding: (landing: Landing) => Ordinal =
    (landing: Landing): Ordinal =>
        use.Scalar(landing, ONE_HALF)

const convertParityClassIndexFromOddLanding: (landing: Landing) => Ordinal =
    (landing: Landing): Ordinal =>
        use.Scalar(use.Cardinal(landing, INCREMENT), ONE_HALF)

const computeValueFromParityClassIndex: (parityClassIndex: Ordinal, basisValue: Value) => Value =
    (parityClassIndex: Ordinal, basisValue: Value): Value =>
        use.Cardinal(
            basisValue,
            as.Cardinal<Value>(as.number(use.Multiple(
                parityClassIndex,
                MULTIPLE_TO_GET_INITIAL_VALUE_FOR_LANDING,
            ))),
        )

const computeFlight: (landing: Landing) => Block =
    (landing: Landing): Block => {
        let value: Value
        let parityClassIndex: Ordinal

        if (isEven(landing)) {
            parityClassIndex = computeParityClassIndexFromEvenLanding(landing)
            value = computeValueFromParityClassIndex(parityClassIndex, BASIS_VALUE_FOR_EVEN_LANDING_FLIGHTS)

            return as.Block(sequence(
                landing === stepwiseAs.Landing(0) ?
                    STARTING_STOOP :
                    computeAscentStoop(value, { length: STOOP_LENGTH }),
                computeBackboneStoop(use.Cardinal(value, NEXT_ODD), { length: STOOP_LENGTH }),
                computeBackboneStoop(use.Cardinal(value, NEXT_NEXT_ODD), { length: STOOP_LENGTH }),
                computeAscentStoop(use.Cardinal(value, NEXT_NEXT_NEXT_ODD), { length: STOOP_LENGTH }),
            ))
        }

        parityClassIndex = convertParityClassIndexFromOddLanding(landing)
        value = computeValueFromParityClassIndex(parityClassIndex, BASIS_VALUE_FOR_ODD_LANDING_FLIGHTS)

        return as.Block(sequence(
            computeBackboneStoop(value, { length: STOOP_LENGTH }),
            computeBackboneStoop(use.Cardinal(value, NEXT_ODD), { length: STOOP_LENGTH }),
        ))
    }

export {
    computeFlight,
}
