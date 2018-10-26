// tslint:disable:variable-name no-any

import { ContourElement } from './types'

const ContourElement: (contourElement: ContourElement) => number =
    (contourElement: ContourElement): number => contourElement as any

export {
    ContourElement,
}
