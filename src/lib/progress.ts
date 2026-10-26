export type Mistake = { lessonSlug: string; exerciseId: string; prompt: string; given: string; answer: string; explanation: string; at: number };
export type Progress = { completed: Record<string, { percent: number; at: number }>; attempts: { correct: number; total: number }; mistakes: Mistake[]; saved: string[] };
const KEY = "gj-progress-v1";
export const empty = (): Progress => ({ completed: {}, attempts: { correct: 0, total: 0 }, mistakes: [], saved: [] });
export function load(): Progress {
  try { const r = localStorage.getItem(KEY); return r ? { ...empty(), ...JSON.parse(r) } : empty(); } catch { return empty(); }
}
export function save(p: Progress) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch {} }
/** Revision schedule: a mistake is due for review 1 day after it was made. */
export const isDue = (m: Mistake, now = Date.now()) => now - m.at >= 86_400_000;
