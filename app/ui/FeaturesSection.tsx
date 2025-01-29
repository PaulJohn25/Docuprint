import { TypographyH2 } from "@/components/ui/typography";
import FeatureCard from "@/app/ui/FeatureCard";

const cardItems: {
  title: string;
  description: string;
  imgUrl: string;
  link: { href: string; text: string }[];
}[] = [
  {
    title: "Upload Your Documents Online for Hassle-Free Printing",
    description:
      "Experience the convenience of uploading documents directly to your local print shop.",
    imgUrl: "/uploading-documents.jpg",
    link: [{ href: "/learn-more", text: "Learn More" }],
  },
  {
    title: "Track Your Print Jobs with Ease",
    description:
      "Track your print jobs effortlessly with real-time updates on DocuPrint.",
    imgUrl: "/10838258_4579608.jpg",
    link: [{ href: "/signup", text: "Sign Up" }],
  },
  {
    title: "Convenient Dashboard for Customers and Print Shop Owners",
    description:
      "Manage your printing tasks effortlessly with our user-friendly dashboard.",
    imgUrl: "/7140733_3556960.jpg",
    link: [{ href: "/get-started", text: "Get Started" }],
  },
];

const FeaturesSection = () => {
  return (
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
            link={item.link[0]}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
