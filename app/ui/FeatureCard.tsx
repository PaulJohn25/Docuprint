import {
  Card,
  CardContent,
  CardDescription,
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
  width: number;
  height: number;
}

const FeatureCard = ({
  title,
  description,
  urlImg,
  link,
  width,
  height,
}: FeatureCardProps) => {
  return (
    <Card className="overflow-hidden w-full max-w-sm">
      <CardContent className="p-0">
        <div className="grid grid-rows-[1fr,auto] h-full">
          <div className="relative aspect-square">
            <Image
              src={urlImg}
              alt={title}
              width={width}
              height={height}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 p-4">
            <CardTitle className="lg:text-xl">{title}</CardTitle>
            <CardDescription className="md:text-base">
              {description}
            </CardDescription>
            <Button asChild className="self-start">
              <Link href={link.href}>
                {link.text} <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
