import { Palette, GraduationCap, Code, Rocket, Building2 } from 'lucide-react';

const audiences = [
  {
    icon: Palette,
    title: 'Creators & Designers',
    description: 'Unified visual and narrative creation for stunning results',
  },
  {
    icon: GraduationCap,
    title: 'Students & Learners',
    description: 'AI-aided learning and experimentation for faster growth',
  },
  {
    icon: Code,
    title: 'Developers & Engineers',
    description: 'Fast, intelligent code assistance for efficient development',
  },
  {
    icon: Rocket,
    title: 'Startups & Small Teams',
    description: 'Affordable, end-to-end creative power for growing businesses',
  },
  {
    icon: Building2,
    title: 'Businesses',
    description: 'Integrated AI collaboration and automation at scale',
  },
];

export default function Audience() {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Built for Everyone
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Whether you're a solo creator or an enterprise team, Integen AI scales with your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="inline-flex p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{audience.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{audience.description}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-violet-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-violet-500/5 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
