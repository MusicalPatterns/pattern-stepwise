import { PitchValue, Rendering, ValueOnly } from '@musical-patterns/material'
import { as, Block, ContourPiece } from '@musical-patterns/utilities'

const render: Rendering<PitchValue> =
    (block: Block): ContourPiece<PitchValue> =>
        as.ContourPiece<PitchValue>(block.map(
            (blockElement: number) => [
                blockElement,
                blockElement,
            ],
        ))

const renderUnpitched: Rendering<ValueOnly> =
    (block: Block): ContourPiece<ValueOnly> =>
        as.ContourPiece<ValueOnly>(block.map(
            (blockElement: number) => [
                blockElement,
            ],
        ))

export {
    render,
    renderUnpitched,
}
