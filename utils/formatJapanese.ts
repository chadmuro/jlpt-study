export function formatJapanese(japanese: string) {
  const splitJapanese = japanese.replace(" ", "").split("]");

  if (splitJapanese.length === 1) return japanese;

  const removedKanjiArray = splitJapanese.map((part, index) => {
    if (index === splitJapanese.length - 1) return part;

    const separatorIndex = part.indexOf("[");

    return part
      .replace(" ", "")
      .replace(part[separatorIndex - 1] + part[separatorIndex], "");
  });

  const formattedJapanese = removedKanjiArray.join("");
  return formattedJapanese;
}
