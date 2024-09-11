import { Card, CardContent } from "@/components/ui/card";
import { useMultiFormContext } from "@/context/MultiFormContext";
import { cn } from "@/lib/utils";

export default function Thumbnails() {
  const { thumbnails, selectedThumbnail, setSelectedThumbnail } =
    useMultiFormContext();
  return (
    <>
      {thumbnails.map((thumbnail, index) => (
        <Card
          key={index}
          onClick={() => setSelectedThumbnail(thumbnail)}
          className={cn(
            "cursor-pointer transition-transform duration-200",
            selectedThumbnail === thumbnail
              ? "border-4 border-indigo-500 bg-indigo-800"
              : "border-4 border-gray-700 bg-[#070710]",
          )}
        >
          <CardContent className="p-0">
            <img
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className="w-full max-w-52 rounded"
            />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
