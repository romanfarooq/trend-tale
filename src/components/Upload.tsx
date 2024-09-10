import { Button } from "@/components/ui/button";
import { useMultiFormContext } from "@/context/MultiFormContext";
import { useEffect } from "react";
import axios from "@/api/axiosInstance";
import Thumbnails from "./Thumbnails";
import ThumbnailsSkeleton from "./ThumbnailsSkeleton";

export default function Upload() {
  const {
    selectedThumbnail,
    setThumbnails,
    story,
    title,
    loading,
    setLoading,
  } = useMultiFormContext();

  useEffect(() => {
    async function fetchThumbnails() {
      try {
        const requests = Array.from({ length: 3 }, () =>
          axios.post(
            `/generate_thumbnail?script=${encodeURIComponent(story)}"&title=${encodeURIComponent(title)}`,
          ),
        );
        const responses = await Promise.all(requests);
        const thumbnails = responses.map(
          (response) => response.data.thumbnail_url,
        );
        setThumbnails(thumbnails);
      } catch (error) {
        console.error("Error fetching thumbnails:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchThumbnails();
  }, [story, title, setThumbnails]);

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="bg-gradient-to-r from-[#ff00cc] via-[#7130c3] to-[#410093] bg-clip-text pb-6 text-center text-2xl font-bold text-transparent">
        Select a Thumbnail
      </h2>

      {loading ? <ThumbnailsSkeleton /> : <Thumbnails />}

      <div className="mt-4">
        <Button
          className="flex items-center gap-2 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700"
          disabled={!selectedThumbnail}
          type="submit"
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
