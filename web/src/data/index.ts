
export function getFirstTwoSentences(text: string) {

  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];

  const firstTwo = sentences.slice(0, 2).join(" ").trim();

  return sentences.length > 2 ? firstTwo + "..." : firstTwo;

}