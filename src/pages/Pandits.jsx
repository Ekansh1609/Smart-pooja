import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SectionHeader } from '../components/ui/section-header';
import { PANDITS, POOJAS } from '../lib/mockData';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { MapPin, Star, Calendar, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import panditImage from '../assets/generated_images/hindu_pandit_portrait.png';

export default function Pandits() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filteredPandits = PANDITS.filter((pandit) => {
    const matchesSearch =
      pandit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pandit.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === 'all' ||
      pandit.specialty.some((s) => s.toLowerCase().includes(selectedType.toLowerCase()));
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Find a Pandit"
            subtitle="Connect with Vedic Scholars"
            centered={false}
            className="mb-8"
          />

          {/* Search & Filter Bar */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-4 items-end md:items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Search by Name or Location
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="e.g. Sharma Ji, Varanasi"
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Pooja Type</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Ritual Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {POOJAS.map((p) => (
                      <SelectItem key={p.id} value={p.title}>
                        {p.title}
                      </SelectItem>
                    ))}
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="cremation">Antyesti</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button className="w-full bg-primary text-primary-foreground">
                  <Filter className="w-4 h-4 mr-2" /> Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPandits.map((pandit) => (
            <Card
              key={pandit.id}
              className="overflow-hidden hover:shadow-lg transition-shadow border-stone-200"
            >
              <div className="flex p-6 gap-6">
                <img
                  src={panditImage}
                  alt={pandit.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary/10 shrink-0"
                />
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold">{pandit.name}</h3>
                  <div className="flex items-center text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    {pandit.rating}{' '}
                    <span className="text-muted-foreground font-normal ml-1">
                      ({pandit.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 mr-1" /> {pandit.location}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {pandit.specialty.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs font-medium bg-secondary/10 text-secondary px-2.5 py-1 rounded-full border border-secondary/20"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-stone-600 line-clamp-2 mb-4">
                  Experienced Vedic scholar with over {pandit.experience} of practice. Fluent in{' '}
                  {pandit.languages.join(', ')}.
                </p>
              </div>

              <CardFooter className="bg-stone-50 px-6 py-4 flex gap-3">
                <Button className="flex-1 bg-primary hover:bg-primary/90">Book Now</Button>
                <Button variant="outline" className="px-3">
                  <Calendar className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}

          {filteredPandits.length === 0 && (
            <div className="col-span-full text-center py-20 text-muted-foreground">
              <div className="mb-4 mx-auto w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 opacity-50" />
              </div>
              <h3 className="text-xl font-bold mb-2">No Pandits Found</h3>
              <p>Try adjusting your search filters to find available pandits.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
