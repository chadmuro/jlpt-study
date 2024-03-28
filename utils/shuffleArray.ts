export function shuffleArray<T>(array: T[]) {
  const newArray = array.slice(); // Create a copy of the original array to avoid modifying it directly

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}
