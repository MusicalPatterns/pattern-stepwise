import {
    AbstractName,
    computeSubharmonicSeriesScale,
    MaterializeScales,
    materializeStandardScales,
    Scales,
    thunkFlatValueScale,
} from '@musical-patterns/material'
import { Specs } from '@musical-patterns/spec'

const materializeScales: MaterializeScales =
    (specs: Specs): Scales => {
        const standardScales: Scales = materializeStandardScales(
            specs,
            {
                pitchScalars: computeSubharmonicSeriesScale().scalars,
                valueScalars: thunkFlatValueScale().scalars,
            },
        )

        // tslint:disable-next-line no-non-null-assertion
        standardScales[ AbstractName.PITCH ]!.push({})

        return standardScales
    }

export {
    materializeScales,
}
