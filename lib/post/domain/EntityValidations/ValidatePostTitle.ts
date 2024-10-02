import { FieldIsRequiredError, TitleContainsAngularError } from '../Errors'

function isValid(value: string) {
  return !!value
}

function containsAngular(value: string) {
  const regex = /angular/i
  if (regex.test(value)) return false
  return true
}

export function validatePostTitle(title: string) {
  if (!isValid(title)) throw new FieldIsRequiredError()
  if (!containsAngular(title)) throw new TitleContainsAngularError()
}
