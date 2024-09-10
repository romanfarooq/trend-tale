import axios from "@/api/axiosInstance";
import { Button } from "@/components/ui/button";
import { useMultiFormContext } from "@/context/MultiFormContext";
import { Edit } from "lucide-react";
import { useEffect, useState } from "react";
import StorySkeleton from "./StorySkeleton";
import StoryTextarea from "./StoryTextarea";

export default function ReviewStory() {
  const [isEditing, setIsEditing] = useState(false);
  const { setStory, loading, selectedTopic, setLoading } =
    useMultiFormContext();

  useEffect(() => {
    async function fetchStory() {
      try {
        const { data } = await axios.get("/generate/story", {
          params: {
            prompt: selectedTopic,
          },
        });
        setStory(data.story);
      } catch (error) {
        console.error("Failed to fetch story:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStory();
  }, [selectedTopic, setStory, setLoading]);

  return (
    <>
      <h2 className="bg-gradient-to-r from-[#ff00cc] via-[#7130c3] to-[#410093] bg-clip-text pt-5 text-2xl font-bold text-transparent">
        Review Story
      </h2>
      {!isEditing && (
        <Button
          onClick={() => setIsEditing(true)}
          disabled={loading}
          className="absolute right-2 top-5 text-gray-400 transition-colors hover:text-gray-200"
        >
          <Edit className="h-5 w-5" />
        </Button>
      )}
      <div className="mt-6">
        {loading ? (
          <StorySkeleton />
        ) : (
          <StoryTextarea isEditing={isEditing} setIsEditing={setIsEditing} />
        )}
      </div>
    </>
  );
}
