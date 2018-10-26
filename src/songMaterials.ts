import { SongMaterial } from '../../../src'
import { buildStepwiseEntities } from './entities'
import { buildStepwiseScales } from './scales'

const stepwiseSongMaterial: SongMaterial = {
    buildEntitiesFunction: buildStepwiseEntities,
    buildScalesFunction: buildStepwiseScales,
}

export {
    stepwiseSongMaterial,
}
