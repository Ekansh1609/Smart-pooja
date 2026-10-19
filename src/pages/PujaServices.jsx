import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SectionHeader } from '../components/ui/section-header';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card';
import { Search, Clock, Info } from 'lucide-react';
import { useState, useMemo } from 'react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { PUJAS_DATA, getLocalizedPujasData } from '../lib/pujaData';
import { useLanguage } from '../contexts/LanguageContext';
import { PUJA_CATEGORY_LABELS_HI } from '../lib/pujaDataTranslations';

export default function PujaServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { language } = useLanguage();

  const localizedPujasData = useMemo(() => getLocalizedPujasData(language), [language]);
  const categories = [
    { value: null, label: language === 'hi' ? 'सभी' : 'All' },
    ...Array.from(new Set(PUJAS_DATA.map((puja) => puja.category))).map((category) => ({
      value: category,
      label: language === 'hi' ? (PUJA_CATEGORY_LABELS_HI[category] ?? category) : category,
    })),
  ];

  const filteredPujas = useMemo(() => {
    const matchingPujaIds =
      selectedCategory === null
        ? null
        : new Set(
            PUJAS_DATA.filter((puja) => puja.category === selectedCategory).map((puja) => puja.id)
          );

    return localizedPujasData.filter((puja) => {
      const matchesSearch = puja.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = matchingPujaIds === null || matchingPujaIds.has(puja.id);
      return matchesSearch && matchesCategory;
    });
  }, [localizedPujasData, searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <SectionHeader title="Our Puja Services" subtitle="Divine Rituals for Every Occasion" />

        {/* Search and Filter Section */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="relative max-w-md mx-auto w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search pujas by name..."
              className="pl-10 h-12 bg-white shadow-sm border-stone-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.value ?? 'all'}
                onClick={() => setSelectedCategory(category.value)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all border',
                  selectedCategory === category.value
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : 'bg-white text-muted-foreground border-stone-200 hover:border-primary/50 hover:text-primary'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-500">
          {filteredPujas.map((puja) => (
            <Card
              key={puja.id}
              className="group overflow-hidden border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={puja.image}
                  alt={puja.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-3 right-3 bg-secondary text-white border-none">
                  {puja.category}
                </Badge>
              </div>
              <CardHeader className="p-4 pb-2">
                <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
                  {puja.name}
                </h3>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{puja.shortDesc}</p>
                <div className="flex items-center justify-between text-sm font-semibold mt-auto">
                  <div className="flex items-center gap-1 text-primary">
                    <Clock className="w-4 h-4" />
                    {puja.duration}
                  </div>
                  <div className="text-secondary">{puja.price}</div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 mt-auto">
                <Link to={`/poojas/${puja.id}`} className="w-full">
                  <Button
                    className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white border-primary/20"
                    variant="outline"
                  >
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredPujas.length === 0 && (
          <div className="text-center py-20">
            <Info className="mx-auto h-12 w-12 text-muted-foreground opacity-20 mb-4" />
            <p className="text-lg text-muted-foreground">No pujas found matching your criteria.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
