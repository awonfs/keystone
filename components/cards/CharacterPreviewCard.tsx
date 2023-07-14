"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, XCircle } from "lucide-react";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import useGetusersCharacters from "@/utils/hooks/useGetUsersCharacters";
import { wait } from "@/utils/functions/wait";

type CharacterPreviewCardProps = {
  name: string;
  realm: string;
  id: string;
};

function CharacterPreviewCard({ name, realm, id }: CharacterPreviewCardProps) {
  const queryClient = useQueryClient();
  const { data, isFetching } = useGetusersCharacters();

  async function handleDelete() {
    try {
      const res = await axios.delete(`/api/delete-character?id=${id}`);
      await queryClient.invalidateQueries({ queryKey: ["characters"] });
      console.log(res);
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
