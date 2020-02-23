import { areCyclicalTranslations } from '@musical-patterns/utilities'
import { thunkWholes } from '../../../src/indexForTest'

describe('wholes', (): void => {
    it('each of the pitched wholes is a differently offset cyclical translation of each of the others', (): void => {
        expect(areCyclicalTranslations(Object.values(thunkWholes())))
            .toBeTruthy()
    })
})
