import {
    as,
    Block,
    Cardinal,
    DOUBLE,
    floor,
    integerDivide,
    isEven,
    map,
    musicalAs,
    negative,
    ONE_HALF,
    Ordinal,
    repeat,
    sum,
    use,
    Value,
} from '@musical-patterns/utilities'

const computeDescentShapedChildStairsByChildCount: (parentValue: Value, childCount: Cardinal<Block>) => Block =
    (parentValue: Value, childCount: Cardinal<Block>): Block => {
        const childStairs: Block = as.Block([])
        if (isEven(childCount)) {
            throw new Error(
                `Cannot compute scent-shaped child stairs with an even child count. \
This child count was ${String(childCount)}.`,
            )
        }

        const basisChildValue: Value = musicalAs.Value(integerDivide(as.number(parentValue), as.number(childCount)))
        const basisChildStairs: Value[] = repeat([ basisChildValue ], as.Cardinal<Value[]>(as.number(childCount)))

        childStairs.push(...map(basisChildStairs, (entry: Value, index: Ordinal<Value[]>) =>
            as.number(use.Cardinal(
                entry,
                as.Cardinal<Value>(use.Multiple(
                    as.number(use.Cardinal(
                        index,
                        as.Cardinal<Ordinal<Value[]>>(negative(floor(use.Scalar(childCount, ONE_HALF)))),
                    )),
                    DOUBLE,
                )),
            )),
        ))

        if (sum(...childStairs) !== as.number(parentValue)) {
            throw new Error(
                `Cannot compute scent-shaped child stairs for parent value ${String(parentValue)} \
and child count ${String(childCount)}.`,
            )
        }

        return childStairs
    }

export {
    computeDescentShapedChildStairsByChildCount,
}
