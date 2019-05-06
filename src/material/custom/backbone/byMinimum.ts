import {
    as,
    Block,
    Cycle,
    dividesEvenly,
    INCREMENT,
    isEven,
    musicalAs,
    negative,
    Ordinal,
    use,
    Value,
} from '@musical-patterns/utilities'
import {
    INDEX_OF_THE_BIGGER_BACKBONE_CYCLE_ELEMENT,
    INDEX_OF_THE_SMALLER_BACKBONE_CYCLE_ELEMENT,
    NEXT_ODD,
    TWO_ODDS,
} from '../constants'

const computeInitialBackboneCycleIndexForBackboneStoopByMinimum:
    (value: Value, backboneCycle: Cycle) => Ordinal<Cycle> =
    (value: Value, backboneCycle: Cycle): Ordinal<Cycle> =>
        dividesEvenly(
            use.Cardinal(
                value,
                as.Cardinal<Value>(negative(use.Ordinal(
                    backboneCycle,
                    INDEX_OF_THE_BIGGER_BACKBONE_CYCLE_ELEMENT,
                ))),
            ),
            TWO_ODDS,
        ) ?
            INDEX_OF_THE_BIGGER_BACKBONE_CYCLE_ELEMENT :
            INDEX_OF_THE_SMALLER_BACKBONE_CYCLE_ELEMENT

const computeBackboneStoopByMinimum: (value: Value, minimum: Value) => Block =
    (value: Value, minimum: Value): Block => {
        if (isEven(minimum)) {
            throw new Error(
                `Cannot compute a backbone stoop with an even minimum. This minimum was ${minimum}.`,
            )
        }

        const stoop: Block = as.Block([])
        const backboneCycle: Cycle = as.Cycle([
            minimum,
            use.Cardinal(minimum, NEXT_ODD),
        ])

        let total: Value = musicalAs.Value(0)
        let index: Ordinal<Cycle> = computeInitialBackboneCycleIndexForBackboneStoopByMinimum(value, backboneCycle)

        while (total < value) {
            const nextElement: number = use.Ordinal(backboneCycle, index)
            stoop.push(nextElement)
            total = use.Cardinal(total, as.Cardinal<Value>(nextElement))
            index = use.Cardinal(index, INCREMENT)
        }

        if (total > value) {
            throw new Error(`Cannot compute a backbone stoop for value ${value} and minimum ${minimum}.`)
        }

        return stoop
    }

export {
    computeBackboneStoopByMinimum,
}
