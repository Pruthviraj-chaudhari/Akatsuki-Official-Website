import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/#team', label: 'Team' },
  { href: '/events', label: 'Events' },
  { href: '/resources', label: 'Resources' },
  { href: '/#contact', label: 'Contact Us' },
];

export const Navbar = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm',
        className
      )}
    >
      <div className="container mx-auto">
        <div className="h-16 px-4 flex items-center justify-between relative z-50">
          <Link to="/" className="flex items-center z-50">
            <img src="../assets/akatsukilogo.png" alt="Akatsuki Logo" className="mr-4 max-h-8" />
            <span className="text-white text-3xl font-bold">Akatsuki</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {routeList.map(route => (
              <a
                key={route.label}
                href={route.href}
                className="text-white px-4 py-2 rounded-lg text-[17px] hover:text-red-500 hover:bg-white/10 transition-colors"
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu - Positioned behind navbar */}
      <div
        className={cn(
          'lg:hidden fixed top-0 left-0 right-0 h-max bg-black/90 backdrop-blur-sm transition-all duration-300 z-40 pt-16',
          isOpen ? 'translate-y-0' : '-translate-y-full'
        )}
        ref={menuRef}
      >
        <nav className="px-6 py-4 space-y-4 overflow-y-auto h-full">
          {routeList.map(route => (
            <a
              key={route.label}
              href={route.href}
              onClick={() => setIsOpen(false)}
              className="block text-white text-lg hover:text-red-500 transition-colors py-3 "
            >
              {route.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};