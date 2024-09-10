import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMultiFormContext } from "@/context/MultiFormContext";
import { cn } from "@/lib/utils";

export default function Upload() {
  const { thumbnails, selectedThumbnail, setSelectedThumbnail } =
    useMultiFormContext();

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="bg-gradient-to-r from-[#ff00cc] via-[#7130c3] to-[#410093] bg-clip-text pb-6 text-center text-2xl font-bold text-transparent">
        Select a Thumbnail
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
                className="w-full max-w-xs rounded"
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <Button
          className="flex items-center gap-2 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700"
          disabled={!selectedThumbnail}
          onClick={() => {
            if (selectedThumbnail) {
              // Handle upload to YouTube
              console.log("Uploading", selectedThumbnail);
            }
          }}
        >
          Upload Video to YouTube
          <svg
            className="h-5 w-5 pt-[1px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="#ffff"
            stroke="none"
          >
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
