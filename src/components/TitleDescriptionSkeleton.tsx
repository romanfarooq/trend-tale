import { Skeleton } from "@/components/ui/skeleton";

export default function TitleDescriptionFormSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="mb-2 h-4 w-20 bg-gray-600" />
        <Skeleton className="h-10 w-full rounded bg-gray-700" />
      </div>

      <div>
        <Skeleton className="mb-2 h-4 w-28 bg-gray-600" />
        <Skeleton className="h-24 w-full rounded bg-gray-700" />
      </div>
    </div>
  );
}
