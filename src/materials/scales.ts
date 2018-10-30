import { BuildScalesFunction, buildStandardScales, Scale, scaleFromScalarsAndScalar } from '../../../../src'
import { SongSpec } from '../../../types'

const buildStepwiseScales: BuildScalesFunction =
    (songSpec: SongSpec): Scale[] => {
        const { flatDurationsScale, subharmonicSeriesScale } = buildStandardScales()

        const gainScale: Scale = flatDurationsScale
        const durationsScale: Scale = scaleFromScalarsAndScalar(flatDurationsScale.scalars, songSpec.songDurationScalar)
        const pitchesScale: Scale = scaleFromScalarsAndScalar(subharmonicSeriesScale.scalars, songSpec.songPitchScalar)

        return [
            gainScale,
            durationsScale,
            pitchesScale,
        ]
    }

export {
    buildStepwiseScales,
}
