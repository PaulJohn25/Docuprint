import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AuthButtonProps {
  href: string;
  text: string;
  variant?: "outline" | "default";
  className?: string;
}

const AuthButton = ({
  href,
  text,
  variant = "default",
  className,
}: AuthButtonProps) => {
  return (
    <Button asChild variant={variant}>
      <Link href={href} className={cn("md:text-base text-sm", className)}>
        {text}
      </Link>
    </Button>
  );
};

export default AuthButton;
