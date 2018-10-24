import { Song } from '../../../src/songTypes'
import { stepwiseSongMaterial } from './songMaterials'
import { stepwiseSongMetadata } from './songMetadata'
import { stepwiseSongSpec } from './songSpecs'

const stepwiseSong: Song = {
    material: stepwiseSongMaterial,
    metadata: stepwiseSongMetadata,
    spec: stepwiseSongSpec,
}

export {
    stepwiseSong,
}
