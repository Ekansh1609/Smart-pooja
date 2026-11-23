import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SectionHeader } from '../components/ui/section-header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ShieldCheck, Sparkles, Compass, Gem } from 'lucide-react';

// Background image placeholder - replace with actual image asset when ready
// Example: import ratanHero from '../assets/generated_images/ratan_hero.png';
const ratanHero = '';

export const RATAN_ITEMS = [
  {
    id: 'item-1',
    name: 'Lorem Ipsum Dolor',
    image: '',
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    price: 'Lorem Ipsum',
  },
  {
    id: 'item-2',
    name: 'Sit Amet Consectetur',
    image: '',
    shortDesc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 'Lorem Ipsum',
  },
  {
    id: 'item-3',
    name: 'Adipiscing Elit Sed',
    image: '',
    shortDesc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.',
    price: 'Lorem Ipsum',
  },
  {
    id: 'item-4',
    name: 'Eiusmod Tempor Incididunt',
    image: '',
    shortDesc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    price: 'Lorem Ipsum',
  },
  {
    id: 'item-5',
    name: 'Labore Et Dolore',
    image: '',
    shortDesc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    price: 'Lorem Ipsum',
  },
  {
    id: 'item-6',
    name: 'Magna Aliqua Ut',
    image: '',
    shortDesc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
    price: 'Lorem Ipsum',
  },
  {
    id: 'item-7',
    name: 'Enim Ad Minim',
    image: '',
    shortDesc: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    price: 'Lorem Ipsum',
  },
  {
    id: 'item-8',
    name: 'Veniam Quis Nostrud',
    image: '',
    shortDesc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
    price: 'Lorem Ipsum',
  },
  {
    id: 'item-9',
    name: 'Ullamco Laboris Nisi',
    image: '',
    shortDesc: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.',
    price: 'Lorem Ipsum',
  },
];

export const WHY_CHOOSE_RATAN = [
  {
    icon: ShieldCheck,
    title: 'Lorem Ipsum Dolor',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Sparkles,
    title: 'Consectetur Adipiscing',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    icon: Compass,
    title: 'Eiusmod Tempor',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

export default function Ratan() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex min-h-[calc(100svh-5rem)] w-full items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-stone-900">
          {ratanHero ? (
            <img
              src={ratanHero}
              alt="Lorem Ipsum"
              className="w-full h-full object-cover"
            />
          ) : (
            /* Fallback styled dark background placeholder until user adds actual image */
            <div className="w-full h-full bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/40" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="page-container relative z-10 flex flex-col justify-center py-12 text-white sm:py-16">
          <div className="max-w-2xl space-y-6">
            <Badge className="bg-primary/20 text-primary-foreground border-primary/40 px-3 py-1 text-sm font-medium">
              Lorem Ipsum Dolor
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold">
              Lorem Ipsum Dolor Sit Amet Consectetur
            </h1>
            <p className="text-xl text-stone-200 font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border border-white/30 bg-transparent px-8 text-lg text-white shadow-lg backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() =>
                document
                  .getElementById('gemstone-cards')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            >
              Explore More
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Ratan / Gemstone Cards Section */}
      <section id="gemstone-cards" className="page-container scroll-mt-20 py-20">
        <SectionHeader
          title="Lorem Ipsum Dolor"
          subtitle="Consectetur Adipiscing Elit Sed Do Eiusmod"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {RATAN_ITEMS.map((gem) => (
            <Card
              key={gem.id}
              className="group flex h-full flex-col overflow-hidden border-stone-200 bg-gradient-to-b from-[#FF9933] via-[#ffbd80] to-[#fbe9d8] text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100/60 flex items-center justify-center">
                {gem.image ? (
                  <img
                    src={gem.image}
                    alt={gem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 p-6 text-stone-400">
                    <Gem className="w-12 h-12 stroke-[1.5] text-stone-400/80 group-hover:scale-110 group-hover:text-primary transition-all duration-300" />
                    <span className="text-xs uppercase tracking-wider font-medium text-stone-500">
                      Image Placeholder
                    </span>
                  </div>
                )}
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xl font-display font-bold">{gem.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-4 pt-0">
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{gem.shortDesc}</p>
                <p className="font-bold text-secondary text-sm">{gem.price}</p>
              </CardContent>
              <div className="mt-auto p-4 pt-0">
                <div
                  role="button"
                  aria-disabled="true"
                  tabIndex={-1}
                  className="inline-flex min-h-9 w-full select-none items-center justify-center gap-2 whitespace-nowrap rounded-md border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground pointer-events-none cursor-default"
                >
                  View Details
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Informational Section */}
      <section className="py-20 bg-stone-100 pattern-mandala border-y border-stone-200 overflow-hidden">
        <div className="page-container relative z-10 text-center">
          <SectionHeader title="Lorem Ipsum Dolor?" subtitle="Consectetur Adipiscing Elit" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {WHY_CHOOSE_RATAN.map((item, i) => (
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
