import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, StandardSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import { from, to } from '@musical-patterns/utilities'

const buildScales: BuildScalesFunction =
    (spec: StandardSpec): Scale[] => {
        const { nonScale, flatDurationsScale, subharmonicSeriesScale } = buildStandardScales()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = {
            scalar: to.Scalar(from.Milliseconds(spec[ StandardSpecProperties.BASE_DURATION ] || to.Milliseconds(1))),
            scalars: flatDurationsScale.scalars,
            translation: spec[ StandardSpecProperties.DURATION_TRANSLATION ] || to.Translation(0),
        }
        const pitchesScale: Scale = {
            scalar: to.Scalar(from.Frequency(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Frequency(1))),
            scalars: subharmonicSeriesScale.scalars,
            translation: spec[ StandardSpecProperties.FREQUENCY_TRANSLATION ] || to.Translation(0),
        }

        return [
            gainScale,
            durationsScale,
            pitchesScale,
        ]
    }

export {
    buildScales,
}
