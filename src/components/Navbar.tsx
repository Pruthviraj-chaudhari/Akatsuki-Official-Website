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
        'fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm transition-all duration-300',
        className
      )}
    >
      <div className="container mx-auto">
        <div className="h-16 px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/assets/akatsukilogo.png" alt="Logo" className="mr-4 max-h-8" />
            <span className="text-white text-3xl font-bold">Akatsuki</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden ">
            <button
              onClick={() => setIsOpen(true)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

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
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 z-40 lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        ref={menuRef}
      >
        {/* Full background for mobile menu */}
        <div className="h-full w-full bg-black/70 backdrop-blur-sm">
        <div className="bg-black/70 backdrop-blur-sm">

          <div className="flex justify-between items-center p-6 bg-black/70 backdrop-blur-sm">
            <span className="text-white text-xl font-semibold">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="px-6 space-y-4 bg-black/70 backdrop-blur-sm">
            {routeList.map(route => (
              <a
                key={route.label}
                href={route.href}
                onClick={() => setIsOpen(false)}
                className="block text-white text-base hover:text-red-500 transition-colors py-2"
                >
                {route.label}
              </a>
            ))}
          </nav>
        </div>
            </div>
      </div>
    </header>
  );
};
