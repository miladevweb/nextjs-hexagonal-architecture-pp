import { FieldIsRequiredError } from "../Errors"

function isValid(value: string) {
    return !!value
}

export function validatePostId(id : string) {
    if (!isValid(id)) throw new FieldIsRequiredError()
}