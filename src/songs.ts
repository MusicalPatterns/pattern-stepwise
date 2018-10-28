import { SongId } from '../../songId'
import { Song } from '../../types'
import { stepwiseSongMaterial } from './songMaterials'
import { stepwiseSongMetadata } from './songMetadata'
import { stepwiseSongSpec } from './songSpecs'

// enum StepwiseSongIds {
//     STEPWISE = 'STEPWISE',
// }

const stepwiseSong: Song = {
    material: stepwiseSongMaterial,
    metadata: stepwiseSongMetadata,
    songId: SongId.STEPWISE,
    spec: stepwiseSongSpec,
}

export {
    stepwiseSong,
    // StepwiseSongIds,
}
