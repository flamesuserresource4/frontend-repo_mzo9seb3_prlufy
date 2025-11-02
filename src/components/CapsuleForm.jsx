import { useMemo, useState } from "react";
import { Calendar, Clock, Lock, Mail, PlusCircle, Trash2 } from "lucide-react";

function formatRemaining(ms) {
  if (ms <= 0) return "Ready to open";
  const sec = Math.floor(ms / 1000);
  const d = Math.floor(sec / 86400);
  const h = Math.floor((sec % 86400) / 3600);
  const m = Math.floor((sec % 3600) / 60);
  return `${d}d ${h}h ${m}m`;
}

export default function CapsuleForm() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capsules, setCapsules] = useState([]);
  const [error, setError] = useState("");

  const combinedDate = useMemo(() => {
    if (!date || !time) return null;
    const [y, m, d] = date.split("-").map(Number);
    const [hh, mm] = time.split(":").map(Number);
    return new Date(y, m - 1, d, hh, mm);
  }, [date, time]);

  function handleAdd() {
    setError("");
    if (!title.trim()) return setError("Please add a title.");
    if (!message.trim()) return setError("Please add a message.");
    if (!combinedDate) return setError("Pick a date and time.");

    const now = new Date();
    if (combinedDate.getTime() <= now.getTime()) {
      return setError("Unlock time must be in the future.");
    }

    const c = {
      id: crypto.randomUUID(),
      title: title.trim(),
      message: message.trim(),
      email: email.trim(),
      unlockAt: combinedDate.toISOString(),
      createdAt: now.toISOString(),
    };

    setCapsules((prev) => [c, ...prev]);
    setTitle("");
    setMessage("");
    setEmail("");
    setDate("");
    setTime("");
  }

  function remove(id) {
    setCapsules((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <section id="schedule" className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <Lock className="h-5 w-5 text-indigo-600" /> Plan a Capsule
          </div>
          <p className="mt-1 text-sm text-slate-600">Write your note, choose a future date, and we’ll keep it sealed until then.</p>

          {error && (
            <div className="mt-4 rounded-md bg-red-50 text-red-700 text-sm px-3 py-2 border border-red-200">
              {error}
            </div>
          )}

          <div className="mt-4 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm text-slate-600">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Graduation Letter for Future Me"
                className="w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-slate-600">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Write your thoughts, goals, or memories..."
                className="w-full resize-y rounded-md border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm text-slate-600 flex items-center gap-2"><Mail className="h-4 w-4" />Recipient (optional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-slate-600 flex items-center gap-2"><Calendar className="h-4 w-4" />Unlock date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm text-slate-600 flex items-center gap-2"><Clock className="h-4 w-4" />Unlock time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>
            <div>
              <button
                onClick={handleAdd}
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                <PlusCircle className="h-4 w-4" /> Add Capsule
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {capsules.length === 0 ? (
            <div className="rounded-xl border border-dashed border-black/10 p-8 text-center text-slate-500">
              Your scheduled capsules will appear here.
            </div>
          ) : (
            capsules.map((c) => {
              const unlockAt = new Date(c.unlockAt);
              const remaining = unlockAt.getTime() - Date.now();
              return (
                <div key={c.id} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-slate-900">{c.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">Unlocks on {unlockAt.toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => remove(c.id)}
                      className="text-slate-500 hover:text-red-600"
                      aria-label="Remove"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="mt-3 text-slate-700 text-sm leading-relaxed line-clamp-4">{c.message}</p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">
                      <Lock className="h-4 w-4 text-indigo-600" /> {formatRemaining(remaining)}
                    </span>
                    {c.email && (
                      <span className="text-slate-500">Recipient: {c.email}</span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
