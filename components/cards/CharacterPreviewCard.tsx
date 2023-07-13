import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, XCircle } from "lucide-react";

type CharacterPreviewCardProps = {
  name: string;
  realm: string;
};

function CharacterPreviewCard({ name, realm }: CharacterPreviewCardProps) {
  return (
    <Card>
      <CardDescription className="w-full relative mb-2">
        <XCircle className="absolute top-1 right-2 hover:opacity-60 hover:cursor-pointer" />
      </CardDescription>
      <CardHeader>
        {name} - {realm}
      </CardHeader>
      <CardContent>
        <Button asChild>
          <Link href={`/character/${realm}/${name}`}>
            View character <ArrowRight />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default CharacterPreviewCard;
