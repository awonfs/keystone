import { Skeleton } from "@/components/ui/skeleton";

function CardSkeleton() {
  return (
    <div className="flex flex-col gap-2 items-center space-x-4 p-8 border">
      <Skeleton className="h-12 w-12 rounded-full flex items-center" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[300px]" />
        <div className="flex flex-col items-center justify-center gap-3">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
