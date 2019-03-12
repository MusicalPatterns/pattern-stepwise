import { Metadata } from '@musical-patterns/pattern'
import { post } from './posts'

const metadata: Metadata = {
    description: post,
    formattedName: 'Stepwise',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-08-14T07:00:00.000Z',
    musicalIdeaIllustrated: 'nested sequential summing',
    originalPublish: '2018-08-14T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

export {
    metadata,
}
