import { PatternId } from '@musical-patterns/registry'
import { Pattern, PatternMaterial, PatternMetadata, PatternSpec } from '@musical-patterns/shared'
import { STEPWISE_DURATION_SCALAR, STEPWISE_PITCH_SCALAR } from './constants'
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
    patternDurationScalar: STEPWISE_DURATION_SCALAR,
    patternPitchScalar: STEPWISE_PITCH_SCALAR,
}

const pattern: Pattern = {
    material: stepwisePatternMaterial,
    metadata: stepwisePatternMetadata,
    patternId: PatternId.STEPWISE,
    spec: patternSpec,
}

export {
    pattern,
}
