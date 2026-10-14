import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SectionHeader } from '../components/ui/section-header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Star,
  Compass,
  ShieldCheck,
  Zap,
  Users,
  Sparkles,
  Heart,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Home,
  MoreHorizontal,
} from 'lucide-react';
import astrologyHero from '../assets/generated_images/vedic_astrology_celestial_map.png';

export const ASTROLOGY_CATEGORIES = [
  {
    id: 'generic',
    title: 'Generic Consultation',
    image:
      'https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?q=80&w=400&auto=format&fit=crop',
    shortDesc: 'Complete life overview and future predictions.',
    price: '₹501',
  },
  {
    id: 'health',
    title: 'Health & Wellness',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop',
    shortDesc: 'Insights into physical and mental well-being.',
    price: '₹701',
  },
  {
    id: 'career',
    title: 'Career & Business',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop',
    shortDesc: 'Guidance for professional growth and success.',
    price: '₹801',
  },
  {
    id: 'love',
    title: 'Love & Relationships',
    image:
      'https://images.unsplash.com/photo-1518197146369-01159947588e?q=80&w=400&auto=format&fit=crop',
    shortDesc: 'Advice for harmony in personal life.',
    price: '₹601',
  },
  {
    id: 'marriage',
    title: 'Marriage & Compatibility',
    image:
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=400&auto=format&fit=crop',
    shortDesc: 'Matchmaking and marital bliss rituals.',
    price: '₹1,101',
  },
  {
    id: 'education',
    title: 'Education & Learning',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop',
    shortDesc: 'Path to academic excellence and focus.',
    price: '₹501',
  },
  {
    id: 'wealth',
    title: 'Wealth & Finance',
    image:
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=400&auto=format&fit=crop',
    shortDesc: 'Financial stability and investment guidance.',
    price: '₹901',
  },
  {
    id: 'property',
    title: 'Property & Home',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400&auto=format&fit=crop',
    shortDesc: 'Vastu and property purchase timings.',
    price: '₹801',
  },
  {
    id: 'child',
    title: 'Child & Progeny',
    image:
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=400&auto=format&fit=crop',
    shortDesc: "Guidance for parenthood and children's future.",
    price: '₹1,201',
  },
  {
    id: 'others',
    title: 'Specific Queries',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop',
    shortDesc: 'Answers to any other specific life questions.',
    price: '₹501',
  },
];

function Wallet({ className }) {
  return <Badge className={className}>₹</Badge>;
}
export default function Astrology() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={astrologyHero} alt="Astrology" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl space-y-6">
            <Badge className="bg-primary/20 text-primary-foreground border-primary/40 px-3 py-1 text-sm font-medium">
              Vedic Astrology Guidance
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold">
              Unveil Your Cosmic Destiny
            </h1>
            <p className="text-xl text-stone-200 font-light leading-relaxed">
              Connect with India's most experienced Vedic Astrologers to find clarity in career,
              health, relationships, and more.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 rounded-full shadow-lg"
            >
              Explore Sessions
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-20 container mx-auto px-4">
        <SectionHeader
          title="Consultation Categories"
          subtitle="Seek Guidance for Every Aspect of Life"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {ASTROLOGY_CATEGORIES.map((cat) => (
            <Link key={cat.id} to={`/astrology/${cat.id}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200 cursor-pointer text-center hover:-translate-y-1 overflow-hidden">
                <div className="h-32 overflow-hidden relative">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="font-display text-lg">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{cat.shortDesc}</p>
                  <p className="font-bold text-secondary text-sm">Starts at {cat.price}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-stone-100 pattern-mandala border-y border-stone-200 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <SectionHeader title="Why DivyaPooja Astrology?" subtitle="The Celestial Difference" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {[
              {
                icon: ShieldCheck,
                title: 'Verified Experts',
                desc: 'Our astrologers are vetted for their deep Vedic knowledge and accurate predictions.',
              },
              {
                icon: Compass,
                title: 'Holistic Approach',
                desc: "We don't just predict; we provide actionable remedies and rituals for your growth.",
              },
              {
                icon: Zap,
                title: 'Instant Access',
                desc: 'Book a slot and get your consultation call at your preferred time without delays.',
              },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md text-primary">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
