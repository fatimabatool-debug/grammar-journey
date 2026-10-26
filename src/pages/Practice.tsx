import { useState } from "react";
import { scenarios } from "../content/scripts";
export default function Practice() {
  const [sid, setSid] = useState(scenarios[0].id); const [i, setI] = useState(0); const [log, setLog] = useState<{ me: string; fb?: { fix?: string; why: string; ok: boolean } }[]>([]);
  const sc = scenarios.find((s) => s.id === sid)!; const step = sc.steps[i];
  const reset = (id: string) => { setSid(id); setI(0); setLog([]); };
  return (<div className="space-y-4"><h1 className="text-3xl">Scripted Grammar Practice</h1><p className="callout bg-warnbg font-bold">Scripted practice — not live AI. Replies and feedback are pre-written.</p>
    <label className="block">Scenario<select className="mt-1 block min-h-[44px] rounded-xl border border-line bg-card px-3" value={sid} onChange={(e) => reset(e.target.value)}>{scenarios.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}</select></label>
    <div className="card space-y-3" aria-live="polite">{sc.steps.slice(0, i + 1).map((st, k) => <div key={k}><p className="max-w-md rounded-2xl bg-softteal p-3"><b>Guide:</b> {st.guide}</p>{log[k] && <><p className="ml-auto mt-2 max-w-md rounded-2xl bg-softind p-3"><b>You:</b> {log[k].me}</p><div className="callout bg-card"><p className={log[k].fb!.ok ? "font-bold text-ok" : "font-bold text-err"}>{log[k].fb!.ok ? "✔ Correct" : "✘ Correction"}</p>{!log[k].fb!.ok && <p>Original: {log[k].me} → Correction: {log[k].fb!.fix}</p>}<p>Why: {log[k].fb!.why}</p></div></>}</div>)}
      {log.length === i && step && <div><p className="text-mute">Choose a reply:</p><div className="flex flex-wrap gap-2">{step.replies.map((r) => <button key={r.text} className="btn2" onClick={() => setLog([...log, { me: r.text, fb: r }])}>{r.text}</button>)}</div></div>}
      {log.length === i + 1 && (i + 1 < sc.steps.length ? <button className="btn" onClick={() => setI(i + 1)}>Next</button> : <div><p role="status">Scenario finished.</p><button className="btn2" onClick={() => reset(sid)}>Restart</button></div>)}</div></div>);
}
