import { TypographyH2 } from "@/components/ui/typography";
import FeatureCard from "@/app/ui/FeatureCard";
import AnimateSection from "./AnimateSection";
import { FeatureCardItem } from "../types/featureCardItem";

const cardItems: FeatureCardItem[] = [
  {
    title: "Upload Your Documents Online for Hassle-Free Printing",
    description:
      "Experience the convenience of uploading documents directly to your local print shop.",
    imgUrl: "/uploading-documents.jpg",
    link: { href: "/learn-more", text: "Learn More" },
    width: 2000,
    height: 2000,
  },
  {
    title: "Track Your Print Jobs with Ease",
    description:
      "Track your print jobs effortlessly with real-time updates on DocuPrint.",
    imgUrl: "/10838258_4579608.jpg",
    link: { href: "/signup", text: "Sign Up" },
    width: 2000,
    height: 2000,
  },
  {
    title: "Convenient Dashboard for Customers and Print Shop Owners",
    description:
      "Manage your printing tasks effortlessly with our user-friendly dashboard.",
    imgUrl: "/7140733_3556960.jpg",
    link: { href: "/get-started", text: "Get Started" },
    width: 2000,
    height: 2000,
  },
];

const FeaturesSection = () => {
  return (
    <AnimateSection>
      <section className="w-[90%] mx-auto">
        <div className="mt-[5rem]">
          <TypographyH2 className="text-center lg:text-5xl">
            Easily Connect with Local Print Shops for Your Printing Needs
          </TypographyH2>
        </div>
        <div className="flex flex-col justify-center gap-5 mt-10 lg:mt-12 md:flex-row md:gap-8 items-center sm:items-stretch">
          {cardItems.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              urlImg={item.imgUrl}
              link={item.link}
              width={item.width}
              height={item.height}
            />
          ))}
        </div>
      </section>
    </AnimateSection>
  );
};

export default FeaturesSection;
