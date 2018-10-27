import { BuildScalesFunction, buildStandardScales, Scale, SongSpec } from '../../../src'

const buildStepwiseScales: BuildScalesFunction =
    (songSpec: SongSpec): Scale[] => {
        const { flatDurationsScale, subharmonicSeriesScale } = buildStandardScales()

        return [
            flatDurationsScale,
            {
                scalar: songSpec.songDurationScalar,
                scalars: flatDurationsScale.scalars,
            },
            {
                scalar: songSpec.songPitchScalar,
                scalars: subharmonicSeriesScale.scalars,
            },
        ]
    }

export {
    buildStepwiseScales,
}
