/* eslint-disable @next/next/no-img-element */
"use client";
import useSearchCharacter from "@/hooks/useSearchCharacter";

function CharacterCard() {
  const { data, isFetching } = useSearchCharacter();

  if (isFetching) return <div>Loading...</div>;

  if (!data) return <div></div>;

  return (
    <div>
      <>
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
      </>
    </div>
  );
}

export default CharacterCard;
