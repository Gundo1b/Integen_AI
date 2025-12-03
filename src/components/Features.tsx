import { MessageSquare, Code2, Image, Video, Mic } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Chat Intelligence',
    description: 'Natural dialogue, idea generation, and tutoring powered by leading AI models.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Code2,
    title: 'Code Intelligence (SLI)',
    description: 'Code creation, refactoring, and design with intelligent assistance.',
    gradient: 'from-blue-500 to-violet-500',
  },
  {
    icon: Image,
    title: 'Image & Design Tools',
    description: 'Visual generation and iterative refinement for stunning results.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Video,
    title: 'Video Generation',
    description: 'Motion design and storytelling automation coming in v2.0.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Mic,
    title: 'Voice & Audio',
    description: 'Speech synthesis and recognition for your projects in v2.0.',
    gradient: 'from-pink-500 to-cyan-500',
  },
];

export default function Features() {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Everything You Need in One Place
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Access the best AI models through natural language commands like /chat, /code, /image, /video, and /audio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${feature.gradient} rounded-xl mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-violet-500/10 transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 border border-cyan-500/20 rounded-2xl text-center">
          <p className="text-lg text-slate-300">
            <span className="font-semibold text-cyan-400">Adaptive Interface:</span> Consistent tone, style, and experience across all modes
          </p>
        </div>
      </div>
    </section>
  );
}
