"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, XCircle, User } from "lucide-react";
import useDeleteCharacter from "@/utils/hooks/useDeleteCharacter";

type CharacterPreviewCardProps = {
  name: string;
  realm: string;
  id: string;
  region: string;
};

function CharacterPreviewCard({
  name,
  realm,
  id,
  region,
}: CharacterPreviewCardProps) {
  const toast = useToast();
  const deleteCharacter = useDeleteCharacter(id);

  async function handleDelete() {
    try {
      await deleteCharacter.mutateAsync();
      toast.toast({
        title: "Character deleted",
        description: "Character deleted successfully",
        variant: "destructive",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card>
      <CardDescription className="w-full relative mb-2">
        <XCircle
          onClick={handleDelete}
          className="absolute top-1 right-2 hover:opacity-60 hover:cursor-pointer"
        />
      </CardDescription>
      <CardHeader>
        <div className="flex flex-col items-center">
          <User />
          <span className="text-xl text-yellow-400">{`${name
            .charAt(0)
            .toUpperCase()}${name.slice(1)}`}</span>
          <span className="text-xs">{`${realm
            .charAt(0)
            .toUpperCase()}${realm.slice(1)}`}</span>
        </div>
      </CardHeader>
      <CardContent>
        <Button asChild>
          <Link
            href={`/character?name=${name}&realm=${realm}&region=${region}`}
          >
            View character <ArrowRight />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default CharacterPreviewCard;
