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

  const {
    name,
    race,
    class: className,
    active_spec_name,
    achievement_points,
    thumbnail_url,
    realm,
    mythic_plus_recent_runs,
    guild: { name: guildName = "" } = {},
    gear: { item_level_equipped = 0 } = {},
    mythic_plus_scores_by_season: [
      { scores: { all: mythicPlusScore = 0 } = {} } = {},
    ] = [],
  } = data;

  return (
    <div className="p-8">
      <Card className="flex flex-col items-center border ">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="h-25 w-25 mb-2">
            <AvatarImage src={thumbnail_url} />
          </Avatar>
          <CardTitle>
            {name} - {realm}
          </CardTitle>
          <CardDescription>
            {`${race} ${active_spec_name} ${className}`}
          </CardDescription>
          <CardDescription>{guildName}</CardDescription>
        </CardHeader>
        <Separator className="w-1/2" />
        <CardContent className="flex flex-col gap-1 items-center mt-4">
          <p>{`${item_level_equipped} Item level`}</p>
          <p>{`${achievement_points} Achievement points`}</p>
        </CardContent>
        <CardFooter>
          <span className="text-purple-600">{`Mythic+ score: ${mythicPlusScore}`}</span>
        </CardFooter>
      </Card>
      <RecentRuns recentRuns={mythic_plus_recent_runs} />
    </div>
  );
}

export default CharacterCard;
