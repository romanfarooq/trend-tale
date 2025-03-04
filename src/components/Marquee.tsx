import { Marquee } from "@/components/magicui/marquee";
import { Card, CardContent } from "@/components/ui/card";

const functionalities = [
  "Select Trending Topic",
  "Specify Video Duration",
  "AI Generates Story",
  "Review Story",
  "AI Generates Title",
  "AI Generates Description",
  "Review Title and Description",
  "AI Generates Thumbnails",
  "Select Thumbnail",
  "Upload Video to YouTube",
  "Select AI Voice",
  "Select Video Language",
];

const firstRow = functionalities.slice(0, functionalities.length / 2);
const secondRow = functionalities.slice(functionalities.length / 2);

const FunctionalityCard = ({ functionality }: { functionality: string }) => {
  return (
    <Card className="w-64 cursor-pointer rounded-full border-[#0d0d1f] bg-[#0d0d1f] transition-transform duration-200 hover:scale-105">
      <CardContent className="py-6">
        <h3 className="text-center text-white">{functionality}</h3>
      </CardContent>
    </Card>
  );
};

export default function MarqueeItem() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#070710] py-10 md:shadow-xl">
      <Marquee pauseOnHover>
        {firstRow.map((func, index) => (
          <FunctionalityCard key={index} functionality={func} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover>
        {secondRow.map((func, index) => (
          <FunctionalityCard key={index} functionality={func} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-[#070710]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-[#070710]"></div>
    </div>
  );
}
