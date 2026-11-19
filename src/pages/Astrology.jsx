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
import { getLocalizedAstrologyCategory } from '../lib/astrologyTranslations';
import { useLanguage } from '../contexts/LanguageContext';

export const ASTROLOGY_CATEGORIES = [
  {
    id: 'generic',
    title: 'Generic Consultation',
    image:"/Founder-Page/rituals-tradition-image.jpeg",
    shortDesc: 'Complete life overview and future predictions.',
    price: '₹501',
  },
  {
    id: 'health',
    title: 'Health & Wellness',
    image:"/Founder-Page/wisdom-guidance-image.jpeg",
    shortDesc: 'Insights into physical and mental well-being.',
    price: '₹701',
  },
  {
    id: 'career',
    title: 'Career & Business',
    image:"/Founder-Page/rituals-tradition-image.jpeg",
    shortDesc: 'Guidance for professional growth and success.',
    price: '₹801',
  },
  {
    id: 'love',
    title: 'Love & Relationships',
    image:'/images/Udaka Shanti Puja.jpg',
    shortDesc: 'Advice for harmony in personal life.',
    price: '₹601',
  },
  {
    id: 'marriage',
    title: 'Marriage & Compatibility',
    image:'/images/Krishna Janmashtami Puja.jpg',
    shortDesc: 'Matchmaking and marital bliss rituals.',
    price: '₹1,101',
  },
  {
    id: 'education',
    title: 'Education & Learning',
    image:'/images/Dhanteras Puja.jpg',
    shortDesc: 'Path to academic excellence and focus.',
    price: '₹501',
  },
  {
    id: 'wealth',
    title: 'Wealth & Finance',
    image:'/images/Sundarkand Path.jpg',
    shortDesc: 'Financial stability and investment guidance.',
    price: '₹901',
  },
  {
    id: 'property',
    title: 'Property & Home',
    image:"/Founder-Page/rituals-tradition-image.jpeg",
    shortDesc: 'Vastu and property purchase timings.',
    price: '₹801',
  },
  {
    id: 'child',
    title: 'Child & Progeny',
    image:"/Founder-Page/wisdom-guidance-image.jpeg",
    shortDesc: "Guidance for parenthood and children's future.",
    price: '₹1,201',
  },
  {
    id: 'others',
    title: 'Specific Queries',
    image:"/Founder-Page/rituals-tradition-image.jpeg",
    shortDesc: 'Answers to any other specific life questions.',
    price: '₹501',
  },
];

function Wallet({ className }) {
  return <Badge className={className}>₹</Badge>;
}
export default function Astrology() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex min-h-[calc(100svh-5rem)] w-full items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={astrologyHero} alt="Astrology" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="page-container relative z-10 flex flex-col justify-center py-12 text-white sm:py-16">
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
              variant="outline"
              className="border border-white/30 bg-transparent px-8 text-lg text-white shadow-lg backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() =>
                document
                  .getElementById('consultation-categories')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            >
              Explore Sessions
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Categories Section */}
      <section id="consultation-categories" className="page-container scroll-mt-20 py-20">
        <SectionHeader
          title="Consultation Categories"
          subtitle="Seek Guidance for Every Aspect of Life"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ASTROLOGY_CATEGORIES.map((cat) => {
            const localizedCategory = getLocalizedAstrologyCategory(cat, language);

            return (
              <Link key={cat.id} to={`/astrology/${cat.id}`} className="block h-full">
                <Card className="group flex h-full flex-col overflow-hidden border-stone-200 bg-gradient-to-b from-[#f8d696] via-[#fae2b7] to-[#fcf2d8] text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={cat.image}
                      alt={localizedCategory.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-xl font-display font-bold transition-colors group-hover:text-primary">
                      {localizedCategory.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-4 pt-0">
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                      {localizedCategory.shortDesc}
                    </p>
                    <p className="font-bold text-secondary text-sm">Starts at {cat.price}</p>
                  </CardContent>
                  <div className="mt-auto p-4 pt-0">
                    <div className="inline-flex min-h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white">
                      View Details
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-stone-100 pattern-mandala border-y border-stone-200 overflow-hidden">
        <div className="page-container relative z-10 text-center">
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
