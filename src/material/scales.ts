import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, StandardSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import { from, NO_TRANSLATION, to } from '@musical-patterns/utilities'

const buildScales: BuildScalesFunction =
    (spec: StandardSpec): Scale[] => {
        const { nonScale, flatDurationsScale, subharmonicSeriesScale } = buildStandardScales()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = {
            scalar: to.Scalar(from.Ms(spec[ StandardSpecProperties.BASE_DURATION ] || to.Ms(1))),
            scalars: flatDurationsScale.scalars,
            translation: spec[ StandardSpecProperties.DURATION_TRANSLATION ] || NO_TRANSLATION,
        }
        const pitchesScale: Scale = {
            scalar: to.Scalar(from.Hz(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Hz(1))),
            scalars: subharmonicSeriesScale.scalars,
            translation: spec[ StandardSpecProperties.FREQUENCY_TRANSLATION ] || NO_TRANSLATION,
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
