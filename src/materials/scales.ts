import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, StandardSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'

const buildScales: BuildScalesFunction =
    (spec: StandardSpec): Scale[] => {
        const { nonScale, flatDurationsScale, subharmonicSeriesScale } = buildStandardScales()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = {
            offset: spec[ StandardSpecProperties.PATTERN_DURATION_OFFSET ] || to.Offset(0),
            scalar: spec[ StandardSpecProperties.PATTERN_DURATION_SCALAR ] || to.Scalar(1),
            scalars: flatDurationsScale.scalars,
        }
        const pitchesScale: Scale = {
            offset: spec[ StandardSpecProperties.PATTERN_PITCH_OFFSET ] || to.Offset(0),
            scalar: spec[ StandardSpecProperties.PATTERN_PITCH_SCALAR ] || to.Scalar(1),
            scalars: subharmonicSeriesScale.scalars,
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
