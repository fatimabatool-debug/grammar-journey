import { useState, useEffect } from "react";
import { NavLink, Link, Route, Routes, useLocation } from "react-router-dom";
import { BookOpen, Home as HomeI, Library, MessageCircle, LayoutDashboard, Menu, Moon, Sun, X } from "lucide-react";
import { initTheme, setTheme } from "./lib/theme";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import LessonPage from "./pages/Lesson";
import Stories from "./pages/Stories";
import Practice from "./pages/Practice";
import Dashboard from "./pages/Dashboard";

const nav = [["/", "Home", HomeI], ["/dashboard", "Dashboard", LayoutDashboard], ["/learn", "Learn", BookOpen], ["/stories", "Stories", Library], ["/practice", "Practice", MessageCircle]] as const;
export default function App() {
  const [dark, setDark] = useState(false); const [open, setOpen] = useState(false); const loc = useLocation();
  useEffect(() => setDark(initTheme()), []);
  useEffect(() => setOpen(false), [loc.pathname]);
  const side = (
    <nav aria-label="Main" className="flex flex-col gap-1 p-4">
      <Link to="/" className="mb-6 text-xl font-bold text-white">Grammar Journey</Link>
      {nav.map(([to, label, Icon]) => <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => "flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-slate-100 " + (isActive ? "bg-brand text-white" : "hover:bg-white/10")}><Icon size={18} aria-hidden />{label}</NavLink>)}
    </nav>);
  return (<div className="min-h-screen lg:flex">
    <aside className="hidden w-60 shrink-0 bg-navy lg:block">{side}</aside>
    {open && <div className="fixed inset-0 z-40 lg:hidden"><div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} /><aside className="relative h-full w-64 bg-navy">{side}</aside></div>}
    <div className="min-w-0 flex-1">
      <header className="flex items-center gap-3 border-b border-line bg-card p-3">
        <button className="btn2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
        <Link to="/learn" className="btn ml-auto hidden sm:inline-flex">Start Learning</Link>
        <button className="btn2 ml-auto sm:ml-0" aria-pressed={dark} aria-label="Toggle dark mode" onClick={() => { setTheme(!dark); setDark(!dark); }}>{dark ? <Sun size={18} /> : <Moon size={18} />}{dark ? "Light" : "Dark"}</button>
      </header>
      <main className="mx-auto max-w-5xl overflow-x-hidden p-4 sm:p-8">
        <Routes><Route path="/" element={<Home />} /><Route path="/learn" element={<Curriculum />} /><Route path="/lesson/:slug" element={<LessonPage />} /><Route path="/stories" element={<Stories />} /><Route path="/practice" element={<Practice />} /><Route path="/dashboard" element={<Dashboard />} /><Route path="*" element={<p>Page not found. <Link className="text-link underline" to="/">Go home</Link></p>} /></Routes>
      </main></div></div>);
}
