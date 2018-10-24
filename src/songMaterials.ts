import { SongMaterial } from '../../../src/songTypes'
import { buildStepwiseEntities } from './entities'
import { buildStepwiseScales } from './scales'

const stepwiseSongMaterial: SongMaterial = {
    buildEntitiesFunction: buildStepwiseEntities,
    buildScalesFunction: buildStepwiseScales,
}

export {
    stepwiseSongMaterial,
}
