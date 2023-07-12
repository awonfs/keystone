import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Character {
  id: string;
  name: string;
  realm: string;
  region: string;
}

export default function useGetusersCharacters() {
  return useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const { data } = await axios.get("/api/get-characters");
      return data as Character[];
    },
  });
}
