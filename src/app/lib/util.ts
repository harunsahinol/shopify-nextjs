export function ensureStartWith(stringToCheck: string, startWith: string): string {
  return stringToCheck.startsWith(startWith) ? stringToCheck : startWith + stringToCheck;

}