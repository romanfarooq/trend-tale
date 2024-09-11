import Card from "@/components/Card";

const CardData = [
  {
    title: "Trend to Video in Minutes",
    description:
      "Select a trending topic and watch as TrendTale transforms it into a captivating video story.",
    imgPath: "/src/assets/video-generation.png",
  },
  {
    title: "AI-Generated Stories",
    description:
      "Our AI generates stories that are engaging, informative, and tailored to the selected topic.",
    imgPath: "/src/assets/story-generation.png",
  },
  {
    title: "Automatic Video Upload",
    description:
      "Once the video is created, TrendTale automatically uploads it to your YouTube channel.",
    imgPath: "/src/assets/youtube-upload.png",
  },
  {
    title: "Customizable Stories",
    description:
      "Edit the stories created by AI to add a personal touch or make them more relevant to your audience.",
    imgPath: "/src/assets/story-edit.png",
  },
];

export default function About() {
  return (
    <div id="about" className="bg-[#111025] pt-6">
      <h1 className="px-6 pb-5 text-center text-2xl font-bold text-white sm:pb-0 sm:text-3xl md:text-lg lg:text-3xl xl:text-4xl">
        Turn any Trending Topic to
        <br />
        <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          video, instantly
        </span>
      </h1>
      <div className="grid grid-cols-1 gap-5 px-4 sm:p-10 md:gap-10">
        {CardData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            imgPath={item.imgPath}
          />
        ))}
      </div>
    </div>
  );
}
