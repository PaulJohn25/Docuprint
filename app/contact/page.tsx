import {
  TypographyH1,
  TypographyP,
  TypographyLarge,
} from "@/components/ui/typography";
import { Mail } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/app/ui/contact-form";

const Page = () => {
  return (
    <main className="w-[90%] md:w-[80%] mx-auto pb-8">
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-5 flex flex-col justify-center">
          <TypographyH1>Reach Out to Our Support Team</TypographyH1>
          <TypographyP>
            Whether you’re a customer with printing needs or a shop owner
            looking for support, we’re here to help! Fill out the form or email
            us directly, and we’ll get back to you promptly.
          </TypographyP>

          {/* Contact Email */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-100 rounded-md">
              <Mail className="h-6 w-6 text-gray-500" />
            </div>
            <div>
              <TypographyLarge className="font-medium">
                Email us at
              </TypographyLarge>
              <Link
                href="mailto:support@docuprint.com"
                className="text-blue-700 font-medium"
              >
                support@docuprint.com
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-5 flex flex-col justify-center">
          <TypographyLarge className="font-semibold">
            Send us a message 🚀
          </TypographyLarge>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Page;
