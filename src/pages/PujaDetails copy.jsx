import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent } from '../components/ui/dialog';
import { useParams, Link } from 'react-router-dom';
import {
  Clock,
  MapPin,
  Calendar,
  User,
  Phone,
  Mail,
  ArrowLeft,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { PUJAS_DATA } from '../lib/pujaData';

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1604928146023-8a68da68f11f?w=400',
  'https://images.unsplash.com/photo-1609206402287-483875988a6d?w=400',
  'https://images.unsplash.com/photo-1567591414240-e1365e0ae902?w=400',
  'https://images.unsplash.com/photo-1582794543139-8ac92a900275?w=400',
  'https://images.unsplash.com/photo-1604928153523-3b5d91d14f9d?w=400',
  'https://images.unsplash.com/photo-1623946724760-eef950c7c99f?w=400',
];

const REVIEWS = [
  {
    name: 'Ramesh Kumar',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'The Panditji was very knowledgeable and performed the puja with utmost devotion. Highly recommended!',
  },
  {
    name: 'Sunita Devi',
    rating: 5,
    date: '1 month ago',
    comment:
      'Excellent service. The entire family felt blessed. Will definitely book again for other ceremonies.',
  },
  {
    name: 'Anil Sharma',
    rating: 4,
    date: '1 month ago',
    comment:
      'Very professional service. The samagri provided was of high quality. Minor delay but overall great experience.',
  },
  {
    name: 'Meera Patel',
    rating: 5,
    date: '2 months ago',
    comment:
      'DivyaPooja made our Griha Pravesh ceremony so memorable. The pandit explained every ritual beautifully.',
  },
];

const FAQS = [
  {
    q: 'What items are included in the puja samagri?',
    a: 'Our samagri kit includes all essential items like flowers, incense, diya, kumkum, haldi, rice, and specific items required for this particular puja. Premium kits include additional items.',
  },
  {
    q: 'Can I request a specific Pandit?',
    a: 'Yes, you can request a specific Pandit if you have worked with them before. Subject to their availability, we will try our best to accommodate your request.',
  },
  {
    q: 'What if I need to reschedule?',
    a: 'You can reschedule up to 24 hours before the ceremony without any charges. Rescheduling within 24 hours may incur a small fee.',
  },
  {
    q: 'Do you provide online/E-Puja services?',
    a: 'Yes, we offer E-Puja services via video call for devotees who cannot have a Pandit visit in person. The experience is interactive and authentic.',
  },
  {
    q: 'Is there any travel charge for the Pandit?',
    a: 'Travel charges may apply depending on the distance. This will be clearly communicated during booking confirmation.',
  },
];

