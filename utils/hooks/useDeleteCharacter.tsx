import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function useDeleteCharacter(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => axios.delete(`/api/delete-character?id=${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["characters"]);
    },
  });
}

export default useDeleteCharacter;
