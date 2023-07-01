import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function CharacterCard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["character"],
    queryFn: async () => {
      // todo fetch character data
    },
  });

  return <div>CharacterCard</div>;
}

export default CharacterCard;