export default function PujaDetails() {
  const params = useParams();
  const pujaId = parseInt(params.id || '1');
  const puja = PUJAS_DATA.find((p) => p.id === pujaId) || PUJAS_DATA[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    venue: '',
    address: '',
    notes: '',
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { puja: puja.name, ...formData });
    alert('Booking request submitted! We will contact you shortly.');
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Link to="/poojas">
          <div className="inline-flex items-center gap-2 text-primary hover:underline mb-6 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to All Pujas
          </div>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Left: Puja Info */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img src={puja.image} alt={puja.name} className="w-full h-full object-cover" />
              <Badge className="absolute top-4 left-4 bg-secondary text-white text-sm px-3 py-1">
                {puja.category}
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                {puja.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{puja.shortDesc}</p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  <Clock className="w-5 h-5" />
                  {puja.duration}
                </div>
                <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-bold text-lg">
                  {puja.price}
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="ml-2 text-foreground font-medium">(48 Reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-primary/10 sticky top-24">
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="text-xl font-display flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book This Puja
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="pl-9"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          placeholder="+91 98765 43210"
                          className="pl-9"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-9"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="venue">Venue Type *</Label>
                    <select
                      id="venue"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      required
                    >
                      <option value="">Select venue type</option>
                      <option value="home">Home</option>
                      <option value="temple">Temple</option>
                      <option value="office">Office</option>
                      <option value="online">Online (E-Puja)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Textarea
                        id="address"
                        placeholder="Full address for home visit"
                        className="pl-9 min-h-[80px]"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Special Instructions</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any specific requirements or preferences..."
                      className="min-h-[60px]"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 text-lg font-semibold shadow-lg"
                  >
                    Request Booking
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Our team will contact you to confirm availability and details.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full justify-start bg-stone-100 p-1 rounded-lg mb-6 flex-wrap h-auto gap-1">
            <TabsTrigger
              value="description"
              className="data-[state=active]:bg-white data-[state=active]:text-primary font-semibold px-6"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="data-[state=active]:bg-white data-[state=active]:text-primary font-semibold px-6"
            >
              Reviews
            </TabsTrigger>
            <TabsTrigger
              value="gallery"
              className="data-[state=active]:bg-white data-[state=active]:text-primary font-semibold px-6"
            >
              Gallery
            </TabsTrigger>
            <TabsTrigger
              value="faq"
              className="data-[state=active]:bg-white data-[state=active]:text-primary font-semibold px-6"
            >
              FAQ
            </TabsTrigger>
          </TabsList>

          {/* Description Tab */}
          <TabsContent value="description" className="animate-in fade-in duration-300">
            <Card>
              <CardContent className="p-6 md:p-8 prose prose-stone max-w-none">
                <h3 className="text-2xl font-display font-bold mb-4">About {puja.name}</h3>
                <p className="text-lg leading-relaxed text-stone-700 mb-6">{puja.fullDesc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-primary/5 p-6 rounded-xl">
                    <h4 className="font-bold text-lg mb-3">What's Included</h4>
                    <ul className="space-y-2 text-stone-600">
                      <li className="flex items-center gap-2">✓ Experienced Vedic Pandit</li>
                      <li className="flex items-center gap-2">✓ Complete Puja Samagri Kit</li>
                      <li className="flex items-center gap-2">✓ Havan (if applicable)</li>
                      <li className="flex items-center gap-2">✓ Prasad Distribution</li>
                      <li className="flex items-center gap-2">✓ Post-Puja Guidance</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/5 p-6 rounded-xl">
                    <h4 className="font-bold text-lg mb-3">Best Performed On</h4>
                    <ul className="space-y-2 text-stone-600">
                      <li className="flex items-center gap-2">• Full Moon (Purnima)</li>
                      <li className="flex items-center gap-2">• Ekadashi Tithi</li>
                      <li className="flex items-center gap-2">• Auspicious Nakshatras</li>
                      <li className="flex items-center gap-2">• Special Festival Days</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="animate-in fade-in duration-300">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-display font-bold">Customer Reviews</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold">4.8</span>
                    <span className="text-muted-foreground">(48 reviews)</span>
                  </div>
                </div>
                <div className="space-y-6">
                  {REVIEWS.map((review, i) => (
                    <div key={i} className="border-b border-stone-100 pb-6 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                            {review.name[0]}
                          </div>
                          <div>
                            <p className="font-semibold">{review.name}</p>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex text-amber-500">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-stone-600 ml-13">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="animate-in fade-in duration-300">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-display font-bold mb-6">Photo Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {GALLERY_IMAGES.map((img, i) => (
                    <div
                      key={i}
                      className={cn(
                        'relative overflow-hidden rounded-xl cursor-pointer group',
                        i === 0 ? 'col-span-2 row-span-2' : ''
                      )}
                      onClick={() => openLightbox(i)}
                    >
                      <img
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 font-medium transition-opacity">
                          View
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="animate-in fade-in duration-300">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-display font-bold mb-6">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  {FAQS.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-stone-200">
                      <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-stone-600 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white z-50"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative flex items-center justify-center min-h-[60vh]">
            <button
              onClick={() =>
                setLightboxIndex(
                  (prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
                )
              }
              className="absolute left-4 text-white/70 hover:text-white p-2"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <img
              src={GALLERY_IMAGES[lightboxIndex]}
              alt="Gallery"
              className="max-h-[80vh] max-w-full object-contain rounded-lg"
            />
            <button
              onClick={() => setLightboxIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)}
              className="absolute right-4 text-white/70 hover:text-white p-2"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
          <div className="p-4 text-center text-white/60 text-sm">
            {lightboxIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
