import { Sparkles, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Integen AI
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              One platform, endless creative intelligence for everyone. Unifying chat, code, image, video, and voice generation.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300">
                <Twitter className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300">
                <Github className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300">
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300">
                <Mail className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Roadmap</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2025 Integen AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
