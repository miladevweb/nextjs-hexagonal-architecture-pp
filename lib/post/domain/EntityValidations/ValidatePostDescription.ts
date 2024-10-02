function isFalsy(value: string) {
  return !!value
}

// It works as a Mapper
export function validatePostDescription(description: string) {
  if (!isFalsy(description)) return undefined
  return description
}
