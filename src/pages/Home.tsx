import { Link } from "react-router-dom";
import { useState } from "react";
import { topics } from "../content/curriculum";
import { lessons } from "../content/lessons";
export default function Home() {
  const [pick, setPick] = useState(""); const ex = lessons[1].exercises[0];
  return (<div className="space-y-10">
    <section className="rounded-3xl bg-gradient-to-br from-softind to-softteal p-6 sm:p-10">
      <h1 className="max-w-xl text-4xl font-bold">Learn English Grammar, One Clear Step at a Time.</h1>
      <p className="mt-4 max-w-xl">Short lessons with examples, practice questions, stories and review. Your progress stays in this browser.</p>
      <div className="mt-6 flex flex-wrap gap-3"><Link className="btn" to="/learn">Start Learning</Link><Link className="btn2" to="/learn">Explore Lessons</Link></div>
      <svg className="mt-6 h-24" viewBox="0 0 320 90" role="img" aria-label="Path from Learn to Practise to Read to Review"><path d="M20 60 C90 10 150 90 300 30" stroke="#8B5CF6" strokeWidth="3" fill="none" strokeDasharray="6 6" />{["Learn", "Practise", "Read", "Review"].map((t, i) => <g key={t}><circle cx={20 + i * 93} cy={[60, 30, 62, 30][i]} r="9" fill="#4F46E5" /><text x={20 + i * 93} y={[82, 18, 86, 18][i]} fontSize="11" textAnchor="middle" fill="currentColor">{t}</text></g>)}</svg>
    </section>
    <section className="grid gap-4 sm:grid-cols-3">{(["Beginner", "Intermediate", "Advanced"] as const).map((l) => <Link key={l} to="/learn" className="card hover:border-brand"><h2 className="text-lg">{l}</h2><p className="text-mute">{topics.filter((t) => t.level === l).length} topics mapped, {topics.filter((t) => t.level === l && lessons.some((x) => x.slug === t.slug)).length} lessons written.</p></Link>)}</section>
    <section className="card"><h2 className="text-xl">Try a question</h2><p className="mt-2" id="q">{ex.prompt}</p>
      <div role="radiogroup" aria-labelledby="q" className="mt-3 flex flex-wrap gap-2">{ex.options!.map((o) => <button key={o} role="radio" aria-checked={pick === o} onClick={() => setPick(o)} className={"btn2 " + (pick === o ? "!border-brand !bg-softind" : "")}>{o}</button>)}</div>
      {pick && <p role="status" className={"callout " + (ex.answers.includes(pick) ? "bg-okbg text-ok" : "bg-errbg text-err")}>{ex.answers.includes(pick) ? "✔ Correct. " : "✘ Not quite. "}<span className="text-ink">{ex.explanation}</span></p>}</section>
  </div>);
}
