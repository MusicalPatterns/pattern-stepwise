import { BuildScalesFunction, flatDurationsScale, Scales, SongSpec, subharmonicSeriesScale } from '../../../src'

const buildStepwiseScales: BuildScalesFunction = (songSpec: SongSpec): Scales =>
    [
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

export {
    buildStepwiseScales,
}
