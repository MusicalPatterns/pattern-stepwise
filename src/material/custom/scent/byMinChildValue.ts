import { as, Block, isEven, musicalAs, ofNotAs, use, Value } from '@musical-patterns/utilities'
import { NEXT_ODD } from '../constants'

const computeDescentShapedChildStairsByMinChildValue: (parentValue: Value, minChildValue: Value) => Block =
    (parentValue: Value, minChildValue: Value): Block => {
        const childStairs: Block = as.Block([])
        if (isEven(minChildValue)) {
            throw new Error(
                `Cannot compute scent-shaped child stairs with an even minimum child value. \
This minimum child value was ${String(minChildValue)}.`,
            )
        }

        let totalChildStairsValue: Value = musicalAs.Value(0)
        let currentChildStairValue: Value = minChildValue

        while (totalChildStairsValue < parentValue) {
            childStairs.push(as.number(currentChildStairValue))
            totalChildStairsValue = use.Cardinal(totalChildStairsValue, as.Cardinal(ofNotAs(currentChildStairValue)))
            currentChildStairValue = use.Cardinal(currentChildStairValue, NEXT_ODD)
        }

        return childStairs
    }

export {
    computeDescentShapedChildStairsByMinChildValue,
}
