import { Mail, Github, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Shield className="h-4 w-4 text-indigo-600" /> Privacy-first digital capsules
        </div>
        <div className="flex items-center gap-4 text-slate-600">
          <a href="mailto:hello@capsule.app" className="inline-flex items-center gap-2 hover:text-slate-900 text-sm">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-slate-900 text-sm">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
