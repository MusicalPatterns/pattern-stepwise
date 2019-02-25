import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import {
    buildFlatDurationsScale,
    buildStandardScales,
    buildSubharmonicSeriesScale,
    StandardSpec,
} from '@musical-patterns/pattern'

const buildScales: BuildScalesFunction =
    (spec: StandardSpec): Scale[] =>
        buildStandardScales(
            spec,
            {
                durationScalars: buildFlatDurationsScale().scalars,
                pitchScalars: buildSubharmonicSeriesScale().scalars,
            },
        )

export {
    buildScales,
}
