"use client";
import AddCharacterModal from "@/components/AddCharacterModal";
import useGetusersCharacters from "@/utils/hooks/useGetUsersCharacters";
import CharacterPreviewCard from "@/components/cards/CharacterPreviewCard";

function MyProfilePage() {
  const { data: characters } = useGetusersCharacters();

  return (
    <div className="container flex flex-col items-center justify-center">
      <header className="flex items-center justify-evenly w-full mt-4">
        <h1 className="text-4xl font-bold">My Profile</h1>
        <AddCharacterModal />
      </header>
      <main className="grid grid-cols-3 gap-4 mt-6">
        {characters?.map((character) => {
          return (
            <CharacterPreviewCard
              key={character.id}
              name={character.name}
              realm={character.realm}
              id={character.id}
              region={character.region}
            />
          );
        })}
      </main>
    </div>
  );
}

export default MyProfilePage;
