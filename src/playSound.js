export default function playSound(note, ctx) {
  if (ctx) {
    const osc = ctx.createOscillator()
    const now = ctx.currentTime
    const volume = ctx.createGain()
    const destination = ctx.destination

    if (osc && osc.frequency && note) {
      const randomImperfectFreq = Math.random() * 1.5
      volume.gain.value = 0.1
      osc.type = 'triangle'
      osc.start()
      osc.frequency.value = note.frequency + randomImperfectFreq
      osc.connect(volume)
      //ASDR
      volume.gain.linearRampToValueAtTime(0.1, now + 0.1);
      volume.gain.exponentialRampToValueAtTime(0.02, now + 0.3);
      volume.gain.exponentialRampToValueAtTime(0.0001, now + 2);
      osc.stop(now + 2)
      volume.connect(destination)
    }
  }
}