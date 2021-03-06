export const keyStrokes = [
  'A',
  'W',
  'S',
  'E',
  'D',
  'F',
  'T',
  'G',
  'Y',
  'H',
  'U',
  'J',
  'K',
  'O',
  'L'
]

export const keyCodes = [
  65,
  87,
  83,
  69,
  68,
  70,
  84,
  71,
  89,
  72,
  85,
  74,
  75,
  79,
  76
]

export function mappedKeysAndCodes() {
  const obj = {}
  for (let i = 0; i < keyStrokes.length; i++) {
    obj[keyStrokes[i]] = keyCodes[i]
  }
  return obj
}