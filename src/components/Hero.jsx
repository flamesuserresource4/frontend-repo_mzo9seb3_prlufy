import Spline from "@splinetool/react-spline";
import { Shield, Clock, Send } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[520px] w-full">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/7xL0q4xE0RkUo9oC/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white" />
        <div className="relative z-10 h-full mx-auto max-w-6xl px-4 flex flex-col items-start justify-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 text-white px-3 py-1 text-xs font-medium shadow-sm">
            <Shield size={14} />
            End-to-end privacy by design
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Schedule your digital time capsules
          </h1>
          <p className="max-w-2xl text-slate-600">
            Write messages, attach memories, and set an unlock date. Your capsule stays perfectly sealed until it’s time.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              <Clock size={16} /> Start Scheduling
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-black/10 hover:bg-slate-50"
            >
              <Send size={16} /> Explore Features
            </a>
          </div>
        </div>
      </div>

      <div id="features" className="mx-auto max-w-6xl px-4 grid sm:grid-cols-3 gap-4 -mt-10 relative z-10">
        {[
          {
            title: "Seal & Protect",
            desc: "Your messages are locked until the date you choose.",
            icon: <Shield className="h-5 w-5" />,
          },
          {
            title: "Precise Timing",
            desc: "Pick an exact day and minute for the big reveal.",
            icon: <Clock className="h-5 w-5" />,
          },
          {
            title: "Share on Delivery",
            desc: "Notify recipients automatically when it opens.",
            icon: <Send className="h-5 w-5" />,
          },
        ].map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-black/5 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 text-indigo-600">{f.icon}<span className="font-medium">{f.title}</span></div>
            <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
