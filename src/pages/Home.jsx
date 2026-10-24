import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/home/Hero';
import { SectionHeader } from '../components/ui/section-header';
import { POOJAS, PANDITS } from '../lib/mockData';
import { getLocalizedPujasData } from '../lib/pujaData';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  Star,
  MapPin,
  Clock,
  ChevronRight,
  CheckCircle2,
  Quote,
  Sparkles,
  Users,
  Phone,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import panditImage from '../assets/generated_images/hindu_pandit_portrait.png';
import thaliImage from '../assets/generated_images/pooja_thali_items.png';

const TESTIMONIALS = [
  {
    name: 'Rajesh Iyer',
    role: 'Devotee',
    text: 'The Satyanarayan Pooja was performed with such devotion. The Panditji explained every ritual, making it a truly spiritual experience for my family.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Homeowner',
    text: 'Finding a reliable Pandit for our Griha Pravesh was so easy. The service was punctual, and the Samagri kit provided was very high quality.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Business Owner',
    text: 'Excellent service for our office opening. The coordination was seamless, and the rituals were performed exactly according to Vedic traditions.',
    rating: 5,
  },
];

const FAQS = [
  {
    question: 'How do I book a Pandit?',
    answer:
      "You can book a Pandit by browsing our list of experienced Vedic scholars, selecting your required Pooja, and clicking on 'Book Now'. Our team will coordinate the rest.",
  },
  {
    question: 'Is the Pooja Samagri included?',
    answer:
      'Yes, we offer complete Pooja Samagri kits as an add-on service. You can choose to include it during the booking process.',
  },
  {
    question: 'Do you offer online E-Poojas?',
    answer:
      'Yes! We provide interactive online Pooja services via video call for devotees who cannot have a Pandit visit their home in person.',
  },
  {
    question: 'How are the Pandits verified?',
    answer:
      'All our Pandits undergo a rigorous verification process where we check their Vedic knowledge, experience, and background before they join our platform.',
  },
];

export default function Home() {
  const { language } = useLanguage();
  const localizedPujasData = getLocalizedPujasData(language);
  const featuredPujas = localizedPujasData.slice(0, 4);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <Hero />

      {/* Services Section */}
      <section id="our-divine-services" className="page-container scroll-mt-20 py-20">
        <SectionHeader title="Our Divine Services" subtitle="Authentic Vedic Rituals" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPujas.map((pooja) => (
            <Card
              key={pooja.id}
              className="group hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden bg-card"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img
                  src={pooja.image}
                  alt={pooja.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                  {pooja.name}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{pooja.shortDesc}</p>
                <div className="flex items-center gap-4 text-sm font-medium text-stone-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    {pooja.duration}
                  </div>
                  <div className="text-secondary font-bold">{pooja.price}</div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to={`/poojas/${pooja.id}`}>
                  <Button
                    variant="outline"
                    className="w-full border-primary/20 text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Book Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/poojas">
            <Button variant="link" className="text-primary text-lg font-medium">
              View All Services <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Pandits Section */}
      <section className=" hidden py-20 bg-stone-100 pattern-mandala border-y border-stone-200 overflow-hidden">
        <div className="page-container relative z-10">
          <SectionHeader title="Experienced Vedic Pandits" subtitle="Verified & Trusted" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PANDITS.map((pandit) => (
              <div
                key={pandit.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-stone-100 flex gap-4"
              >
                <div className="shrink-0">
                  <img
                    src={panditImage}
                    alt={pandit.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex items-center justify-center gap-1 mt-2 text-amber-500 font-bold text-sm">
                    <Star className="w-3 h-3 fill-current" />
                    {pandit.rating}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold mb-1">{pandit.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                    <MapPin className="w-3 h-3" /> {pandit.location}
                  </div>
                  <p className="text-sm text-stone-600 mb-3">
                    Exp: {pandit.experience} • {pandit.languages.slice(0, 2).join(', ')}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {pandit.specialty.slice(0, 2).map((spec) => (
                      <span
                        key={spec}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-secondary text-white hover:bg-secondary/90"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="page-container">
          <SectionHeader title="How DivyaPooja Works" subtitle="Your Journey to Spiritual Peace" />

          <div className="relative mt-16">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-stone-100 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                {
                  step: '01',
                  title: 'Select a Puja',
                  desc: 'Choose from our wide range of Vedic rituals and services tailored for your needs.',
                  icon: Sparkles,
                  color: 'bg-orange-50 text-orange-600',
                },
                {
                  step: '02',
                  title: 'Book a Pandit',
                  desc: 'Select an experienced Vedic scholar based on language, location, and expertise.',
                  icon: Users,
                  color: 'bg-red-50 text-red-600',
                },
                {
                  step: '03',
                  title: 'Get Confirmation',
                  desc: 'Receive instant booking details and a complete list of required samagri via email/SMS.',
                  icon: CheckCircle2,
                  color: 'bg-amber-50 text-amber-600',
                },
                {
                  step: '04',
                  title: 'Call from Pandit Ji',
                  desc: 'Your assigned Pandit will call to discuss the muhurat and specific requirements.',
                  icon: Phone,
                  color: 'bg-primary/10 text-primary',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div
                    className={`w-24 h-24 rounded-2xl ${item.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative`}
                  >
                    <item.icon className="w-10 h-10" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-stone-100 flex items-center justify-center text-xs font-bold text-stone-400 shadow-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm px-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="page-container py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src={thaliImage}
              alt="Pooja Items"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <SectionHeader
              title="Why Choose DivyaPooja?"
              subtitle="The Divine Difference"
              centered={false}
              className="mb-8"
            />

            <div className="space-y-6">
              {[
                {
                  title: 'Verified Pandits',
                  desc: 'Every pandit is vetted for their knowledge, experience, and authenticity.',
                },
                {
                  title: 'Samagri Included',
                  desc: 'We provide high-quality, pure pooja samagri kits for your convenience.',
                },
                {
                  title: 'Fixed Prices',
                  desc: 'Transparent pricing with no hidden costs or last-minute demands.',
                },
                {
                  title: 'Online & Offline',
                  desc: 'Book pandits for home visits or perform e-pooja via video call.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/5">
        <div className="page-container">
          <SectionHeader title="What our devotees say" subtitle="Spiritual Experiences" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <Card key={i} className="border-none shadow-md bg-white relative">
                <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/10" />
                <CardContent className="pt-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-stone-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20">
        <div className="page-container">
          <div className="mx-auto max-w-3xl">
            <SectionHeader title="Frequently Asked Questions" subtitle="Clear Your Doubts" />
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-stone-200">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-stone-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className=" hidden py-20 bg-primary text-primary-foreground">
        <div className="page-container space-y-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Are you a Pandit?</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Join our growing network of Vedic scholars and reach devotees across the globe. Manage
            your bookings easily.
          </p>
          <Link to="/register">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-stone-100 border-none shadow-lg mt-4 text-lg px-8"
            >
              Register as Pandit
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
