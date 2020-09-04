import selectNote from './selectNote'

export default function playSound(code, ctx) {
  if (code && ctx) {
    // ! Temp octave
    const tempOctave = 3

    const osc = ctx.createOscillator()
    const now = ctx.currentTime
    const volume = ctx.createGain()
    const destination = ctx.destination
    const note = selectNote(code, tempOctave)

    if (osc && osc.frequency && note) {
      volume.gain.value = 0.1
      osc.type = 'sine'
      osc.start()
      osc.frequency.value = note.frequency
      osc.connect(volume)
      osc.stop(now + 1)
      volume.connect(destination)
    }
  }
}