import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AddCharacterForm from "./forms/AddCharacterForm";

function AddCharacterModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add a character</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new character</DialogTitle>
          <DialogDescription>
            Add your characters name, realm and region to get started.
          </DialogDescription>
        </DialogHeader>
        <AddCharacterForm />
      </DialogContent>
    </Dialog>
  );
}

export default AddCharacterModal;
