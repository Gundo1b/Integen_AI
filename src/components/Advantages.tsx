import { Zap, Award, Smile, DollarSign, TrendingUp, Shield } from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: 'Speed',
    description: 'Unified access removes tool switching lag',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Ensemble routing to best-performing models',
  },
  {
    icon: Smile,
    title: 'Ease',
    description: 'Single account and consistent UX across all tasks',
  },
  {
    icon: DollarSign,
    title: 'Cost',
    description: 'Replace multiple subscriptions with one smart plan',
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Works for solo creators and enterprise teams',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Privacy-first data handling and encryption',
  },
];

export default function Advantages() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Why Choose Integen AI
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Built for speed, quality, and simplicity. Everything you need, nothing you don't.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{advantage.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
