// tslint:disable:variable-name no-any

import { ContourElement } from './nominalTypes'

const ContourElement: (contourElement: ContourElement) => number =
    (contourElement: ContourElement): number => contourElement as any

export {
    ContourElement,
}
