/**
 * @name useSearchDebugParam
 * @param paramName - The name of the search param to check for. Defaults to "debug"
 * @param falsyValues - The values that should be considered false when checking the search param. Defaults to ["false", "0"]
 */
export function useSearchDebugParam(
  paramName = "debug",
  falsyValues = ["false", "0"]
) {
  const searchParams = new URLSearchParams(window.location.search);
  const debugValue = searchParams.get(paramName);

  if (!debugValue) {
    return false;
  }

  return !falsyValues.includes(debugValue);
}
