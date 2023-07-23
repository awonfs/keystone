import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import { characterFormDataAtom } from "@/atoms/characterFormDataAtom";

export interface CharacterData {
  name: string | undefined;
  race: string | undefined;
  class: string | undefined;
  active_spec_name: string | undefined;
  achievement_points: number | undefined;
  thumbnail_url: string | undefined;
  region: string | undefined;
  realm: string | undefined;
  mythic_plus_scores_by_season: [
    {
      season: number | undefined;
      scores: {
        all: number | undefined;
      };
    }
  ];
  guild: {
    name: string | undefined | null;
    realm: string | undefined | null;
  };
  gear: {
    item_level_equipped: number | undefined;
  };
  mythic_plus_recent_runs: [
    {
      dungeon: string | undefined;
      short_name: string | undefined;
      mythic_level: number | undefined;
      num_keystone_upgrades: number | undefined;
    }
  ];
}

function wait() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function useSearchCharacter() {
  const [characterFormData] = useAtom(characterFormDataAtom);
  const { characterName, realm, region } = characterFormData;
  const RAIDERIO_CHARACTER_URL = `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${characterName}&fields=mythic_plus_scores_by_season%3Acurrent%2Cgear%2Cguild%2Cmythic_plus_recent_runs`;
  return useQuery({
    queryKey: ["character", characterFormData],
    queryFn: async () => {
      await wait();
      const { data } = await axios.get(RAIDERIO_CHARACTER_URL);
      return data as CharacterData;
    },
    enabled: !!characterName && !!realm && !!region,
  });
}
