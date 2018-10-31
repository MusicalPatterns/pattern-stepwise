import { DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR } from '../../../src'
import { PatternId } from '../../patternId'
import { Pattern, PatternMaterial, PatternMetadata, PatternSpec } from '../../types'
import { C8 } from './constants'
import { buildStepwiseEntities, buildStepwiseScales } from './materials'

const stepwisePatternMaterial: PatternMaterial = {
    buildEntitiesFunction: buildStepwiseEntities,
    buildScalesFunction: buildStepwiseScales,
}

const stepwisePatternMetadata: PatternMetadata = {
    description: 'stepwise motion within recurring bounds',
    formattedName: 'Stepwise',
}

const stepwisePatternSpec: PatternSpec = {
    patternDurationScalar: DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR,
    patternPitchScalar: C8,
}

const stepwisePattern: Pattern = {
    material: stepwisePatternMaterial,
    metadata: stepwisePatternMetadata,
    patternId: PatternId.STEPWISE,
    spec: stepwisePatternSpec,
}

export {
    stepwisePattern,
}
