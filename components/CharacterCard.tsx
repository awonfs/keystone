/* eslint-disable @next/next/no-img-element */
"use client";
import useSearchCharacter from "@/hooks/useSearchCharacter";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function CharacterCard() {
  const { data, isFetching } = useSearchCharacter();

  if (isFetching) return <div>Loading...</div>;

  if (!data) return <div></div>;

  return (
    <div className="border border-dashed border-red-500 p-8">
      <Card className="flex flex-col items-center">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="h-25 w-25 mb-2">
            <AvatarImage src={data?.thumbnail_url} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardTitle>
            {data?.name} - {data?.realm}
          </CardTitle>
          <CardDescription>
            {`${data?.race} ${data?.active_spec_name} ${data?.class}`}
          </CardDescription>
          <CardDescription>{data?.guild.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      {/* <>
        <img
          className="rounded-full"
          src={data?.thumbnail_url}
          alt="character thumbnail"
        />
        <p>
          {data?.name} - {data?.active_spec_name}
          {" " + data?.class}
        </p>
        <p>
          {data?.realm} - {data?.region}
        </p>
        <p>{data?.achievement_points} Achievement Points</p>
        <p>{data?.mythic_plus_scores_by_season[0].scores.all} Mythic+ Score</p>
        <p>
          {data?.guild.name} - {data?.guild.realm}
        </p>
      </> */}
    </div>
  );
}

export default CharacterCard;
