import { DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR } from '../../../src'
import { PatternId } from '../../patternId'
import { Pattern, PatternMaterial, PatternMetadata, PatternSpec } from '../../types'
import { C8 } from './constants'
import { buildEntities, buildScales } from './materials'

const stepwisePatternMaterial: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const stepwisePatternMetadata: PatternMetadata = {
    description: 'stepwise motion within recurring bounds',
    formattedName: 'Stepwise',
    musicalIdeaIllustrated: 'nested sequential summing',
}

const patternSpec: PatternSpec = {
    patternDurationScalar: DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR,
    patternPitchScalar: C8,
}

const pattern: Pattern = {
    material: stepwisePatternMaterial,
    metadata: stepwisePatternMetadata,
    patternId: PatternId.STEPWISE,
    spec: patternSpec,
}

export {
    pattern,
    patternSpec,
}
