import axios from "@/api/axiosInstance";
import TitleDescriptionForm from "@/components/TitleDescriptionForm";
import TitleDescriptionSkeleton from "@/components/TitleDescriptionSkeleton";
import { Edit } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useMultiFormContext } from "@/context/MultiFormContext";

export default function Video() {
  const [isEditing, setIsEditing] = useState(false);
  const { story, loading, setTitle, setLoading, setCaption } =
    useMultiFormContext();

  useEffect(() => {
    async function fetchTitle() {
      try {
        setLoading(true);
        const { data } = await axios.get("/title", {
          params: {
            text: story,
          },
        });
        setTitle(data.title);
        setCaption(data.description);
      } catch (error) {
        console.error("Error fetching title:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTitle();
  }, [setLoading, setTitle, setCaption, story]);

  return (
    <>
      <h2 className="bg-linear-to-r from-[#ff00cc] via-[#7130c3] to-[#410093] bg-clip-text pt-5 text-2xl font-bold text-transparent">
        Review Title & Description
      </h2>
      {!isEditing && (
        <Button
          disabled={loading}
          onClick={() => setIsEditing(true)}
          className="absolute right-2 top-5 text-gray-400 transition-colors hover:text-gray-200"
        >
          <Edit className="h-5 w-5" />
        </Button>
      )}
      <div className="mt-6">
        {loading ? (
          <TitleDescriptionSkeleton />
        ) : (
          <TitleDescriptionForm
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
    </>
  );
}
