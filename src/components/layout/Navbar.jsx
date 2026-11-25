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

  const handleNavigationClick = (href) => {
    setIsOpen(false);
    if (location.pathname === href) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/poojas', label: 'Pooja Services' },
    { href: '/about-us', label: 'About Us' },
    /* { href: '/pandits', label: 'Find Pandit' }, */
    { href: '/astrology', label: 'Astrology' },
    { href: '/ratan', label: 'Ratan' },
    { href: '/gallery', label: 'Gallery' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <img
              src="/Smart-Puja-Logo.png"
              alt="Smart Puja Path"
              className="h-12 sm:h-13 lg:h-14 xl:h-16 w-auto aspect-square object-contain shrink-0"
            />
            <span className="font-display text-xl sm:text-2xl lg:text-[1.5rem] xl:text-[1.75rem] font-bold text-primary tracking-wide leading-none whitespace-nowrap">
              Smart<span className="text-secondary">Pujapath</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-3.5 lg:gap-4 xl:gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => handleNavigationClick(link.href)}>
              <div
                className={cn(
                  'text-[15px] xl:text-lg font-medium transition-colors hover:text-primary relative group whitespace-nowrap',
                  location.pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full',
                    location.pathname === link.href ? 'w-full' : ''
                  )}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-2.5 lg:flex xl:gap-3.5 shrink-0">
          <div className="flex items-center gap-2 mr-1 xl:mr-2">
            <Globe className="w-4 h-4 text-primary shrink-0" />
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
            className="border-primary text-primary hover:bg-primary/10 px-3 lg:px-3.5 xl:px-4 text-sm xl:text-base whitespace-nowrap shrink-0"
          >
            <Phone className="w-4 h-4 mr-1.5 xl:mr-2 shrink-0" />
            +919005448001
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
            <Link key={link.href} to={link.href} onClick={() => handleNavigationClick(link.href)}>
              <div
                className={cn(
                  'text-lg py-2 px-4 rounded-md transition-colors',
                  location.pathname === link.href
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
            href="tel:+919005448001"
            className="flex items-center gap-3 rounded-md px-4 py-2 text-lg text-foreground transition-colors hover:bg-muted"
          >
            <Phone className="h-5 w-5 text-primary" />
            +919005448001
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
