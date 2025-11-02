import { Calendar, Lock, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full bg-white/70 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 grid place-items-center text-white">
            <Lock size={18} />
          </div>
          <span className="font-semibold text-slate-800">Capsule</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#schedule" className="hover:text-slate-900 transition-colors">Schedule</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
          <Calendar size={16} />
          Plan a Capsule
        </button>
      </div>
    </header>
  );
}
