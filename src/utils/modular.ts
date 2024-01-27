// TODO: Raise PR for this on modular forms

import { MaybeValue } from "@modular-forms/solid";

type Value = MaybeValue<number>;

/**
 * Creates a validation functions that validates that a number is at least some value
 *
 * @param requirement The min number.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function minNumber(
  requirement: number,
  error: string
): (value: Value) => string {
  return (value: Value) =>
    value != null && value != undefined && value < requirement ? error : "";
}
