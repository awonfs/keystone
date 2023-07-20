import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type CreateCharacterInput = {
  characterName: string;
  realm: string;
  region: string;
};

function useCreateCharacter() {
  const queryClient = useQueryClient();
  return useMutation(
    (values: CreateCharacterInput) =>
      axios.post("/api/create", {
        name: values.characterName,
        realm: values.realm,
        region: values.region,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["characters"] });
      },
    }
  );
}

export default useCreateCharacter;
