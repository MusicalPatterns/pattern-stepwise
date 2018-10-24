import { BuildScalesFunction } from '../../../src/compile/types'
import { flatDurationsScale, subharmonicSeriesScale } from '../../../src/scales'
import { SongSpec } from '../../../src/songs'
import { Scales } from '../../../src/types'

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
