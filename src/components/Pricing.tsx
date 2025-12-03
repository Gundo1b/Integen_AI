import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Pro',
    price: 25,
    target: 'Creators, developers, startups',
    features: [
      'Chat Intelligence',
      'Code Intelligence (SLI)',
      'Image Generation',
      'Memory & Context',
      'Refinement Loops',
      'Priority Compute',
      'Ensemble Reasoning',
    ],
    highlighted: false,
  },
  {
    name: 'Ultra',
    price: 60,
    target: 'Teams, professionals, studios',
    features: [
      'Everything in Pro',
      'Advanced Ensemble Reasoning',
      '4K Visual Generation',
      'Collaboration Tools',
      'Priority Support',
      'Advanced Analytics',
      'Custom Workflows',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: null,
    target: 'Organizations & education',
    features: [
      'Everything in Ultra',
      'Private Hosting',
      'Team Management',
      'API & SDK Access',
      'Analytics Dashboard',
      'White Labelling',
      'RBAC & Compliance',
      'Multi-region Deployment',
      'Dedicated Support',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include core AI features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-gradient-to-b from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105'
                  : 'bg-white/5 border border-white/10 hover:border-cyan-500/30'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{tier.target}</p>
                <div className="flex items-baseline justify-center gap-2">
                  {tier.price ? (
                    <>
                      <span className="text-5xl font-bold text-white">${tier.price}</span>
                      <span className="text-slate-400">/month</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-white">Custom</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {tier.price ? 'Get Started' : 'Contact Sales'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400">
            All plans include access to the latest AI models and regular updates. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
