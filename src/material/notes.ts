import { NoteSpec } from '@musical-patterns/compiler'
import { STANDARD_DURATIONS_SCALE_INDEX, STANDARD_PITCH_SCALE_INDEX } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'

const buildUnpitchedNoteSpec: (duration: number) => NoteSpec =
    (duration: number): NoteSpec => ({
        durationSpec: {
            index: to.Ordinal(duration),
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
    })

const buildNoteSpec: (duration: number) => NoteSpec =
    (duration: number): NoteSpec => ({
        ...buildUnpitchedNoteSpec(duration),
        pitchSpec: {
            index: to.Ordinal(duration),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
    })

export {
    buildNoteSpec,
    buildUnpitchedNoteSpec,
}
