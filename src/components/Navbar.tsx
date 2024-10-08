import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "./ui/button";
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
    href: "#about",
    label: "About Us",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "/events",
    label: "Events",
  },
  {
    href: "#contact",
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
      className={cn(`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out text-white ${scrolled ? "bg-black/70" : "bg-none"
        }`, className)}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-16 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <Link to="/" className="flex items-center">
              <img
                src="../images/akatsukilogo.png"
                alt="Akatsuki Logo"
                className="mr-2"
                style={{ maxHeight: "40px" }}
              />
              <span className="text-white text-3xl font-bold">Akatsuki</span>
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex lg:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    <a
                      rel="noreferrer noopener"
                      href="/"
                      className="font-bold text-xl flex justify-center"
                    >
                      <img
                        src="./logo2.jpg"
                        alt="Artha Commodities"
                        className="h-14"
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden lg:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] hover:text-red-500 hover:bg-red-500/10 ${buttonVariants(
                  {
                    variant: "ghost",
                  }
                )}`}
              >
                {route.label}
              </a>
            ))}
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

