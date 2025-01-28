"use client";

import { NavItem } from "@/app/types/navigation";
import MobileMenu from "@/app/ui/header/MobileMenu";
import NavigationMenuComponent from "@/app/ui/header/NavigationMenu";
import Link from "next/link";
import Image from "next/image";
import AuthButton from "@/app/ui/auth-button";

const navItems: NavItem[] = [
  { href: "/print-services", title: "Print Services" },
  { href: "/local-shops", title: "Local Shops" },
  { href: "/customer-dashboard", title: "Customer Dashboard" },
  {
    title: "Shop Owners",
    children: [
      {
        href: "/get-started",
        title: "Get Started",
        description:
          "Connect your print shop with local customers and grow your business today!",
      },
      {
        href: "/help-center",
        title: "Help Center",
        description: "Get answers to your questions",
      },
      {
        href: "/contact",
        title: "Contact Us",
        description: "React our to our support team",
      },
    ],
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 w-full border-b bg-slate-50 supports-[backrop-filter]:bg-background/60 z-10">
      <div className="container w-[90%] flex h-14 items-center mx-auto">
        <div className="flex-1 flex items-center">
          <Link href="/" className="inline-flex items-center gap-2">
            {" "}
            <Image
              src="/0.png"
              alt="DocuPrint Logo"
              width={56}
              height={44}
              className="object-contain max-w-full h-auto"
            />
            <span className="font-extrabold text-xl hidden sm:inline-block tracking-tight md:text-2xl">
              DocuPrint
            </span>
          </Link>
        </div>
        <NavigationMenuComponent navItems={navItems} />
        <MobileMenu navItems={navItems} />
        <div className="hidden lg:flex items-center justify-end space-x-3 flex-1">
          <AuthButton href="/login" text="Login" variant="outline" />
          <AuthButton href="/signup" text="Sign Up" />
        </div>
      </div>
    </header>
  );
};

export default Header;
