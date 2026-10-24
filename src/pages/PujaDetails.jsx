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
  CheckCircle2,
  Sparkles,
  ListOrdered,
  BookOpen,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { cn } from '../lib/utils';
import { PUJAS_DATA, getLocalizedPujasData } from '../lib/pujaData';
import { useLanguage } from '../contexts/LanguageContext';
import { sendFormEmail } from '../lib/emailjs';
import { INDIAN_MOBILE_PATTERN } from '../lib/formValidation';
import { SubmissionSuccessModal } from '../components/forms/SubmissionSuccessModal';

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
      'DivyaPooja made our ceremony so memorable. The pandit explained every ritual beautifully.',
  },
];

export default function PujaDetails() {
  const params = useParams();
  const pujaId = parseInt(params.id || '1');
  const { language } = useLanguage();
  
  const localizedPujasData = getLocalizedPujasData(language);
  const puja = localizedPujasData.find((p) => p.id === pujaId) || localizedPujasData[0];

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
      await sendFormEmail('pooja', {
        submission_type: 'Pooja Booking',
        service_name: puja.name,
        service_id: String(puja.id),
        customer_name: formData.name,
        customer_email: formData.email || '',
        customer_phone: formData.phone,
        preferred_date: formData.date,
        preferred_time: formData.time,
        venue_type: formData.venue,
        address: formData.address,
        additional_details: formData.notes,
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        venue: '',
        address: '',
        notes: '',
      });
      setSuccessModalOpen(true);
    } catch (error) {
      console.error('Pooja booking email failed:', error);
      setSubmitError(
        'We could not send your booking request. Please try again in a moment.'
      );
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="page-container py-8">
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

              {/* Tags dynamically mapped */}
              {puja.tags && puja.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {puja.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-stone-500 border-stone-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

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
                          type="tel"
                          inputMode="tel"
                          pattern={INDIAN_MOBILE_PATTERN}
                          title="Enter a valid 10-digit Indian mobile number, optionally with +91"
                          placeholder="+919005448001"
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
                        title="Enter a valid email address"
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

                  {submitError && (
                    <p className="text-sm text-destructive" role="alert">
                      {submitError}
                    </p>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 text-lg font-semibold shadow-lg"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Request Booking'}
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
            {/*
            <TabsTrigger
              value="gallery"
              className="data-[state=active]:bg-white data-[state=active]:text-primary font-semibold px-6"
            >
              Gallery
            </TabsTrigger>
            {puja.faqs && puja.faqs.length > 0 && (
              <TabsTrigger
                value="faq"
                className="data-[state=active]:bg-white data-[state=active]:text-primary font-semibold px-6"
              >
                FAQ
              </TabsTrigger>
            )}
            */}
          </TabsList>

          {/* Description Tab (Dynamically Populated) */}
          <TabsContent value="description" className="animate-in fade-in duration-300">
            <Card>
              <CardContent className="p-6 md:p-8 space-y-10">
                {/* About Section */}
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-primary" />
                    About {puja.name}
                  </h3>
                  <p className="text-lg leading-relaxed text-stone-700">{puja.fullDesc}</p>
                </div>

                {/* Mantra Box */}
                {puja.mantra && (
                  <div className="bg-amber-50 border border-amber-200 p-6 md:p-8 rounded-2xl text-center shadow-sm">
                    <p className="text-2xl md:text-3xl font-bold text-amber-900 mb-3 leading-relaxed">
                      {puja.mantra.text_sanskrit}
                    </p>
                    <p className="italic text-amber-800/80 mb-5 font-medium">
                      {puja.mantra.text_transliteration}
                    </p>
                    <div className="w-16 h-px bg-amber-300 mx-auto mb-5"></div>
                    <p className="text-stone-700 font-medium leading-relaxed">
                      "{puja.mantra.meaning}"
                    </p>
                  </div>
                )}

                {/* Grid for Benefits and Conditional Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Benefits */}
                  {puja.benefits && puja.benefits.length > 0 && (
                    <div>
                      <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-secondary" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-3 text-stone-600">
                        {puja.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Reasons (Vastu Shanti specific) */}
                  {puja.reasons && puja.reasons.length > 0 && (
                    <div>
                      <h4 className="font-bold text-xl mb-4 text-primary">When to Perform?</h4>
                      <ul className="space-y-3 text-stone-600">
                        {puja.reasons.map((reason, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Spiritual Significance (Maha Ganapati Homa specific) */}
                  {puja.spiritualSignificance && puja.spiritualSignificance.length > 0 && (
                    <div>
                      <h4 className="font-bold text-xl mb-4 text-primary">
                        Spiritual Significance
                      </h4>
                      <ul className="space-y-3 text-stone-600">
                        {puja.spiritualSignificance.map((sig, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>{sig}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Procedure List */}
                {puja.procedure && puja.procedure.length > 0 && (
                  <div>
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                      <ListOrdered className="w-5 h-5 text-primary" />
                      Step-by-Step Procedure
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {puja.procedure.map((step, idx) => {
                        const [title, desc] = step.split(': ');
                        return (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-stone-50 transition-colors"
                          >
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                              {idx + 1}
                            </div>
                            <p className="text-stone-700 text-sm">
                              {desc ? (
                                <>
                                  <strong className="text-stone-900">{title}:</strong> {desc}
                                </>
                              ) : (
                                step
                              )}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Included & Materials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {puja.includes && puja.includes.length > 0 && (
                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                      <h4 className="font-bold text-lg mb-4 text-primary">What's Included</h4>
                      <ul className="space-y-2 text-stone-700 font-medium">
                        {puja.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            ✓ {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {puja.materials && puja.materials.length > 0 && (
                    <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/10">
                      <h4 className="font-bold text-lg mb-4 text-secondary">
                        Puja Samagri (Materials)
                      </h4>
                      <ul className="space-y-2 text-stone-700">
                        {puja.materials.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Best Time & Extra Tips Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-stone-100">
                  {puja.bestTime && (
                    <div>
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        Best Time / Muhurat
                      </h4>
                      {Array.isArray(puja.bestTime) ? (
                        <ul className="space-y-2 text-stone-600">
                          {puja.bestTime.map((time, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              • {time}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-stone-600 leading-relaxed">{puja.bestTime}</p>
                      )}
                    </div>
                  )}

                  {/* Preparation Tips (Maha Ganapati Homa specific) */}
                  {puja.preparationTips && puja.preparationTips.length > 0 && (
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-secondary">Preparation Tips</h4>
                      <ul className="space-y-2 text-stone-600">
                        {puja.preparationTips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></div>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Ashta Dravya (Maha Ganapati Homa specific) */}
                {puja.ashtaDravya && puja.ashtaDravya.length > 0 && (
                  <div className="pt-4">
                    <h4 className="font-bold text-lg mb-3">Ashta Dravya Ingredients</h4>
                    <div className="flex flex-wrap gap-2">
                      {puja.ashtaDravya.map((item, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="px-3 py-1 bg-amber-100 text-amber-800 hover:bg-amber-200"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="animate-in fade-in duration-300">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <h3 className="text-2xl font-display font-bold">Customer Reviews</h3>
                  <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-lg border border-stone-100">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-lg">4.8</span>
                    <span className="text-muted-foreground text-sm">(48 reviews)</span>
                  </div>
                </div>
                <div className="space-y-6">
                  {REVIEWS.map((review, i) => (
                    <div key={i} className="border-b border-stone-100 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg">
                            {review.name[0]}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{review.name}</p>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex text-amber-500">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-stone-600 sm:ml-15 italic">"{review.comment}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {false && (
            <>
              <TabsContent value="gallery" className="animate-in fade-in duration-300">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-display font-bold mb-6">Photo Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {GALLERY_IMAGES.map((img, i) => (
                    <div
                      key={i}
                      className={cn(
                        'relative overflow-hidden rounded-xl cursor-pointer group shadow-sm',
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
                        <span className="text-white opacity-0 group-hover:opacity-100 font-medium transition-opacity bg-black/50 px-4 py-2 rounded-full">
                          View
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
              </TabsContent>

              {puja.faqs && puja.faqs.length > 0 && (
                <TabsContent value="faq" className="animate-in fade-in duration-300">
                  <Card>
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-2xl font-display font-bold mb-6">
                        Frequently Asked Questions
                      </h3>
                      <Accordion type="single" collapsible className="w-full">
                        {puja.faqs.map((faq, i) => (
                          <AccordionItem key={i} value={`faq-${i}`} className="border-stone-200">
                            <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors text-lg">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-stone-600 leading-relaxed text-base">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}
            </>
          )}
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
              className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
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
      <SubmissionSuccessModal open={successModalOpen} onOpenChange={setSuccessModalOpen} />
    </div>
  );
}
