import {
    computeFlatDurationsScale,
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
                durationScalars: computeFlatDurationsScale().scalars,
                pitchScalars: computeSubharmonicSeriesScale().scalars,
            },
        )

export {
    materializeScales,
}
