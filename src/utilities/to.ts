// tslint:disable:variable-name no-any

import { Contour } from '../types'
import { ContourElement } from './nominalTypes'

const Contour: (_: Array<number | ContourElement>) => Contour =
    (contour: Array<number | ContourElement>): Contour =>
        contour.map((contourElement: ContourElement | number): ContourElement => contourElement as any)

export {
    Contour,
}
