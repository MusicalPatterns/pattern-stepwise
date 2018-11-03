import { BuildScalesFunction, buildStandardScales, Scale, scaleFromScalarsAndScalar } from '../../../../src'
import { PatternSpec } from '../../../types'

const buildScales: BuildScalesFunction =
    (patternSpec: PatternSpec): Scale[] => {
        const { flatDurationsScale, subharmonicSeriesScale } = buildStandardScales()

        const gainScale: Scale = flatDurationsScale
        const durationsScale: Scale = scaleFromScalarsAndScalar(
            flatDurationsScale.scalars,
            patternSpec.patternDurationScalar,
        )
        const pitchesScale: Scale = scaleFromScalarsAndScalar(
            subharmonicSeriesScale.scalars,
            patternSpec.patternPitchScalar,
        )

        return [
            gainScale,
            durationsScale,
            pitchesScale,
        ]
    }

export {
    buildScales,
}
