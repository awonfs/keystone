import SearchCharacterForm from "@/components/SearchCharacterForm";
import CharacterCard from "@/components/CharacterCard";

function SearchCharactersPage() {
  return (
    <main className="container flex flex-col h-screen mt-4">
      <h1>Search for a character</h1>
      <div className="flex gap-4">
        <div className="w-1/2 border border-dashed border-gray-300 p-8">
          <SearchCharacterForm />
        </div>
        <CharacterCard />
      </div>
    </main>
  );
}

export default SearchCharactersPage;
