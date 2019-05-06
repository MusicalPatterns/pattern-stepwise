import { areCyclicalTranslations } from '@musical-patterns/utilities'
import { computeWholes } from '../../../src/indexForTest'

describe('wholes', () => {
    it('each of the pitched wholes is a differently offset cyclical translation of each of the others', () => {
        expect(areCyclicalTranslations(Object.values(computeWholes())))
            .toBeTruthy()
    })
})
