import { useMultiFormContext } from "@/context/MultiFormContext";

const baseUrl = import.meta.env.VITE_API_URL;

export default function VideoPlayer() {
  const { videoUrl, title, caption } = useMultiFormContext();
  const video = `${baseUrl}/${videoUrl}`;
  console.log(video);
  return (
    <div className="mx-auto mt-0 max-w-xl p-4 sm:mt-5">
      <video className="h-full w-full rounded-lg" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 className="mb-2 mt-4 text-lg font-bold text-white md:text-2xl">
        {title}
      </h2>
      <p className="text-sm text-gray-200 sm:text-base">{caption}</p>
    </div>
  );
}
