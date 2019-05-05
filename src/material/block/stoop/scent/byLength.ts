import {
    as,
    Block,
    Cardinal,
    DOUBLE,
    floor,
    isEven,
    map, min,
    musicalAs,
    negative,
    ONE_HALF,
    Ordinal,
    quotient,
    repeat, sum,
    use,
    Value,
} from '@musical-patterns/utilities'

const computeDescentStoopByLength: (value: Value, length: Cardinal<Block>) => Block =
    (value: Value, length: Cardinal<Block>): Block => {
        const stoop: Block = as.Block([])
        if (isEven(length)) {
            throw new Error(
                `Cannot compute a scent stoop with an even length. This length was ${length}.`,
            )
        }

        const basisValue: Value = musicalAs.Value(floor(quotient(as.number(value), as.number(length))))
        const basisStoop: Value[] = repeat([ basisValue ], as.Cardinal<Value[]>(as.number(length)))

        stoop.push(...map(basisStoop, (entry: Value, index: Ordinal<Value[]>) =>
            as.number(use.Cardinal(
                entry,
                as.Cardinal<Value>(use.Multiple(
                    as.number(use.Cardinal(
                        index,
                        as.Cardinal<Ordinal<Value[]>>(negative(floor(use.Scalar(length, ONE_HALF)))),
                    )),
                    DOUBLE,
                )),
            )),
        ))

        if (sum(...stoop) !== as.number(value)) {
            throw new Error(`Cannot compute a scent stoop for value ${value} and length ${length}.`)
        }

        return stoop
    }

export {
    computeDescentStoopByLength,
}
