"use client";
import useSearchCharacter from "@/hooks/useSearchCharacter";

function CharacterCard() {
  const { data, isLoading } = useSearchCharacter();

  return <div>{isLoading ? <div>Loading...</div> : JSON.stringify(data)}</div>;
}

export default CharacterCard;
