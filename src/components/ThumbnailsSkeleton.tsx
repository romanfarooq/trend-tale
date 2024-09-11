import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ThumbnailsSkeleton({ length }: { length: number }) {
  return (
    <>
      {[...Array(length)].map((_, index) => (
        <Card
          key={index}
          className="cursor-pointer border-4 border-gray-700 bg-[#070710] transition-transform duration-200"
        >
          <CardContent className="p-0">
            <Skeleton className="h-52 w-52 rounded bg-gray-700" />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
