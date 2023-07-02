import { atom } from "jotai";

export interface CharacterFormData {
  characterName: string | null;
  realm: string | null;
  region: string | null;
}

export const characterFormDataAtom = atom<CharacterFormData>({
  characterName: "",
  realm: "",
  region: "",
});
