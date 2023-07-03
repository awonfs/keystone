import SearchCharacterForm from "@/components/SearchCharacterForm";
import CharacterInfo from "@/components/CharacterInfo";

function SearchCharactersPage() {
  return (
    <main className="container flex flex-col h-screen mt-4">
      <h1 className="mb-2">Search for a character</h1>
      <div className="flex gap-4">
        <div className="w-1/2 border p-8">
          <SearchCharacterForm />
        </div>
        <div className="w-1/2">
          <CharacterInfo />
        </div>
      </div>
    </main>
  );
}

export default SearchCharactersPage;
