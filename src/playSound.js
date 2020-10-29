export default function playSound(note, ctx) {
  if (ctx) {
    const osc = ctx.createOscillator()
    const now = ctx.currentTime
    const volume = ctx.createGain()
    const destination = ctx.destination

    if (osc && osc.frequency && note) {
      volume.gain.value = 0.1
      osc.type = 'sine'
      osc.start()
      osc.frequency.value = note.frequency
      osc.connect(volume)
      // Ramp quickly up.
      volume.gain.linearRampToValueAtTime(0.1, now + 0.1);
      // Then decay down to a sustain level.
      volume.gain.exponentialRampToValueAtTime(0.02, now + 0.3);

      volume.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
      osc.stop(now + 1)
      volume.connect(destination)
    }
  }
}