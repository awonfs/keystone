import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import { characterFormDataAtom } from "@/atoms/characterFormDataAtom";
import { wait } from "../functions/wait";
import { CharacterData } from "@/utils/interfaces/characterData";

export default function useSearchCharacter() {
  const [characterFormData] = useAtom(characterFormDataAtom);
  const { characterName, realm, region } = characterFormData;
  const RAIDERIO_CHARACTER_URL = `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${characterName}&fields=mythic_plus_scores_by_season%3Acurrent%2Cgear%2Cguild%2Cmythic_plus_recent_runs`;
  return useQuery({
    queryKey: ["character", characterFormData],
    queryFn: async () => {
      await wait(2000);
      const { data } = await axios.get(RAIDERIO_CHARACTER_URL);
      return data as CharacterData;
    },
    enabled: !!characterName && !!realm && !!region,
  });
}
