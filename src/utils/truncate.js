export function truncate(stringnumber, n) {
  if (stringnumber?.length > n) {
    return stringnumber.substr(0, n - 1) + "...";
  } else {
    stringnumber;
  }
}
