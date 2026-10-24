import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SectionHeader } from '../components/ui/section-header';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { useToast } from '../hooks/use-toast';
import panditImage from '../assets/generated_images/hindu_pandit_portrait.png';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  location: z.string().min(2, 'City/Location is required'),
  experience: z.string().min(1, 'Years of experience is required'),
  specialties: z.string().min(3, 'Please list at least one specialty'),
  bio: z.string().optional(),
});

export default function Register() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      experience: '',
      specialties: '',
      bio: '',
    },
  });

  function onSubmit(values) {
    console.log(values);
    toast({
      title: 'Registration Submitted',
      description:
        'Thank you for registering! We will verify your details and contact you shortly.',
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="py-12 bg-stone-50">
        <div className="page-container">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Left Sidebar Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                <h3 className="font-display text-xl font-bold mb-4 text-primary">
                  Why Join DivyaPooja?
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-xs font-bold">
                      1
                    </div>
                    <p className="text-sm text-stone-700">
                      Expand your reach to devotees across the city and globe.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-xs font-bold">
                      2
                    </div>
                    <p className="text-sm text-stone-700">
                      Manage your bookings and schedule efficiently.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-xs font-bold">
                      3
                    </div>
                    <p className="text-sm text-stone-700">
                      Guaranteed timely payments and transparent earnings.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                <img src={panditImage} alt="Pandit" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <p className="text-white italic text-sm">
                    "Since joining DivyaPooja, I have been able to help so many more families
                    perform their rituals correctly." - Pandit Ram Krishna
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="md:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className=" hidden font-display text-2xl">Pandit Registration</CardTitle>
                  <CardDescription>
                    Fill in your details to become a verified partner.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Acharya Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 9876543210" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City / Location</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Varanasi" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Experience (Years)</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. 10" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="specialties"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Specialties (Comma separated)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Vastu, Wedding, Katha" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Short Bio (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your education and background..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-secondary text-white hover:bg-secondary/90 mt-4"
                      >
                        Submit Application
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
