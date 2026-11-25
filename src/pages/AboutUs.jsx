import { useLanguage } from '../contexts/LanguageContext';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ABOUT_US_TRANSLATIONS } from '../lib/aboutUsTranslations';
import aboutHero from '../assets/generated_images/vedic_astrology_celestial_map.png';
import { cn } from '../lib/utils';
import {
  Sparkles,
  Target,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Compass,
  Quote,
} from 'lucide-react';

const SECTION_ICONS = {
  about: Sparkles,
  objective: Target,
  vision: Eye,
  philosophy: HeartHandshake,
  culture: ShieldCheck,
  commitment: Compass,
  message: Quote,
};

export default function AboutUs() {
  const { language } = useLanguage();
  const content = ABOUT_US_TRANSLATIONS[language] || ABOUT_US_TRANSLATIONS.en;

  const scrollToContent = () => {
    document
      .getElementById('about-content')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* 1. Hero Section (Identical canonical layout as Astrology and Home pages) */}
      <div className="relative flex min-h-[calc(100svh-5rem)] w-full items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHero}
            alt="Smart Puja Path"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="page-container relative z-10 flex flex-col justify-center py-12 text-white sm:py-16">
          <div className="max-w-2xl space-y-6">
            <Badge className="bg-primary/20 text-primary-foreground border-primary/40 px-3 py-1 text-sm font-medium">
              {content.hero.badge}
            </Badge>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              {content.hero.title}
            </h1>

            <p className="text-xl text-stone-200 font-light leading-relaxed">
              {content.hero.subtitle}
            </p>

            <div className="pt-2">
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContent}
                className="border border-white/30 bg-transparent px-8 text-lg text-white shadow-lg backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
              >
                {content.hero.cta} &darr;
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>

      {/* 2. Structured Content Sections (Warm light Bhagwa & Sandalwood card styling) */}
      <main id="about-content" className="flex-1 py-16 sm:py-24 space-y-16 sm:space-y-24 scroll-mt-20">
        <div className="page-container space-y-16 sm:space-y-20">
          {/* Section 01: About Us / हमारा परिचय */}
          {(() => {
            const sec = content.sections[0];
            return (
              <article className="relative rounded-3xl border border-orange-300/70 bg-gradient-to-br from-orange-100/70 via-amber-100/40 to-orange-50/60 p-8 sm:p-12 lg:p-16 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="max-w-4xl space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-sm shadow-orange-400/20">
                      {sec.number}
                    </span>
                    <span className="text-xs uppercase tracking-widest font-semibold text-primary">
                      {sec.subtitle}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
                    {sec.title}
                  </h2>

                  <div className="space-y-4 text-base sm:text-lg text-stone-800 leading-relaxed font-light">
                    {sec.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })()}

          {/* Sections 02 & 03: Our Objective & Our Vision (2-Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {[content.sections[1], content.sections[2]].map((sec) => {
              const Icon = SECTION_ICONS[sec.id];
              const isObj = sec.id === 'objective';
              return (
                <article
                  key={sec.id}
                  className={cn(
                    'rounded-3xl border p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-orange-300/90 transition-all duration-300',
                    isObj
                      ? 'border-orange-200/90 bg-gradient-to-br from-orange-50/70 via-amber-50/25 to-white'
                      : 'border-amber-200/90 bg-gradient-to-br from-amber-50/70 via-orange-50/25 to-white'
                  )}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary font-bold text-sm">
                        {sec.number}
                      </span>
                      {Icon && <Icon className="w-5 h-5 text-primary/80" />}
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-wider font-semibold text-primary/80">
                        {sec.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                        {sec.title}
                      </h3>
                    </div>

                    <div className="space-y-3.5 text-stone-600 leading-relaxed text-sm sm:text-base">
                      {sec.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Section 04: Our Philosophy / हमारी सोच (Warm Light Bhagwa Palette) */}
          {(() => {
            const sec = content.sections[3];
            return (
              <article className="rounded-3xl border border-orange-300/80 bg-gradient-to-br from-orange-100/90 via-amber-100/50 to-orange-100/40 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative z-10 max-w-4xl space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-sm shadow-orange-500/20">
                      {sec.number}
                    </span>
                    <span className="text-xs uppercase tracking-widest font-semibold text-primary">
                      {sec.subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
                    {sec.title}
                  </h3>

                  <div className="space-y-4 text-base sm:text-lg text-stone-800 leading-relaxed font-light">
                    {sec.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })()}

          {/* Sections 05 & 06: Preserving Sanatan Culture & Our Commitment (2-Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {[content.sections[4], content.sections[5]].map((sec) => {
              const Icon = SECTION_ICONS[sec.id];
              const isCulture = sec.id === 'culture';
              return (
                <article
                  key={sec.id}
                  className={cn(
                    'rounded-3xl border p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-orange-300/90 transition-all duration-300',
                    isCulture
                      ? 'border-orange-200/90 bg-gradient-to-br from-orange-50/65 via-stone-50/40 to-white'
                      : 'border-amber-200/90 bg-gradient-to-br from-amber-50/65 via-stone-50/40 to-white'
                  )}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary font-bold text-sm">
                        {sec.number}
                      </span>
                      {Icon && <Icon className="w-5 h-5 text-primary/80" />}
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-wider font-semibold text-primary/80">
                        {sec.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                        {sec.title}
                      </h3>
                    </div>

                    <div className="space-y-3.5 text-stone-600 leading-relaxed text-sm sm:text-base">
                      {sec.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Section 07: Our Message / हमारा संदेश */}
          {(() => {
            const sec = content.sections[6];
            return (
              <article className="rounded-3xl border-2 border-orange-300/90 bg-gradient-to-br from-orange-100/80 via-amber-50/80 to-orange-50/60 p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xs shadow-sm shadow-orange-300">
                    {sec.number}
                  </span>
                  <span className="text-xs uppercase tracking-widest font-semibold text-primary">
                    {sec.subtitle}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
                  {sec.title}
                </h3>

                <div className="max-w-3xl mx-auto space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
                  {sec.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            );
          })()}
        </div>
      </main>

      <Footer />
    </div>
  );
}
