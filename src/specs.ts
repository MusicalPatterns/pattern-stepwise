import {
    standardInitialSpec,
    StandardSpec,
    standardSpecAttributes,
    StandardSpecData,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { STEPWISE_BASE_DURATION, STEPWISE_BASE_FREQUENCY } from './constants'

const initial: StandardSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.BASE_DURATION ]: STEPWISE_BASE_DURATION,
    [ StandardSpecProperties.BASE_FREQUENCY ]: STEPWISE_BASE_FREQUENCY,
}

const specData: StandardSpecData = {
    attributes: standardSpecAttributes,
    initial,
}

export {
    specData,
}
