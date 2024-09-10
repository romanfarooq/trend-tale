import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@/components/ui/label";

export default function StorySkeleton() {
  return (
    <div className="mt-6">
      <Skeleton className="h-32 w-full rounded border-gray-600 bg-gray-800" />
      <div className="mt-4 flex flex-row gap-4">
        <div className="flex w-1/2 flex-col gap-2">
          <Label className="text-gray-400">Voices</Label>
          <Skeleton className="h-10 w-full rounded border-gray-600 bg-gray-800" />
        </div>
        <div className="flex w-1/2 flex-col gap-2">
          <Label className="text-gray-400">Languages</Label>
          <Skeleton className="h-10 w-full rounded border-gray-600 bg-gray-800" />
        </div>
      </div>
    </div>
  );
}
