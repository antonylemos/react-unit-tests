export function handleArray(maybeArray?: unknown) {
  if (Array.isArray(maybeArray)) {
    return maybeArray
  } else if (!maybeArray) {
    return []
  } else {
    return [maybeArray]
  }
}

// export function handleArray(maybeArray?: unknown) {
//   if (Array.isArray(maybeArray)) {
//     return maybeArray;
//   } else {
//     return [maybeArray];
//   }
// }
