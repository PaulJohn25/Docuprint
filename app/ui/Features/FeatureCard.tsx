import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/components/ui/typography";

interface FeatureCardProps {
  title: string;
  description: string;
  urlImg: string;
  link: { href: string; text: string };
}

const FeatureCard = ({
  title,
  description,
  urlImg,
  link,
}: FeatureCardProps) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={urlImg}
          alt="title"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={link.href}>{link.text}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
