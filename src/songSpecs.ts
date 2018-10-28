import { DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR } from '../../../src'
import { SongSpec } from '../../types'
import { C8 } from './constants'

const stepwiseSongSpec: SongSpec = {
    songDurationScalar: DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR,
    songPitchScalar: C8,
}

export {
    stepwiseSongSpec,
}
