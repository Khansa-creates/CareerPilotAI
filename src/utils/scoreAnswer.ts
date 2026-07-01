export function scoreAnswer(
  answer: string
) {
  const words =
    answer.trim().split(" ");

  if (words.length < 10)
    return 3;

  if (words.length < 30)
    return 6;

  return 9;
}