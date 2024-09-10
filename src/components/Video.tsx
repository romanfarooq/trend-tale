import { useMultiFormContext } from "@/context/MultiFormContext";
import { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import VideoPlayerSkeleton from "./VideoPlayerSkeleton";
import axios from "@/api/axiosInstance";

export default function Video() {
  const {
    story,
    title,
    loading,
    setTitle,
    setLoading,
    setVideoUrl,
    selectedLanguage,
    selectedVoice,
    setThumbnails,
    setCaption,
  } = useMultiFormContext();

  useEffect(() => {
    async function fetchTitle() {
      try {
        const { data } = await axios.get("/title", {
          params: {
            text: story,
          },
        });
        setTitle(data.title);
        setCaption(data.description);
        console.log(data);
      } catch (error) {
        console.error("Error fetching title:", error);
        throw error;
      }
    }

    async function fetchThumbnails() {
      try {
        const requests = new Array(3)
          .fill(null)
          .map(() =>
            axios.post(
              "/generate_thumbnail?script=" + story + "&title=" + title,
            ),
          );
        const responses = await Promise.all(requests);
        const thumbnails = responses.map(
          (response) => response.data.thumbnail_url,
        );
        setThumbnails(thumbnails);
        console.log(thumbnails);
      } catch (error) {
        console.error("Error fetching thumbnails:", error);
        throw error;
      }
    }

    async function fetchVideo() {
      try {
        const { data } = await axios.get("/download/videos", {
          params: {
            story: story,
            language: selectedLanguage === "English" ? "" : selectedLanguage,
            voice: selectedVoice,
          },
        });
        setVideoUrl(data.result);
      } catch (error) {
        console.error("Error fetching video:", error);
        throw error;
      }
    }

    async function fetchData() {
      try {
        await Promise.all([fetchTitle(), fetchThumbnails(), fetchVideo()]);
      } catch (error) {
        console.error("One or both fetch operations failed:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [setLoading, setTitle, setVideoUrl]);

  return loading ? <VideoPlayerSkeleton /> : <VideoPlayer />;
}
