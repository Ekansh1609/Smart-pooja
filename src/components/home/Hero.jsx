import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/generated_images/traditional_indian_pooja_ceremony_havan.png';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative flex min-h-[calc(100svh-5rem)] w-full items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Traditional Pooja Ceremony"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="page-container relative z-10 flex flex-col justify-center py-12 text-white sm:py-16">
        <div className="max-w-2xl space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-sm text-primary-foreground text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            India's #1 Trusted Pooja Service
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary/80 drop-shadow-sm">
            Bring Divine Blessings Home
          </h1>

          <p className="text-lg md:text-xl text-stone-200 font-light max-w-lg leading-relaxed">
            Book experienced Vedic Pandits for Poojas, Havans, and Ceremonies. perform rituals with
            authentic vidhi and devotion.
          </p>

          

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/pandits">
              <Button
                size="lg"
                className=" hidden bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-primary/25 transition-all"
              >
                Find a Pandit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white text-lg px-8 h-14 rounded-full backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() =>
                document
                  .getElementById('our-divine-services')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
