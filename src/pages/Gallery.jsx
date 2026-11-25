import { useState, useMemo } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SectionHeader } from '../components/ui/section-header';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Camera, X, Maximize2 } from 'lucide-react';
import { cn } from '../lib/utils';

export const BENTO_ITEMS = [
  {
    id: 'bento-1',
    title: 'Lorem Ipsum Dolor',
    category: 'Featured Ceremony',
    image: '',
    span: 'md:col-span-2 md:row-span-2 h-[280px] md:h-auto',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'bento-2',
    title: 'Sit Amet Consectetur',
    category: 'Sacred Ritual',
    image: '',
    span: 'md:col-span-1 md:row-span-1 h-[220px] md:h-auto',
    desc: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 'bento-3',
    title: 'Adipiscing Elit Sed',
    category: 'Puja Samagri',
    image: '',
    span: 'md:col-span-1 md:row-span-1 h-[220px] md:h-auto',
    desc: 'Duis aute irure dolor in reprehenderit.',
  },
  {
    id: 'bento-4',
    title: 'Eiusmod Tempor Incididunt',
    category: 'Temple Tradition',
    image: '',
    span: 'md:col-span-2 md:row-span-1 h-[220px] md:h-auto',
    desc: 'Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 'bento-5',
    title: 'Magna Aliqua Ut Enim',
    category: 'Maha Aarti',
    image: '',
    span: 'md:col-span-4 md:row-span-1 h-[260px] md:h-auto',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
];

export const MASONRY_CATEGORIES = ['All', 'Havans', 'Griha Pravesh', 'Aarti & Deepam', 'Festivals'];

export const MASONRY_ITEMS = [
  {
    id: 'masonry-1',
    title: 'Lorem Ipsum Dolor',
    category: 'Havans',
    aspect: 'aspect-[3/4]',
    image: '',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'masonry-2',
    title: 'Consectetur Adipiscing',
    category: 'Griha Pravesh',
    aspect: 'aspect-square',
    image: '',
    desc: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 'masonry-3',
    title: 'Eiusmod Tempor',
    category: 'Aarti & Deepam',
    aspect: 'aspect-[4/5]',
    image: '',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation.',
  },
  {
    id: 'masonry-4',
    title: 'Labore Et Dolore',
    category: 'Havans',
    aspect: 'aspect-[16/10]',
    image: '',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate.',
  },
  {
    id: 'masonry-5',
    title: 'Magna Aliqua Ut',
    category: 'Festivals',
    aspect: 'aspect-[3/4]',
    image: '',
    desc: 'Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: 'masonry-6',
    title: 'Enim Ad Minim',
    category: 'Griha Pravesh',
    aspect: 'aspect-square',
    image: '',
    desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
  },
  {
    id: 'masonry-7',
    title: 'Veniam Quis Nostrud',
    category: 'Aarti & Deepam',
    aspect: 'aspect-[3/4]',
    image: '',
    desc: 'Neque porro quisquam est, qui dolorem ipsum quia dolor.',
  },
  {
    id: 'masonry-8',
    title: 'Ullamco Laboris Nisi',
    category: 'Havans',
    aspect: 'aspect-[16/9]',
    image: '',
    desc: 'Nam libero tempore, cum soluta nobis est eligendi optio.',
  },
  {
    id: 'masonry-9',
    title: 'Aliquip Ex Ea',
    category: 'Festivals',
    aspect: 'aspect-square',
    image: '',
    desc: 'At vero eos et accusamus et iusto odio dignissimos.',
  },
  {
    id: 'masonry-10',
    title: 'Commodo Consequat',
    category: 'Aarti & Deepam',
    aspect: 'aspect-[4/5]',
    image: '',
    desc: 'Temporibus autem quibusdam et aut officiis debitis.',
  },
  {
    id: 'masonry-11',
    title: 'Duis Aute Irure',
    category: 'Griha Pravesh',
    aspect: 'aspect-[16/10]',
    image: '',
    desc: 'Itaque earum rerum hic tenetur a sapiente delectus.',
  },
  {
    id: 'masonry-12',
    title: 'Dolor In Reprehenderit',
    category: 'Festivals',
    aspect: 'aspect-[3/4]',
    image: '',
    desc: 'Omnis voluptas assumenda est, omnis dolor repellendus.',
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filteredMasonry = useMemo(() => {
    if (selectedCategory === 'All') return MASONRY_ITEMS;
    return MASONRY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* 01. Asymmetric Bento Grid Section */}
      <section id="gallery-bento" className="page-container scroll-mt-20 py-12 sm:py-16 md:py-20">
        <SectionHeader
          title="Lorem Ipsum Bento Grid"
          subtitle="Featured Sacred Moments"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 md:auto-rows-[225px]">
          {BENTO_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className={cn(
                'group relative rounded-2xl overflow-hidden cursor-pointer border border-stone-200/70 shadow-sm hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-stone-100 to-stone-200/60',
                item.span
              )}
            >
              {/* Image or Placeholder */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-start pt-4 sm:pt-5 p-3 text-stone-400 bg-stone-100/90 group-hover:bg-stone-100 transition-colors">
                  <Camera className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.5] text-stone-300 group-hover:text-primary group-hover:scale-110 transition-all duration-300 mb-0.5" />
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">
                    Photo Placeholder
                  </span>
                </div>
              )}

              {/* Gradient Scrim & Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-4 sm:p-5 md:p-5 text-white transition-opacity duration-300">
                <div className="flex items-center justify-between mb-1">
                  <Badge className="bg-primary/90 text-primary-foreground text-xs px-2 py-0.5 font-medium border-none shadow-sm">
                    {item.category}
                  </Badge>
                  <Maximize2 className="w-4 h-4 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg md:text-xl xl:text-2xl drop-shadow-sm text-white">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-stone-300 line-clamp-1 mt-0.5 opacity-90">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 02. Staggered Masonry Grid Section */}
      <section id="gallery-masonry" className="py-20 bg-stone-100 pattern-mandala border-y border-stone-200 overflow-hidden">
        <div className="page-container relative z-10">
          <SectionHeader
            title="Lorem Ipsum Masonry Gallery"
            subtitle="Ceremony Archives & Sacred Photos"
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {MASONRY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm',
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-md scale-105'
                    : 'bg-white text-muted-foreground hover:bg-stone-50 hover:text-foreground border border-stone-200/80'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Staggered Multi-Column Masonry */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            {filteredMasonry.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-stone-50 to-stone-100"
              >
                {/* Photo / Placeholder */}
                <div className={cn('w-full relative overflow-hidden bg-stone-100 flex items-center justify-center', item.aspect)}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-2 p-6 text-stone-400">
                      <Camera className="w-10 h-10 stroke-[1.5] text-stone-400 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                      <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                        Image Placeholder
                      </span>
                      <span className="text-[10px] text-stone-400">{item.aspect.replace('aspect-', '').replace('[', '').replace(']', '')}</span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {item.category}
                      </span>
                      <Maximize2 className="w-4 h-4 text-white/80" />
                    </div>
                    <h4 className="font-display font-bold text-lg leading-snug">{item.title}</h4>
                    <p className="text-xs text-stone-300 line-clamp-1 mt-1">{item.desc}</p>
                  </div>
                </div>

                {/* Permanent Card Bottom Bar */}
                <div className="p-3.5 bg-white border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-foreground">{item.title}</h4>
                    <span className="text-xs text-muted-foreground">{item.category}</span>
                  </div>
                  <span className="text-xs text-primary font-medium group-hover:translate-x-0.5 transition-transform">
                    View &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Preview Modal */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 text-white rounded-2xl overflow-hidden shadow-2xl border border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Area */}
            <div className="relative aspect-[16/10] bg-stone-950 flex items-center justify-center overflow-hidden">
              {activeModalItem.image ? (
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-12 text-stone-500 text-center">
                  <Camera className="w-16 h-16 stroke-[1.2] mb-3 text-stone-400" />
                  <span className="text-sm uppercase tracking-wider font-semibold text-stone-400">
                    Image Placeholder
                  </span>
                  <p className="text-xs text-stone-500 mt-2">
                    Actual ceremony photo will appear here
                  </p>
                </div>
              )}
            </div>

            {/* Modal Caption */}
            <div className="p-6 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <Badge className="bg-primary/20 text-primary border-primary/30 text-xs px-2.5 py-0.5 mb-2">
                  {activeModalItem.category}
                </Badge>
                <h3 className="font-display font-bold text-2xl text-white">
                  {activeModalItem.title}
                </h3>
                <p className="text-sm text-stone-300 mt-1">{activeModalItem.desc}</p>
              </div>
              <Button
                variant="outline"
                className="border-stone-700 bg-stone-800 text-white hover:bg-primary hover:border-primary shrink-0 cursor-pointer"
                onClick={() => setActiveModalItem(null)}
              >
                Close Preview
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
