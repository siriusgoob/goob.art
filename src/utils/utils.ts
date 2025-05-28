const getWordCount = (text: string): number => text.trim().split(/\s+/).length;

export const getReadTime = (
  text: string | string[] | undefined,
  wordsPerMinute: number = 225
): number => {
  if (!text) return 0;
  const normalizedText = Array.isArray(text) ? text.join(" ") : text;
  const words = getWordCount(normalizedText);
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};
