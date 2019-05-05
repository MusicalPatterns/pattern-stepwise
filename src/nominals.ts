import { computeNominalInterface, DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE } from '@musical-patterns/utilities'

type Landing = Number & { _NominalBrand: 'Landing' }

const { as: stepwiseAs } = computeNominalInterface({
    number: {
        Landing: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as Landing,
    },
})

export {
    stepwiseAs,
    Landing,
}
