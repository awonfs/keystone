import { Button } from "@/components/ui/button";

function MyProfilePage() {
  return (
    <div className="container flex flex-col items-center justify-center">
      <header className="flex items-center justify-evenly w-full mt-4">
        <h1 className="text-4xl font-bold">My Profile</h1>
        <Button>Add a character</Button>
      </header>
    </div>
  );
}

export default MyProfilePage;
