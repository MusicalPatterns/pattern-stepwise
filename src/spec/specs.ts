import { Spec, Specs, standardConfigurations, standardInitialSpecs, StandardSpec } from '@musical-patterns/spec'
import { STEPWISE_INITIAL_HZ_PHYSICALIZATION, STEPWISE_INITIAL_MS_PHYSICALIZATION } from './constants'

const initialSpecs: Specs = {
    ...standardInitialSpecs,
    [ StandardSpec.MS_PHYSICALIZATION ]: STEPWISE_INITIAL_MS_PHYSICALIZATION,
    [ StandardSpec.HZ_PHYSICALIZATION ]: STEPWISE_INITIAL_HZ_PHYSICALIZATION,
}

const spec: Spec = {
    configurations: standardConfigurations,
    initialSpecs,
}

export {
    spec,
}
