import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/poojas', label: 'Pooja Services' },
    /* { href: '/pandits', label: 'Find Pandit' }, */
    { href: '/astrology', label: 'Astrology' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="page-container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl border-2 border-accent">
              ॐ
            </div>
            <span className="font-display text-2xl font-bold text-primary tracking-wide">
              Smart<span className="text-secondary">Pooja</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              <div
                className={cn(
                  'text-lg font-medium transition-colors hover:text-primary relative group',
                  location === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full',
                    location === link.href ? 'w-full' : ''
                  )}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-3 lg:flex xl:gap-4">
          <div className="flex items-center gap-2 mr-2">
            <Globe className="w-4 h-4 text-primary" />
            <select 
              value={language} 
              onChange={(e) => toggleLanguage(e.target.value)}
              className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
          </div>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <Phone className="w-4 h-4 mr-2" />
            +91 98765 43210
          </Button>
          <Link to="/register">
            <Button className="hidden bg-secondary hover:bg-secondary/90 text-white font-semibold shadow-md">
              Pandit Registration
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="p-2 text-foreground lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute w-full flex flex-col gap-4 border-b bg-background p-4 shadow-lg animate-in slide-in-from-top-5 lg:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              <div
                className={cn(
                  'text-lg py-2 px-4 rounded-md transition-colors',
                  location === link.href
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-foreground hover:bg-muted'
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <div className="h-px bg-border my-2" />
          <a
            href="tel:+919876543210"
            className="flex items-center gap-3 rounded-md px-4 py-2 text-lg text-foreground transition-colors hover:bg-muted"
          >
            <Phone className="h-5 w-5 text-primary" />
            +91 98765 43210
          </a>
          <div className="flex items-center gap-2 px-4 py-2">
            <Globe className="w-5 h-5 text-primary" />
            <select 
              value={language} 
              onChange={(e) => {
                toggleLanguage(e.target.value);
                setIsOpen(false);
              }}
              className="bg-transparent text-lg font-medium focus:outline-none cursor-pointer w-full"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
          </div>
          <Link to="/register">
            <Button className=" hidden w-full bg-secondary text-white" onClick={() => setIsOpen(false)}>
              Pandit Registration
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
