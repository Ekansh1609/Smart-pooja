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
import { useRef, useState } from 'react';
import { ASTROLOGY_CATEGORIES } from './Astrology';
import astrologyBg from '../assets/generated_images/vedic_astrology_celestial_map.png';
import { getLocalizedAstrologyCategory } from '../lib/astrologyTranslations';
import { useLanguage } from '../contexts/LanguageContext';
import { sendFormEmail } from '../lib/emailjs';
import { INDIAN_MOBILE_PATTERN } from '../lib/formValidation';
import { SubmissionSuccessModal } from '../components/forms/SubmissionSuccessModal';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const submissionInProgress = useRef(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submissionInProgress.current) return;

    submissionInProgress.current = true;
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await sendFormEmail('astrology', {
        submission_type: 'Astrology Inquiry',
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        service_name: category.title,
        service_id: baseCategory.id,
        preferred_date: formData.date,
        preferred_time: formData.time,
        queries: formData.queries,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        time: '',
        date: '',
        queries: '',
      });
      setSuccessModalOpen(true);
    } catch (error) {
      console.error('Astrology inquiry email failed:', error);
      setSubmitError(
        'We could not send your consultation request. Please try again in a moment.'
      );
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="page-container py-12">
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
                {/*
                <TabsTrigger value="faqs" className="px-8 py-2">
                  FAQs
                </TabsTrigger>
                */}
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

              {false && (
                <TabsContent value="faqs" className="py-6">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="1">
                      <AccordionTrigger>What details are required for the session?</AccordionTrigger>
                      <AccordionContent>
                        You will need to provide your Date of Birth, exact Time of Birth, and Place
                        of Birth for accurate chart preparation.
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
              )}

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
                      <Input
                        name="customer_name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input
                        name="customer_email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        type="email"
                        placeholder="email@example.com"
                        title="Enter a valid email address"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone</Label>
                      <Input
                        name="customer_phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        type="tel"
                        inputMode="tel"
                        pattern={INDIAN_MOBILE_PATTERN}
                        title="Enter a valid 10-digit Indian mobile number, optionally with +91"
                        placeholder="+91 0000000000"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Preferred Date</Label>
                      <Input
                        name="preferred_date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        type="date"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Time</Label>
                      <Input
                        name="preferred_time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        type="time"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Your Queries</Label>
                    <Textarea
                      name="queries"
                      value={formData.queries}
                      onChange={(e) => setFormData({ ...formData, queries: e.target.value })}
                      placeholder="What would you like to ask the astrologer?"
                      className="min-h-[100px]"
                    />
                  </div>
                  {submitError && (
                    <p className="text-sm text-destructive" role="alert">
                      {submitError}
                    </p>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-white hover:bg-secondary/90 h-12 text-lg font-bold shadow-lg mt-4"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Book Consultation Now'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <SubmissionSuccessModal open={successModalOpen} onOpenChange={setSuccessModalOpen} />
    </div>
  );
}
