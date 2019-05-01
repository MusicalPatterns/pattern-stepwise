import {
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpec,
    StandardSpecs,
} from '@musical-patterns/spec'
import { STEPWISE_INITIAL_HZ_PHYSICALIZATION, STEPWISE_INITIAL_MS_PHYSICALIZATION } from './constants'

const initialSpecs: StandardSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.MS_PHYSICALIZATION ]: STEPWISE_INITIAL_MS_PHYSICALIZATION,
    [ StandardSpec.HZ_PHYSICALIZATION ]: STEPWISE_INITIAL_HZ_PHYSICALIZATION,
}

const spec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initialSpecs,
}

export {
    spec,
}
