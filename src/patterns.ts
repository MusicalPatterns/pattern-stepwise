import { Material } from '@musical-patterns/compiler'
import { Metadata } from '@musical-patterns/pattern'
import { buildPatterns, PatternId, Patterns, StandardPattern } from '@musical-patterns/registry'
import { buildEntities, buildScales } from './materials'
import { post } from './metadata'
import { specData } from './specs'

const material: Material = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: Metadata = {
    description: post,
    formattedName: 'Stepwise',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-08-14T07:00:00.000Z',
    musicalIdeaIllustrated: 'nested sequential summing',
    originalPublish: '2018-08-14T07:00:00.000Z',
}

const pattern: StandardPattern = {
    material,
    metadata,
    patternId: PatternId.STEPWISE,
    specData,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
})

export {
    pattern,
    patterns,
}
