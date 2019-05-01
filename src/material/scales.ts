import {
    computeFlatValueScale,
    computeSubharmonicSeriesScale,
    MaterializeScales,
    materializeStandardScales,
    Scale,
} from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'

const materializeScales: MaterializeScales =
    (specs: StandardSpecs): Scale[] =>
        materializeStandardScales(
            specs,
            {
                pitchScalars: computeSubharmonicSeriesScale().scalars,
                valueScalars: computeFlatValueScale().scalars,
            },
        )

export {
    materializeScales,
}
