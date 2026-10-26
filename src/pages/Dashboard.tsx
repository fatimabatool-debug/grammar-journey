import { Link } from "react-router-dom";
import { load, isDue } from "../lib/progress";
import { lessons } from "../content/lessons";
export default function Dashboard() {
  const p = load(); const done = Object.keys(p.completed); const next = lessons.find((l) => !done.includes(l.slug));
  const acc = p.attempts.total ? Math.round((p.attempts.correct / p.attempts.total) * 100) + "%" : "—";
  return (<div className="space-y-4"><h1 className="text-3xl">Dashboard</h1><p className="text-mute">Saved only in this browser (localStorage).</p>
    <div className="card bg-softind">{next ? <><h2 className="text-xl">Continue Learning</h2><Link className="btn mt-3" to={`/lesson/${next.slug}`}>Open {next.slug.replace(/-/g, " ")}</Link></> : <h2 className="text-xl">All written lessons completed.</h2>}</div>
    <div className="grid gap-4 sm:grid-cols-3"><div className="card"><p className="text-mute">Completed</p><p className="text-2xl font-bold">{done.length}/{lessons.length}</p></div><div className="card"><p className="text-mute">Practice accuracy</p><p className="text-2xl font-bold">{acc}</p></div><div className="card"><p className="text-mute">Saved lessons</p><p className="text-2xl font-bold">{p.saved.length}</p></div></div>
    <section className="card"><h2 className="text-xl">Mistake notebook and revision</h2>{p.mistakes.length === 0 ? <p>No mistakes yet. Open a lesson and try the practice questions.</p> : <ul className="mt-2 space-y-2">{p.mistakes.map((m) => <li key={m.exerciseId}>{m.prompt} You wrote “{m.given}”; answer: {m.answer}. {isDue(m) && <b>Revision due. </b>}<Link className="text-link underline" to={`/lesson/${m.lessonSlug}`}>Review lesson</Link></li>)}</ul>}<p className="mt-2 text-sm text-mute">Revision rule: a missed question is due 1 day later.</p></section></div>);
}
