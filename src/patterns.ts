import { PatternMaterial } from '@musical-patterns/compiler'
import { PatternMetadata, PatternSpec } from '@musical-patterns/pattern'
import { buildPatterns, Pattern, PatternId, Patterns } from '@musical-patterns/registry'
import { to } from '@musical-patterns/utilities'
import { STEPWISE_DURATION_SCALAR, STEPWISE_PITCH_SCALAR } from './constants'
import { buildEntities, buildScales } from './materials'
import { post } from './metadata'

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: PatternMetadata = {
    description: post,
    formattedName: 'Stepwise',
    musicalIdeaIllustrated: 'nested sequential summing',
}

const spec: PatternSpec = {
    patternDurationOffset: to.Offset(0),
    patternDurationScalar: STEPWISE_DURATION_SCALAR,
    patternPitchOffset: to.Offset(0),
    patternPitchScalar: STEPWISE_PITCH_SCALAR,
}

const pattern: Pattern = {
    material,
    metadata,
    patternId: PatternId.STEPWISE,
    spec,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
})

export {
    pattern,
    patterns,
    spec,
}
