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
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import CardSkeleton from "./CardSkeleton";
import RecentRuns from "./RecentRuns";

function CharacterCard() {
  const { data, isFetching, isError } = useSearchCharacter();

  if (isFetching)
    return (
      <div className="p-8">
        <CardSkeleton />
      </div>
    );

  if (isError)
    return (
      <div className="flex flex-col items-center justify-center">
        <span className="text-red-500">Cannot find the character</span> Please
        check that you submitted the right information!
      </div>
    );

  if (!data) return <div></div>;

  return (
    <div className="p-8">
      <Card className="flex flex-col items-center border ">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="h-25 w-25 mb-2">
            <AvatarImage src={data?.thumbnail_url} />
          </Avatar>
          <CardTitle>
            {data?.name} - {data?.realm}
          </CardTitle>
          <CardDescription>
            <span className="text-yellow-500">
              {" "}
              {`${data?.race} ${data?.active_spec_name} ${data?.class}`}
            </span>
          </CardDescription>
          {data?.guild ? (
            <CardDescription>{data?.guild.name}</CardDescription>
          ) : (
            <CardDescription>Character has no guild</CardDescription>
          )}
        </CardHeader>
        <Separator className="w-1/2" />
        <CardContent className="flex flex-col gap-1 items-center mt-4">
          <span className="text-green-500">{`${data?.gear.item_level_equipped} Item level`}</span>
          <p>{`${data?.achievement_points} Achievement points`}</p>
        </CardContent>
        <CardFooter>
          <span className="text-purple-600">{`Mythic+ score: ${data?.mythic_plus_scores_by_season[0].scores.all}`}</span>
        </CardFooter>
      </Card>
      <RecentRuns recentRuns={data?.mythic_plus_recent_runs} />
    </div>
  );
}

export default CharacterCard;
