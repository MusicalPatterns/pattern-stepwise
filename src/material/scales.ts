import { MaterializeScales, Scale } from '@musical-patterns/material'
import {
    computeFlatDurationsScale,
    computeSubharmonicSeriesScale,
    materializeStandardScales,
    StandardSpecs,
} from '@musical-patterns/pattern'

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
