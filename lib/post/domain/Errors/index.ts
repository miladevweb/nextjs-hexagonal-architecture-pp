export class FieldIsRequiredError extends Error {
  message = 'This field is required ❌'
}

export class TitleContainsAngularError extends Error {
  message = 'Title cannot contain the word "angular" ❌'
}