import { MaterializeScales, Scale } from '@musical-patterns/compiler'
import {
    computeFlatDurationsScale,
    computeSubharmonicSeriesScale,
    materializeStandardScales,
    StandardSpec,
} from '@musical-patterns/pattern'

const materializeScales: MaterializeScales =
    (spec: StandardSpec): Scale[] =>
        materializeStandardScales(
            spec,
            {
                durationScalars: computeFlatDurationsScale().scalars,
                pitchScalars: computeSubharmonicSeriesScale().scalars,
            },
        )

export {
    materializeScales,
}
