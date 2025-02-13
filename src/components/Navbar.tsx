import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/#about",
    label: "About Us",
  },
  {
    href: "/#team",
    label: "Team",
  },
  {
    href: "/events",
    label: "Events",
  },
  {
    href: "/#contact",
    label: "Contact Us",
  },
];

export const Navbar = ({ className }: { className?: string }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
    className={cn(`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
          ? "bg-black/70 backdrop-blur-sm"
          : "bg-transparent"
        }`, className)}
    >
      <div className="container mx-auto">
        <div className="h-16 px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="../images/akatsukilogo.png"
              alt="Akatsuki Logo"
              className="mr-4 max-h-8"
            />
            <span className="text-white text-3xl font-bold">Akatsuki</span>
          </Link>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div
            className={`lg:hidden fixed inset-y-0 right-0 transform ${isOpen ? "translate-x-0" : "translate-x-full"
              } w-64 bg-black/95 backdrop-blur-lg transition-transform duration-300 ease-in-out z-50`}
          >
            <div className="p-6">
              <nav className="space-y-4">
                {routeList.map((route) => (
                  <a
                    key={route.label}
                    href={route.href}
                    className="block text-white hover:text-red-500 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {routeList.map((route) => (
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
    </header>
  );
};