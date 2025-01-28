"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3Icon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { NavItem } from "@/app/types/navigation";
import AuthButton from "@/app/ui/auth-button";

interface MobileMenuProps {
  navItems: NavItem[];
}

const MobileMenu = ({ navItems }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsibleOpen, setCollapsibleOpen] = useState(false);

  return (
    <div className="flex gap-3">
      <div className="hidden sm:flex md:hidden items-center justify-end space-x-3 ">
        <AuthButton href="/login" text="Login" variant="outline" />
        <AuthButton href="/signup" text="Sign Up" />
      </div>
      <AuthButton href="/signup" text="Sign Up" className="sm:hidden" />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="lg:hidden" size="icon">
            <Bars3Icon className="!h-6 !w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader className="text-start">
            <SheetTitle>
              <Link href="/" className="inline-flex items-center gap-2">
                {" "}
                <Image
                  src="/0.png"
                  alt="DocuPrint Logo"
                  width={56}
                  height={44}
                  className="object-contain max-w-full h-auto"
                />
                <span className="font-extrabold text-base tracking-tight sm:text-xl">
                  DocuPrint
                </span>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-5">
            {navItems.map((item) => {
              if (item.href) {
                return (
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary sm:text-base"
                    key={item.title}
                  >
                    {item.title}{" "}
                  </Link>
                );
              } else {
                return (
                  <Collapsible
                    open={isCollapsibleOpen}
                    onOpenChange={setCollapsibleOpen}
                    key={item.title}
                  >
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center justify-between space-x-4">
                        <span className="text-sm font-medium transition-colors hover:text-primary sm:text-base">
                          {item.title}{" "}
                        </span>
                        <ChevronRightIcon
                          className={`w-4 h-4 inline-block ml-1 transition-transform duration-150 ease-in-out ${
                            isCollapsibleOpen ? "rotate-90" : ""
                          }`}
                        />
                        <span className="sr-only">Toggle</span>
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4 mt-5 px-3 flex flex-col">
                      {item.children?.map((item) => (
                        <Link
                          href={item.href || "/"}
                          key={item.href}
                          className="text-sm font-medium transition-colors hover:text-primary sm:text-base"
                        >
                          {item.title}
                          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                );
              }
            })}
          </nav>
          <div className="md:flex flex-col items-center gap-3 mt-5 hidden">
            <AuthButton
              href="/"
              text="Login"
              variant="outline"
              className="w-full"
            />
            <AuthButton href="/" text="Sign Up" className="w-full" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
