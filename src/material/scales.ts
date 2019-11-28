import {
    AbstractName,
    computeFlatValueScale,
    computeSubharmonicSeriesScale,
    MaterializeScales,
    materializeStandardScales,
    Scales,
} from '@musical-patterns/material'
import { Specs } from '@musical-patterns/spec'

const materializeScales: MaterializeScales =
    (specs: Specs): Scales => {
        const standardScales: Scales = materializeStandardScales(
            specs,
            {
                pitchScalars: computeSubharmonicSeriesScale().scalars,
                valueScalars: computeFlatValueScale().scalars,
            },
        )

        // tslint:disable-next-line no-non-null-assertion
        standardScales[ AbstractName.PITCH ]!.push({})

        return standardScales
    }

export {
    materializeScales,
}
