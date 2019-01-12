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
    mostRecentPublish: process.env.PUBLISH_DATE,
    musicalIdeaIllustrated: 'nested sequential summing',
    originalPublish: '2018-08-14T07:00:00.000Z',
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
