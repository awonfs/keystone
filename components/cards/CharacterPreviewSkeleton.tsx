import { Skeleton } from "@/components/ui/skeleton";

function CharacterPreviewSkeleton() {
  return (
    <div className="container">
      <div className="w-full relative">
        <Skeleton className="h-4 w-4 rounded-full flex items-center absolute top-1 right-2" />
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export default CharacterPreviewSkeleton;
