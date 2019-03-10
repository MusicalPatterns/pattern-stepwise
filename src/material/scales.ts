import { MaterializeScales, Scale } from '@musical-patterns/compiler'
import {
    buildFlatDurationsScale,
    buildSubharmonicSeriesScale,
    materializeStandardScales,
    StandardSpec,
} from '@musical-patterns/pattern'

const materializeScales: MaterializeScales =
    (spec: StandardSpec): Scale[] =>
        materializeStandardScales(
            spec,
            {
                durationScalars: buildFlatDurationsScale().scalars,
                pitchScalars: buildSubharmonicSeriesScale().scalars,
            },
        )

export {
    materializeScales,
}
