import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg border border-accent">
                ॐ
              </div>
              <span className="font-display text-2xl font-bold text-white tracking-wide">
                Divya<span className="text-primary">Pooja</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Bringing divinity to your doorstep. We connect you with experienced Vedic Pandits for
              all your spiritual needs, ensuring authentic rituals and peace of mind.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/">
                  <div className="hover:text-primary transition-colors">Home</div>
                </Link>
              </li>
              <li>
                <Link to="/poojas">
                  <div className="hover:text-primary transition-colors">Our Services</div>
                </Link>
              </li>
              <li>
                <Link to="/pandits">
                  <div className=" hidden hover:text-primary transition-colors">Find a Pandit</div>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <div className="hover:text-primary transition-colors">About Us</div>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <div className="hover:text-primary transition-colors">Contact</div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display text-xl mb-6">Popular Poojas</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Satyanarayan Katha
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Griha Pravesh
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Wedding Ceremony
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ganesh Pooja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Navagraha Shanti
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>123 Spiritual Avenue, Temple Road, Varanasi, India 221001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>namaste@divyapooja.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} DivyaPooja Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
