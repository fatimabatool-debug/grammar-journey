export function normalize(s: string): string {
  return s.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').trim().replace(/\s+/g, " ").replace(/[.!]+$/, "").toLowerCase();
}
export function isCorrect(input: string, answers: string[]): boolean {
  const n = normalize(input);
  return n !== "" && answers.some((a) => normalize(a) === n);
}
export function score(results: (boolean | null)[]) {
  const correct = results.filter((r) => r === true).length;
  const incorrect = results.filter((r) => r === false).length;
  const unanswered = results.filter((r) => r === null).length;
  return { correct, incorrect, unanswered, total: results.length, percent: results.length ? Math.round((correct / results.length) * 100) : 0 };
}
