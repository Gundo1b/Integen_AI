import { Sparkles, ArrowRight, MessageSquare, Code2, Image, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const AnimatedWord = ({ word, colorClass }: { word: string; colorClass: string }) => {
  return (
    <span className={`${colorClass} transition-all duration-700 font-semibold`}>
      {word}
    </span>
  );
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const words = [
    { text: 'chat', color: 'text-cyan-400' },
    { text: 'code', color: 'text-blue-400' },
    { text: 'image', color: 'text-violet-400' },
    { text: 'video', color: 'text-purple-400' },
    { text: 'voice', color: 'text-pink-400' }
  ];

  const carouselItems = [
    {
      icon: MessageSquare,
      title: 'Chat Intelligence',
      description: 'Natural dialogue & idea generation',
      example: 'Ask me anything from creative writing prompts to complex problem-solving. I can help brainstorm ideas, draft content, or engage in meaningful conversations.',
      gradient: 'from-cyan-500/10 to-blue-500/10',
      border: 'border-cyan-500/20',
      hoverBorder: 'border-cyan-500/50',
      iconBg: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400'
    },
    {
      icon: Code2,
      title: 'Code Intelligence',
      description: 'Intelligent code assistance',
      example: 'Get help with debugging, refactoring, or writing new code. I understand multiple programming languages and can provide optimized solutions.',
      gradient: 'from-blue-500/10 to-violet-500/10',
      border: 'border-blue-500/20',
      hoverBorder: 'border-blue-500/50',
      iconBg: 'from-blue-500/20 to-violet-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: Image,
      title: 'Image Generation',
      description: 'Visual creation & refinement',
      example: 'Create stunning visuals from text descriptions. Refine existing images, generate art, or design graphics with AI-powered precision.',
      gradient: 'from-violet-500/10 to-purple-500/10',
      border: 'border-violet-500/20',
      hoverBorder: 'border-violet-500/50',
      iconBg: 'from-violet-500/20 to-purple-500/20',
      iconColor: 'text-violet-400'
    },
    {
      icon: Zap,
      title: 'Multimodal AI',
      description: 'Video, audio & more',
      example: 'Generate videos, create music, process audio, and combine multiple AI capabilities for comprehensive creative workflows.',
      gradient: 'from-purple-500/10 to-pink-500/10',
      border: 'border-purple-500/20',
      hoverBorder: 'border-purple-500/50',
      iconBg: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    }
  ];

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index: number) => {
    setCarouselIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change color every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-violet-500/10"></div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/40 border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse-glow" />
              <span className="text-2xl font-bold gradient-text text-shadow">
                Integen AI
              </span>
            </div>
            <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover-glow transition-all duration-300 floating-animation">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-300 text-sm font-medium">Early Access Now Available</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-in-left animation-delay-200" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                One Platform,
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Endless Creative Intelligence
              </span>
            </h1>
            <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 mx-auto my-4"></div>

            <p className="text-lg text-slate-300 mb-10 leading-relaxed animate-fade-in-up animation-delay-400">
              Unite{' '}
              <AnimatedWord word="chat" colorClass={currentIndex === 0 ? words[0].color : 'text-slate-300'} />
              ,{' '}
              <AnimatedWord word="code" colorClass={currentIndex === 1 ? words[1].color : 'text-slate-300'} />
              ,{' '}
              <AnimatedWord word="image" colorClass={currentIndex === 2 ? words[2].color : 'text-slate-300'} />
              ,{' '}
              <AnimatedWord word="video" colorClass={currentIndex === 3 ? words[3].color : 'text-slate-300'} />
              , and{' '}
              <AnimatedWord word="voice" colorClass={currentIndex === 4 ? words[4].color : 'text-slate-300'} />
              {' '}generation in one seamless workspace.
              Replace multiple subscriptions with one intelligent platform.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10 animate-fade-in-up animation-delay-600">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover-glow transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center floating-animation">
                Start Creating Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 glass-effect text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto hover-glow">
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-400 animate-fade-in-up animation-delay-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Instant access</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative group">
            <div className="relative overflow-hidden rounded-2xl">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                {carouselItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="w-full flex-shrink-0 p-6">
                      <div className={`group h-full glass-effect rounded-2xl hover-glow transition-all duration-300 transform hover:scale-105 animate-slide-in-right floating-animation`}>
                        <div className="flex flex-col h-full">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`p-3 bg-gradient-to-br ${item.iconBg} rounded-lg`}>
                              <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                              <p className="text-sm text-slate-400">{item.description}</p>
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-slate-300 leading-relaxed">{item.example}</p>
                          </div>
                          <div className="mt-4 pt-4 border-t border-white/10">
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                              <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                              <span>Powered by advanced AI</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === carouselIndex
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </div>
  );
}
