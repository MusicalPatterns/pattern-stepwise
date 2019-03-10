import {
    standardAttributes,
    StandardData,
    standardInitialSpec,
    StandardProperty,
    StandardSpec,
} from '@musical-patterns/pattern'
import { STEPWISE_INITIAL_BASE_DURATION, STEPWISE_INITIAL_BASE_FREQUENCY } from './constants'

const initial: StandardSpec = {
    ...standardInitialSpec,
    [ StandardProperty.BASE_DURATION ]: STEPWISE_INITIAL_BASE_DURATION,
    [ StandardProperty.BASE_FREQUENCY ]: STEPWISE_INITIAL_BASE_FREQUENCY,
}

const data: StandardData = {
    attributes: standardAttributes,
    initial,
}

export {
    data,
}
