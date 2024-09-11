import axios from "@/api/axiosInstance";
import TrendingTopics from "@/components/TrendingTopics";
import TrendingTopicsSkeleton from "@/components/TrendingTopicsSkeleton";
import { useMultiFormContext } from "@/context/MultiFormContext";
import { useEffect } from "react";

export default function Topics() {
  const { setTrendingTopics, loading, setLoading } = useMultiFormContext();

  useEffect(() => {
    async function fetchTrendingTopics() {
      try {
        const { data } = await axios.get("/trending-searches");
        setTrendingTopics(data.top_trending_searches);
      } catch (error) {
        console.error("Error fetching trending topics:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingTopics();
  }, [setLoading, setTrendingTopics]);

  return loading ? <TrendingTopicsSkeleton /> : <TrendingTopics />;
}
