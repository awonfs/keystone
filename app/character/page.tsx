/* eslint-disable @next/next/no-img-element */
"use client";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CharacterData } from "@/utils/interfaces/characterData";
import { Separator } from "@/components/ui/separator";
import GearCard from "@/components/cards/GearCard";

function CharacterPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const realm = searchParams.get("realm");
  const region = searchParams.get("region");
  const RAIDERIO_CHARACTER_URL = `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=mythic_plus_scores_by_season%3Acurrent%2Cgear%2Cguild%2Cmythic_plus_recent_runs`;

  const { data, isError, isFetching } = useQuery({
    queryKey: ["specific character", { name, realm, region }],
    queryFn: async () => {
      const { data } = await axios.get(RAIDERIO_CHARACTER_URL);
      return data as CharacterData;
    },
  });

  if (isFetching)
    return <div className="container flex justify-center p-8">Loading...</div>;

  if (isError)
    return (
      <div className="flex flex-col items-center justify-center">
        <span className="text-red-500">Cannot find the character</span> Please
        check that you submitted the right information!
      </div>
    );

  if (!data) return <div></div>;

  return (
    <main className="container flex flex-col justify-center items-center mt-6">
      <div className="flex justify-evenly w-full">
        <section id="characterinfo" className="flex gap-4">
          <img
            src={data.thumbnail_url}
            alt="character avatar"
            className="rounded-sm"
          />
          <div>
            <h1 className="text-3xl font-bold">{data.name}</h1>
            {data.guild ? <p>{data.guild.name}</p> : null}
            <p>
              ({data.region?.toUpperCase()}) {data.realm}
            </p>
          </div>
        </section>
        <section
          id="mythicplus"
          className="flex flex-col justify-center border p-2 "
        >
          <h2 className="text-center font-semibold">
            {data.mythic_plus_scores_by_season[0].scores.all}
          </h2>
          <span className="text-purple-500">Mythic+ score</span>
        </section>
      </div>
      <Separator className="my-8 w-2/3" />
      <section id="gear" className="flex gap-4">
        <GearCard gear={data.gear} />
      </section>
    </main>
  );
}

export default CharacterPage;
