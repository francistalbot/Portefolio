"use client";

import Link from "next/link";
import { navLinks } from "@/config/site";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

export function MobileNavigation({ className }: { className?: string }) {
  return (
    <NavigationMenu
      className={`${className} relative px-3 py-2 text-fg/60 transition-colors hover:text-fg data-[active='true']:text-fg`}
    >
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger  noChevron={true} className={navigationMenuTriggerStyle()}>
            Menu
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link href={link.href}>
                  {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}