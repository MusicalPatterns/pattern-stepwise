import { PatternMaterial } from '@musical-patterns/compiler'
import { Pattern, PatternId, PatternMetadata, PatternSpec } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
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
    patternDurationOffset: to.Offset(0),
    patternDurationScalar: STEPWISE_DURATION_SCALAR,
    patternPitchOffset: to.Offset(0),
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
