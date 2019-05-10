import { Block, Cardinal, Value } from '@musical-patterns/utilities'

interface ComputeChildStairsByChildCountOption {
    childCount: Cardinal<Block>,
}

interface ComputeChildStairsByMinChildValueOption {
    minChildValue: Value,
}

type ComputeChildStairsOptionsBoth = ComputeChildStairsByChildCountOption & ComputeChildStairsByMinChildValueOption

type ComputeChildStairsOptions =
    ComputeChildStairsByChildCountOption |
    ComputeChildStairsByMinChildValueOption |
    ComputeChildStairsOptionsBoth

enum ChildStairsShape {
    WORKOUT = 'WORKOUT',
    ASCENT = 'ASCENT',
    DESCENT = 'DESCENT',
}

type ChildStairsInstruction = [ Value, ChildStairsShape ]

export {
    ComputeChildStairsOptions,
    ComputeChildStairsByMinChildValueOption,
    ComputeChildStairsByChildCountOption,
    ComputeChildStairsOptionsBoth,
    ChildStairsShape,
    ChildStairsInstruction,
}
