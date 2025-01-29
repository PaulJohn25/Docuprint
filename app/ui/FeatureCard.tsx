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
import { ChevronRightIcon } from "@heroicons/react/24/outline";

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
      <div className="relative w-full h-60">
        <Image
          src={urlImg}
          alt={title}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="lg:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="md:text-base">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={link.href}>
            {link.text} <ChevronRightIcon />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
