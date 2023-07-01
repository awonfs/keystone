import { atom } from "jotai";

interface CharacterFormData {
  characterName: string;
  realm: string;
  region: string;
}

export const characterFormDataAtom = atom<CharacterFormData>({
  characterName: "",
  realm: "",
  region: "",
});
