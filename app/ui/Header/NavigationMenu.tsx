"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "@/app/ui/Header/ListItem";
import Link from "next/link";
import { NavItem } from "@/app/types/navigation";

interface NavigationMenuComponentProps {
  navItems: NavItem[];
}

const NavigationMenuComponent = ({
  navItems,
}: NavigationMenuComponentProps) => {
  return (
    <NavigationMenu className="flex-1 justify-center lg:flex hidden">
      <NavigationMenuList>
        {navItems.map((item) => {
          if (item.href) {
            return (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} key={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} md:text-base`}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          } else {
            return (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="md:text-base">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[600px]">
                    {item.children?.map((subItem, subIndex) => (
                      <ListItem
                        key={subIndex}
                        title={subItem.title}
                        href={subItem.href}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;
