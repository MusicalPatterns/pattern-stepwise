import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, PatternSpec, StandardPatternSpecProperties } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'

const buildScales: BuildScalesFunction =
    (patternSpec: PatternSpec): Scale[] => {
        const { nonScale, flatDurationsScale, subharmonicSeriesScale } = buildStandardScales()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = {
            offset: patternSpec[ StandardPatternSpecProperties.PATTERN_DURATION_OFFSET ] || to.Offset(0),
            scalar: patternSpec[ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ] || to.Scalar(1),
            scalars: flatDurationsScale.scalars,
        }
        const pitchesScale: Scale = {
            offset: patternSpec[ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ] || to.Offset(0),
            scalar: patternSpec[ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ] || to.Scalar(1),
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
