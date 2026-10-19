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
import { useParams, Link } from 'react-router-dom';
import { Clock, Phone, Mail, User, Calendar, Star, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { ASTROLOGY_CATEGORIES } from './Astrology';
import astrologyBg from '../assets/generated_images/vedic_astrology_celestial_map.png';
import { getLocalizedAstrologyCategory } from '../lib/astrologyTranslations';
import { useLanguage } from '../contexts/LanguageContext';

export default function AstrologyDetails() {
  const params = useParams();
  const categoryId = params.id;
  const { language } = useLanguage();
  const baseCategory =
    ASTROLOGY_CATEGORIES.find((c) => c.id === categoryId) || ASTROLOGY_CATEGORIES[0];
  const category = getLocalizedAstrologyCategory(baseCategory, language);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    date: '',
    queries: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation booked:', formData);
    alert('Consultation request submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <Link to="/astrology">
          <div className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Astrology
          </div>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Content Left */}
          <div className="lg:col-span-3 space-y-8">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src={astrologyBg} alt={category.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
                {category.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{category.shortDesc}</p>
              <div className="flex gap-4 items-center">
                <Badge className="bg-primary/10 text-primary text-lg py-1 px-4 border-primary/20">
                  Starts at {category.price}
                </Badge>
                <div className="flex text-amber-500 items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-current" />
                  ))}
                  <span className="ml-2 text-stone-500 text-sm font-medium">(120+ reviews)</span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="bg-stone-100 p-1 w-full justify-start h-auto flex-wrap">
                <TabsTrigger value="description" className="px-8 py-2">
                  Description
                </TabsTrigger>
                <TabsTrigger value="faqs" className="px-8 py-2">
                  FAQs
                </TabsTrigger>
                <TabsTrigger value="reviews" className="px-8 py-2">
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="py-6 space-y-4">
                <h3 className="text-2xl font-display font-bold">About this Consultation</h3>
                <p className="text-stone-700 leading-relaxed text-lg">
                  {category.detailDescription ||
                    'This session is designed to provide deep insights into your life using Vedic astrological principles. Our expert astrologers analyze your birth chart (Kundali) to provide accurate predictions and effective remedies. Whether you are facing challenges or looking for growth, this consultation will provide the clarity you need.'}
                </p>
                <div className="bg-secondary/5 p-6 rounded-2xl border border-secondary/10 flex items-start gap-4">
                  <ShieldCheck className="text-secondary shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold text-lg">Confidential & Accurate</h4>
                    <p className="text-sm text-stone-600">
                      All your personal details and consultation discussions are kept 100%
                      confidential. Accuracy is guaranteed through Vedic calculations.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faqs" className="py-6">
                <Accordion type="single" collapsible>
                  <AccordionItem value="1">
                    <AccordionTrigger>What details are required for the session?</AccordionTrigger>
                    <AccordionContent>
                      You will need to provide your Date of Birth, exact Time of Birth, and Place of
                      Birth for accurate chart preparation.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="2">
                    <AccordionTrigger>How long is the consultation call?</AccordionTrigger>
                    <AccordionContent>
                      A typical session lasts between 30 to 45 minutes depending on the complexity
                      of your queries.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="reviews" className="py-6 space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <p className="font-bold">Devotee {i}</p>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} size={14} className="fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-stone-600 italic">
                      "Extremely satisfied with the consultation. The remedies suggested were very
                      practical and effective."
                    </p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-2">
            <Card className="sticky top-24 border-primary/20 shadow-2xl">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="font-display text-2xl">Book Consultation</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-muted-foreground" size={16} />
                      <Input placeholder="Your Name" className="pl-10" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input type="email" placeholder="email@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone</Label>
                      <Input placeholder="+91 0000000000" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Preferred Date</Label>
                      <Input type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Time</Label>
                      <Input type="time" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Your Queries</Label>
                    <Textarea
                      placeholder="What would you like to ask the astrologer?"
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-secondary text-white hover:bg-secondary/90 h-12 text-lg font-bold shadow-lg mt-4"
                  >
                    Book Consultation Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
