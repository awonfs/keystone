"use client";
import useSearchCharacter from "@/hooks/useSearchCharacter";

function CharacterCard() {
  const { data, isLoading, isError, error } = useSearchCharacter();

  return <div>hi</div>;
}

export default CharacterCard;
