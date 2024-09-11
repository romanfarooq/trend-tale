import { Card, CardContent } from "@/components/ui/card";
import { useMultiFormContext } from "@/context/MultiFormContext";
import { cn } from "@/lib/utils";

export default function TrendingTopics() {
  const { trendingTopics, selectedTopic, setSelectedTopic } =
    useMultiFormContext();

  return (
    <>
      <h2 className="bg-gradient-to-r from-[#ff00cc] via-[#7130c3] to-[#410093] bg-clip-text pb-6 pt-6 text-center text-2xl font-bold text-transparent">
        Select Trending Topic
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {trendingTopics.map((topic) => (
          <Card
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={cn(
              "transform cursor-pointer transition-transform hover:scale-105",
              selectedTopic === topic
                ? "border-indigo-500 bg-indigo-800"
                : "border-gray-700 bg-gray-900",
            )}
          >
            <CardContent className="flex h-full items-center justify-center p-4">
              <h3
                className={cn(
                  "text-center text-lg font-semibold",
                  selectedTopic === topic ? "text-indigo-200" : "text-gray-300",
                )}
              >
                {topic}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
