import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import logolight from '../assets/logolight.png';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-red-50 via-gray-50 to-white p-4 flex items-center justify-between text-xl">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src={logolight} alt="Logo" className="max-w-[100px]" />
        </Link>
      </div>

      {/* Desktop Navigation Menu */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent",
                currentPath === "/" ? "text-red-500" : ""
              )}
            >
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent",
                currentPath === "/about" ? "text-red-500" : ""
              )}
            >
              <Link to="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "bg-transparent",
                currentPath.startsWith("/pages") ? "text-red-500" : ""
              )}
            >
              Pages
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[200px]">
                <li>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      currentPath === "/pages/services" ? "text-red-500" : ""
                    )}
                  >
                    <Link to="/pages/services">Services</Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      currentPath === "/pages/pricing" ? "text-red-500" : ""
                    )}
                  >
                    <Link to="/pages/pricing">Pricing</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent",
                currentPath === "/blog" ? "text-red-500" : ""
              )}
            >
              <Link to="/blog">Blogs</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent",
                currentPath === "/contact" ? "text-red-500" : ""
              )}
            >
              <Link to="/contact">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent",
                currentPath === "/shop" ? "text-red-500" : ""
              )}
            >
              <Link to="/shop">Shop</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-12 w-12 p-2">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px]">
            <div className="flex flex-col gap-6 py-4  mx-4">
              <div className="flex flex-col gap-4 mt-4">
                <SheetClose asChild>
                  <Link 
                    to="/" 
                    className={cn(
                      "px-2 py-2 text-lg",
                      currentPath === "/" ? "text-red-500 font-medium" : ""
                    )}
                  >
                    Home
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link 
                    to="/about" 
                    className={cn(
                      "px-2 py-2 text-lg",
                      currentPath === "/about" ? "text-red-500 font-medium" : ""
                    )}
                  >
                    About
                  </Link>
                </SheetClose>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="pages" className="border-none">
                    <AccordionTrigger className={cn(
                      "px-2 py-2 text-lg",
                      currentPath.startsWith("/pages") ? "text-red-500 font-medium" : ""
                    )}>
                      Pages
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-2 pl-4">
                        <SheetClose asChild>
                          <Link 
                            to="/pages/services" 
                            className={cn(
                              "px-2 py-2 text-lg",
                              currentPath === "/pages/services" ? "text-red-500 font-medium" : ""
                            )}
                          >
                            Services
                          </Link>
                        </SheetClose>
                        
                        <SheetClose asChild>
                          <Link 
                            to="/pages/pricing" 
                            className={cn(
                              "px-2 py-2 text-lg",
                              currentPath === "/pages/pricing" ? "text-red-500 font-medium" : ""
                            )}
                          >
                            Pricing
                          </Link>
                        </SheetClose>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <SheetClose asChild>
                  <Link 
                    to="/blog" 
                    className={cn(
                      "px-2 py-2 text-lg",
                      currentPath === "/blog" ? "text-red-500 font-medium" : ""
                    )}
                  >
                    Blogs
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link 
                    to="/contact" 
                    className={cn(
                      "px-2 py-2 text-lg",
                      currentPath === "/contact" ? "text-red-500 font-medium" : ""
                    )}
                  >
                    Contact
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link 
                    to="/shop" 
                    className={cn(
                      "px-2 py-2 text-lg",
                      currentPath === "/shop" ? "text-red-500 font-medium" : ""
                    )}
                  >
                    Shop
                  </Link>
                </SheetClose>
              </div>
              
              <div className="mt-6">
                <SheetClose asChild>
                  <Link to="/login">
                    <Button className="bg-red-800 text-white font-medium px-6 py-2 rounded-full hover:bg-red-600 w-full">
                      Log In
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Login Button */}
      <Link to="/login" className="hidden md:block">
        <Button className="bg-red-800 text-white font-medium px-6 py-2 rounded-full hover:bg-red-600">
          Log In
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;