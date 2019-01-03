import { NoteSpec } from '@musical-patterns/compiler'
import { to } from '@musical-patterns/utilities'
import { DEFAULT_DURATIONS_SCALE_INDEX, DEFAULT_PITCH_SCALE_INDEX } from '@musical-patterns/utilities-pattern'

const buildUnpitchedNoteSpec: (duration: number) => NoteSpec =
    (duration: number): NoteSpec => ({
        durationSpec: {
            index: to.Index(duration),
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
    })

const buildNoteSpec: (duration: number) => NoteSpec =
    (duration: number): NoteSpec => ({
        ...buildUnpitchedNoteSpec(duration),
        pitchSpec: {
            index: to.Index(duration),
            scaleIndex: DEFAULT_PITCH_SCALE_INDEX,
        },
    })

export {
    buildNoteSpec,
    buildUnpitchedNoteSpec,
}
