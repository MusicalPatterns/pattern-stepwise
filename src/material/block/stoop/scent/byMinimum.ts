import { as, Block, isEven, musicalAs, ofNotAs, use, Value } from '@musical-patterns/utilities'
import { NEXT_ODD } from '../../constants'

const computeDescentStoopByMinimum: (value: Value, minimum: Value) => Block =
    (value: Value, minimum: Value): Block => {
        const stoop: Block = as.Block([])
        if (isEven(minimum)) {
            throw new Error(
                `Cannot compute a scent stoop with an even minimum. This minimum was ${minimum}.`,
            )
        }

        let total: Value = musicalAs.Value(0)
        let current: Value = minimum

        while (total < value) {
            stoop.push(as.number(current))
            total = use.Cardinal(total, as.Cardinal(ofNotAs(current)))
            current = use.Cardinal(current, NEXT_ODD)
        }

        return stoop
    }

export {
    computeDescentStoopByMinimum,
}
