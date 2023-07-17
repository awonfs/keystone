"use client";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function CharacterPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const realm = searchParams.get("realm");
  const region = searchParams.get("region");
  const RAIDERIO_CHARACTER_URL = `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=mythic_plus_scores_by_season%3Acurrent%2Cgear%2Cguild%2Cmythic_plus_recent_runs`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["specific character", { name, realm, region }],
    queryFn: async () => {
      //TODO: Fetch character data from the raider.io API
      const { data } = await axios.get(RAIDERIO_CHARACTER_URL);
      return data;
    },
  });

  return (
    <div className="container flex flex-col justify-center items-center mt-6">
      <h1 className="text-3xl font-bold">Character</h1>
      <p className="text-xl">Name: {name}</p>
      <p className="text-xl">Realm: {realm}</p>
      <p className="text-xl">Region: {region}</p>
    </div>
  );
}

export default CharacterPage;
