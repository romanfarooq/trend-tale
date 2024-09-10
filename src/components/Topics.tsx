import { useMultiFormContext } from "@/context/MultiFormContext";
import { useEffect } from "react";
import TrendingTopics from "./TrendingTopics";
import TrendingTopicsSkeleton from "./TrendingTopicsSkeleton";

export default function Topics() {
  const { setTrendingTopics, loading, setLoading } = useMultiFormContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTrendingTopics([
        "React",
        "Vue",
        "Angular",
        "Svelte",
        "Ember",
        "Backbone",
        "Preact",
        "Solid",
        "Alpine",
        "Marko",
      ]);
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <TrendingTopicsSkeleton /> : <TrendingTopics />;
}
