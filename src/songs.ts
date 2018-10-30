import { DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR } from '../../../src'
import { SongId } from '../../songId'
import { Song, SongMaterial, SongMetadata, SongSpec } from '../../types'
import { C8 } from './constants'
import { buildStepwiseEntities, buildStepwiseScales } from './materials'

const stepwiseSongMaterial: SongMaterial = {
    buildEntitiesFunction: buildStepwiseEntities,
    buildScalesFunction: buildStepwiseScales,
}

const stepwiseSongMetadata: SongMetadata = {
    description: 'stepwise motion within recurring bounds',
    formattedName: 'Stepwise',
}

const stepwiseSongSpec: SongSpec = {
    songDurationScalar: DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR,
    songPitchScalar: C8,
}

const stepwiseSong: Song = {
    material: stepwiseSongMaterial,
    metadata: stepwiseSongMetadata,
    songId: SongId.STEPWISE,
    spec: stepwiseSongSpec,
}

export {
    stepwiseSong,
}
