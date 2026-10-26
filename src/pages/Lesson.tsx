import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { lessons } from "../content/lessons";
import { topics } from "../content/curriculum";
import { isCorrect, score } from "../lib/check";
import { load, save, empty } from "../lib/progress";

const Box = ({ tone, label, children }: { tone: string; label: string; children: React.ReactNode }) => <div className={"callout " + tone}><p className="font-bold text-navy dark:text-ink">{label}</p>{children}</div>;
export default function LessonPage() {
  const { slug } = useParams(); const lesson = lessons.find((l) => l.slug === slug); const topic = topics.find((t) => t.slug === slug);
  const [p, setP] = useState(empty()); const [ans, setAns] = useState<Record<string, string>>({}); const [res, setRes] = useState<Record<string, boolean>>({}); const [hint, setHint] = useState<Record<string, boolean>>({});
  useEffect(() => { setP(load()); setAns({}); setRes({}); setHint({}); }, [slug]);
  if (!lesson || !topic) return <p>Lesson not found. <Link className="text-link underline" to="/learn">Back to curriculum</Link></p>;
  const idx = lessons.indexOf(lesson); const prev = lessons[idx - 1], next = lessons[idx + 1];
  const upd = (n: typeof p) => { setP(n); save(n); };
  function check(id: string) {
    const ex = lesson!.exercises.find((e) => e.id === id)!; const g = ans[id] ?? ""; const ok = isCorrect(g, ex.answers);
    setRes({ ...res, [id]: ok }); const n = load();
    n.attempts = { correct: n.attempts.correct + (ok ? 1 : 0), total: n.attempts.total + 1 };
    n.mistakes = n.mistakes.filter((m) => m.exerciseId !== id);
    if (!ok && g.trim()) n.mistakes.push({ lessonSlug: lesson!.slug, exerciseId: id, prompt: ex.prompt, given: g, answer: ex.answers[0], explanation: ex.explanation, at: Date.now() });
    upd(n);
  }
  const s = score(lesson.exercises.map((e) => (e.id in res ? res[e.id] : null)));
  const saved = p.saved.includes(lesson.slug);
  const sections = ["Objective", "Definition", "Rules", "Examples", "Mistakes", "Practice", "Story", "Summary"];
  return (<div className="lg:flex lg:gap-8">
    <aside className="mb-4 lg:sticky lg:top-4 lg:mb-0 lg:w-48 lg:self-start"><nav aria-label="Lesson outline" className="card"><p className="font-bold">Outline</p><ul className="mt-2 space-y-1">{sections.map((x) => <li key={x}><a className="text-link underline" href={`#${x}`} onClick={(e) => { e.preventDefault(); document.getElementById(x)?.scrollIntoView(); }}>{x}</a></li>)}</ul></nav></aside>
    <article className="lesson min-w-0 flex-1">
      <p className="text-sm text-mute"><Link className="underline" to="/learn">Curriculum</Link> / {topic.title}</p>
      <h1 className="mt-2 text-3xl">{topic.title} <span className="badge align-middle">{topic.level}</span></h1>
      <button className="btn2 mt-3" aria-pressed={saved} onClick={() => { const n = load(); n.saved = saved ? n.saved.filter((x) => x !== lesson.slug) : [...n.saved, lesson.slug]; upd(n); }}>{saved ? "Saved ✓" : "Save lesson"}</button>
      <section id="Objective"><Box tone="bg-softteal" label="🎯 Goal">{lesson.objective}</Box></section>
      <section id="Definition"><Box tone="bg-softind" label="📘 Definition">{lesson.definition}</Box><p>{lesson.explanation}</p></section>
      <section id="Rules"><h2 className="mt-6 text-xl">Rules and patterns</h2><ul className="list-disc pl-6">{lesson.rules.map((r) => <li key={r}>{r}</li>)}</ul></section>
      <section id="Examples"><h2 className="mt-6 text-xl">Examples</h2>{lesson.examples.map((e) => <Box key={e.text} tone="bg-softteal" label="✍ Example"><mark className="rounded bg-yellow-200 px-1 text-slate-900">{e.text}</mark> {e.note}</Box>)}
        {lesson.compare.map((c) => <div key={c.wrong} className="callout"><p className="text-err">✘ Incorrect: {c.wrong}</p><p className="text-ok">✔ Correct: {c.right}</p><p>{c.why}</p></div>)}</section>
      <section id="Mistakes"><Box tone="bg-errbg" label="⚠ Common mistakes and exceptions"><ul className="list-disc pl-6">{lesson.mistakes.map((m) => <li key={m}>{m}</li>)}</ul></Box></section>
      <section id="Practice"><h2 className="mt-6 text-xl">Practice</h2>
        {lesson.exercises.map((ex, i) => { const r = res[ex.id]; return (<div className="card my-3" key={ex.id}>
          <p className="text-sm text-mute">Question {i + 1} of {lesson.exercises.length}</p><p className="mt-1 font-medium" id={"q" + ex.id}>{ex.prompt}</p>
          {ex.type === "mcq" ? <div role="radiogroup" aria-labelledby={"q" + ex.id} className="my-3 grid gap-2">{ex.options!.map((o) => <button key={o} role="radio" aria-checked={ans[ex.id] === o} onClick={() => setAns({ ...ans, [ex.id]: o })} className={"btn2 justify-start " + (ans[ex.id] === o ? "!border-brand !bg-softind" : "")}>{o}</button>)}</div>
            : <label className="block">Your answer<input className="mt-1 min-h-[44px] w-full rounded-xl border border-line bg-card px-3" value={ans[ex.id] ?? ""} onChange={(e) => setAns({ ...ans, [ex.id]: e.target.value })} /></label>}
          <div className="mt-3 flex flex-wrap gap-2"><button className="btn" onClick={() => check(ex.id)}>{r === undefined ? "Check Answer" : "Try Again"}</button><button className="btn2" onClick={() => setHint({ ...hint, [ex.id]: true })}>Hint</button></div>
          {hint[ex.id] && <Box tone="bg-warnbg" label="💡 Hint">{ex.hint}</Box>}
          {r !== undefined && <div role="status" className={"callout " + (r ? "bg-okbg" : "bg-errbg")}><p className={r ? "text-ok font-bold" : "text-err font-bold"}>{r ? "✔ Correct" : "✘ Not yet"}</p><p>Your answer: {ans[ex.id] || "(none)"}</p>{!r && <p>Correct answer: {ex.answers.join(" / ")}</p>}<p>Why: {ex.explanation}</p></div>}</div>); })}
        <p role="status" className="font-bold">Score: {s.correct}/{s.total} correct · {s.incorrect} incorrect · {s.unanswered} unanswered ({s.percent}%)</p>
        <p className="mt-2">Independent tasks (self-check, not graded): {lesson.tasks.join(" ")}</p></section>
      <section id="Story"><Box tone="bg-softind" label={"📖 Story: " + lesson.story.title}>{lesson.story.text}</Box></section>
      <section id="Summary" className="card"><h2 className="text-xl">Summary</h2><p>{lesson.summary}</p><button className="btn mt-3" onClick={() => { const n = load(); n.completed[lesson.slug] = { percent: s.percent, at: Date.now() }; upd(n); }}>Mark complete</button>{p.completed[lesson.slug] && <p role="status" className="mt-2 text-ok">✔ Completed ({p.completed[lesson.slug].percent}%), saved in this browser.</p>}</section>
      <div className="mt-6 flex justify-between gap-2">{prev ? <Link className="btn2" to={`/lesson/${prev.slug}`}>← Previous</Link> : <span />}{next ? <Link className="btn" to={`/lesson/${next.slug}`}>Next lesson →</Link> : <Link className="btn2" to="/learn">All lessons</Link>}</div>
    </article></div>);
}
