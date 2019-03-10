import { Material } from '@musical-patterns/compiler'
import { Id, Metadata, Patterns, StandardPattern } from '@musical-patterns/pattern'
import { materializeEntities, materializeScales } from './material'
import { post } from './metadata'
import { data } from './spec'

const material: Material = {
    materializeEntities,
    materializeScales,
}

const metadata: Metadata = {
    description: post,
    formattedName: 'Stepwise',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-08-14T07:00:00.000Z',
    musicalIdeaIllustrated: 'nested sequential summing',
    originalPublish: '2018-08-14T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

const pattern: StandardPattern = {
    data,
    id: Id.STEPWISE,
    material,
    metadata,
}

const patterns: Partial<Patterns> = {
    [ pattern.id ]: pattern,
}

export {
    pattern,
    patterns,
}
