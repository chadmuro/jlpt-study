export function generateRandomNumbers(
  count: number,
  excludeNumbers: number[]
): number[] {
  const randomNumbers: number[] = [];

  while (randomNumbers.length < count) {
    const randomNumber: number = Math.floor(Math.random() * 2273) + 1;

    if (!excludeNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return randomNumbers;
}
