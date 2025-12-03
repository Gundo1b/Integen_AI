import Hero from './components/Hero';
import Features from './components/Features';
import Advantages from './components/Advantages';
import Audience from './components/Audience';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      <Features />
      <Advantages />
      <Audience />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
