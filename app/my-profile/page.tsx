"use client";
import AddCharacterModal from "@/components/AddCharacterModal";
import useGetusersCharacters from "@/hooks/useGetUsersCharacters";

function MyProfilePage() {
  const { data: characters } = useGetusersCharacters();
  console.log(characters);
  return (
    <div className="container flex flex-col items-center justify-center">
      <header className="flex items-center justify-evenly w-full mt-4">
        <h1 className="text-4xl font-bold">My Profile</h1>
        <AddCharacterModal />
      </header>
      <main className="grid grid-cols-3 gap-2">
        {characters?.map((character) => {
          return (
            <div
              key={character.id}
              className="flex flex-col items-center justify-center"
            >
              <h2 className="text-xl font-bold">{character.name}</h2>
              <h3 className="text-lg font-bold">{character.realm}</h3>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default MyProfilePage;
