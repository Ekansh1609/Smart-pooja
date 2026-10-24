import { ArrowDown, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import founderHero from '../assets/generated_images/Founder-hero-background-img.png';

export default function Founder() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={founderHero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        </div>
        <div className="page-container relative z-10 grid items-center gap-10 py-12 text-white sm:py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-14 lg:gap-20">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
              <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Meet Our Founder
            </p>
            <h2 className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Guided by Tradition, Dedicated to You.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-200 sm:text-xl">
              Add founder introduction here.
            </p>
            <a
              href="#founder-story"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent px-8 py-3 text-lg font-medium text-white shadow-lg backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Know His Story
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
          <img
            src="/Founder-Page/founder-hero.png"
            alt="Founder"
            className="mx-auto h-auto w-full max-w-md object-contain md:h-[min(70svh,calc(100svh-13rem))] md:w-auto md:max-w-full"
            style={{
              maskImage:
                'linear-gradient(to bottom, black 0%, black 58%, transparent 100%), linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskImage:
                'linear-gradient(to bottom, black 0%, black 58%, transparent 100%), linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 z-20 h-24 w-full bg-gradient-to-t from-background to-transparent" />
      </section>

      <section id="founder-story" className="page-container py-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <img
            src="/Founder-Page/journey-section-photo.jpeg"
            alt="Founder story"
            className="aspect-square w-full rounded-2xl border border-stone-200 object-contain shadow-sm"
          />
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              The Journey
            </p>
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              A Life of Faith and Service
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Add the founder&apos;s story and background here.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200/80 bg-stone-100/70 py-16 sm:py-20">
        <div className="page-container grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="grid overflow-hidden rounded-2xl border border-stone-200 bg-card shadow-sm sm:grid-cols-[0.9fr_1.1fr]">
            <img
              src="/Founder-Page/wisdom-guidance-image.jpeg"
              alt="Vedic wisdom and spiritual guidance"
              className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:min-h-64"
            />
            <div className="flex flex-col items-start p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Wisdom & Guidance
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug text-foreground">
                Clarity Through Vedic Wisdom
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                Add information about Vedic rituals and spiritual guidance here.
              </p>
              <Link
                to="/astrology"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md font-semibold text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Explore Vedic Guidance
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <article className="grid overflow-hidden rounded-2xl border border-stone-200 bg-card shadow-sm sm:grid-cols-[0.9fr_1.1fr]">
            <img
              src="/Founder-Page/rituals-tradition-image.jpeg"
              alt="Traditional pooja rituals"
              className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:min-h-64"
            />
            <div className="flex flex-col items-start p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Rituals & Tradition
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug text-foreground">
                Inspiring Through Tradition
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                Add information about the traditions and services offered here.
              </p>
              <Link
                to="/poojas"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md font-semibold text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Explore Pooja Services
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="page-container pt-12 pb-8">
        <figure className="mx-auto max-w-5xl rounded-2xl border border-primary/10 bg-card px-6 py-10 text-center shadow-sm sm:px-12 sm:py-14">
          <Quote aria-hidden="true" className="mx-auto h-8 w-8 text-primary/70" />
          <blockquote className="mt-5 font-serif text-xl italic leading-relaxed text-foreground sm:text-2xl">
            Add a founder quote here.
          </blockquote>
          <figcaption className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Founder
          </figcaption>
        </figure>
      </section>
      <Footer className="mt-0" />
    </div>
  );
}
