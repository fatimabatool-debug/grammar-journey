import { Link } from "react-router-dom";
import { useState } from "react";
import { topics } from "../content/curriculum";
import { lessons } from "../content/lessons";
export default function Curriculum() {
  const [q, setQ] = useState(""); const [lv, setLv] = useState("All");
  const shown = topics.filter((t) => (lv === "All" || t.level === lv) && t.title.toLowerCase().includes(q.toLowerCase()));
  return (<div className="space-y-4"><h1 className="text-3xl">Curriculum</h1>
    <div className="flex flex-wrap gap-3"><label className="block">Search topics<input className="mt-1 block min-h-[44px] w-64 rounded-xl border border-line bg-card px-3" value={q} onChange={(e) => setQ(e.target.value)} /></label>
      <label className="block">Level<select className="mt-1 block min-h-[44px] rounded-xl border border-line bg-card px-3" value={lv} onChange={(e) => setLv(e.target.value)}>{["All", "Beginner", "Intermediate", "Advanced"].map((x) => <option key={x}>{x}</option>)}</select></label></div>
    {shown.length === 0 && <p className="card">No topics match. Clear the search to see all topics.</p>}
    <ul className="space-y-2">{shown.map((t) => <li key={t.slug} className="card flex flex-wrap items-center justify-between gap-2"><span>{t.title} <span className="badge">{t.level}</span></span>{lessons.some((l) => l.slug === t.slug) ? <Link className="btn" to={`/lesson/${t.slug}`}>Open lesson</Link> : <span className="text-mute">Coming soon</span>}</li>)}</ul></div>);
}
