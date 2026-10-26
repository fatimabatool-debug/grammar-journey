import { useState } from "react";
import { stories } from "../content/stories";
export default function Stories() {
  const [open, setOpen] = useState<string | null>(null); const [hl, setHl] = useState(true); const [size, setSize] = useState(18); const [note, setNote] = useState(""); const [pick, setPick] = useState("");
  const s = stories.find((x) => x.slug === open);
  if (!s) return (<div className="space-y-4"><h1 className="text-3xl">Stories</h1><div className="grid gap-4 sm:grid-cols-2">{stories.map((x) => <div key={x.slug} className="card"><h2 className="text-xl">{x.title}</h2><p><span className="badge">{x.level}</span> {x.minutes} min read</p><p className="text-mute">Grammar: {x.tags.join(", ")}</p><button className="btn mt-3" onClick={() => { setOpen(x.slug); setNote(""); setPick(""); }}>Read Story</button></div>)}</div></div>);
  return (<div className="space-y-4"><button className="btn2" onClick={() => setOpen(null)}>← All stories</button><h1 className="text-3xl">{s.title}</h1>
    <div className="flex flex-wrap gap-2"><button className="btn2" aria-pressed={hl} onClick={() => setHl(!hl)}>Grammar highlights: {hl ? "on" : "off"}</button><button className="btn2" onClick={() => setSize(Math.max(16, size - 2))}>A−</button><button className="btn2" onClick={() => setSize(Math.min(26, size + 2))}>A+</button></div>
    <p className="card max-w-[70ch] leading-loose" style={{ fontSize: size }}>{s.parts.map((p, i) => typeof p === "string" ? p : hl ? <button key={i} className="rounded bg-yellow-200 px-1 font-medium text-slate-900 underline" onClick={() => setNote(p.note)}>{p.t}</button> : p.t)}</p>
    {note && <p role="status" className="callout bg-softind">💡 {note}</p>}
    <div className="card"><h2 className="text-lg">Reading check</h2><p id="rq">{s.q.q}</p><div role="radiogroup" aria-labelledby="rq" className="mt-2 flex flex-wrap gap-2">{s.q.options.map((o) => <button key={o} role="radio" aria-checked={pick === o} className={"btn2 " + (pick === o ? "!border-brand !bg-softind" : "")} onClick={() => setPick(o)}>{o}</button>)}</div>{pick && <p role="status" className={"callout " + (pick === s.q.answer ? "bg-okbg" : "bg-errbg")}>{pick === s.q.answer ? "✔ Correct. " : "✘ Not quite. "}{s.q.why}</p>}</div>
    <p className="callout bg-softteal">✍ Writing task (not graded): {s.task}</p></div>);
}
