import { notes } from './notes'
import { keyCodes } from './keyCodes'

export default function selectNote(key, octave) {
  const octaveMultiplier = octave * keyCodes.length
  const mappedNotes = {}
  for (let i = 0; i < keyCodes.length; i++) {
    const currentNote = notes[i + octaveMultiplier]
    mappedNotes[keyCodes[i]] = currentNote
  }

  return mappedNotes[key]
}
