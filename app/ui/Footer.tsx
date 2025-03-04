import Link from "next/link";
import Image from "next/image";
import { inter } from "@/app/ui/fonts";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { TypographyLarge } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const plusCode: string = "5JR2+94P Guinobatan, Albay";
  const googleMapsUrl: string = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    plusCode
  )}`;

  return (
    <footer className="w-[90%] mx-auto">
      <div className="mx-auto mt-[5rem] md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/*Company Info*/}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="inline-flex items-center gap-2">
              {" "}
              <Image
                src="/0.png"
                alt="DocuPrint Logo"
                width={46}
                height={34}
                className="object-contain max-w-full h-auto"
              />
              <span className="font-extrabold text-xl sm:inline-block tracking-tight md:text-2xl">
                DocuPrint
              </span>
            </Link>
            <p className={`${inter.className} mb-4`}>
              Connecting you to local print shops for all your printing needs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-blue-500 transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-blue-500 transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-blue-500 transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 hover:text-blue-500 transition-colors" />
              </Link>
            </div>
          </div>
          {/*Quick Links*/}
          <div>
            <TypographyLarge className="mb-4">Quick Links</TypographyLarge>
            <ul className={`${inter.className} space-y-2`}>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  Print Locations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <TypographyLarge className="mb-4">Contact Us</TypographyLarge>
            <ul className={`${inter.className} space-y-2`}>
              <li>
                <Link
                  href="mailto:support@docuprint.com"
                  className="hover:text-blue-500 transition-colors flex items-center"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-5 w-5 lg:h-6 lg:w-6 mr-2 text-blue-500" />
                  <span>support@docuprint.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+639982472976"
                  className="hover:text-blue-500 transition-colors flex items-center"
                >
                  <Phone className="h-5 w-5 lg:h-6 lg:w-6 mr-2 text-blue-500" />
                  <span>(+63) 998-247-2976</span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="hover:text-blue-500 transition-colors flex items-center"
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-5 w-5 lg:h-6 lg:w-6 mr-2 text-blue-500" />
                  <span>5JR2+94P Guinobatan, Albay</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/*Copyright*/}
        <Separator className="my-8" />
        <div className="text-sm text-center lg:text-base">
          <p className={`${inter.className}`}>
            &copy; {new Date().getFullYear()} DocuPrint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
