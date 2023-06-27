import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const RAIDERIO_AFFIX_URL =
  "https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en";

interface AffixData {
  title: string;
  region: string;
  affix_details: [{}];
}

export default function useAffix() {
  return useQuery({
    queryKey: ["affixes"],
    queryFn: async () => {
      const { data } = await axios.get(RAIDERIO_AFFIX_URL);
      return data as AffixData;
    },
  });
}
