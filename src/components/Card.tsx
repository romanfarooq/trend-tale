import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Card({
  title,
  description,
  imgPath,
}: {
  title: string;
  description: string;
  imgPath: string;
}) {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden rounded-3xl bg-black">
      <div className="flex h-full flex-col sm:flex sm:flex-col md:flex md:flex-col lg:grid lg:grid-cols-12 xl:grid xl:grid-cols-12">
        <div className="flex h-full flex-col justify-between px-6 py-10 sm:col-span-12 md:flex-1 md:px-8 lg:col-span-5 lg:px-12 xl:col-span-5 xl:px-12">
          <div>
            <h3 className="mb-4 text-lg font-extrabold text-white sm:text-xl md:text-2xl lg:text-3xl">
              {title}
            </h3>
            <p className="mb-6 text-sm font-semibold text-gray-300 sm:text-base md:text-lg lg:text-xl">
              {description}
            </p>
          </div>
          <div className="mb-0 lg:mb-10">
            <Button
              className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 ease-in-out hover:bg-blue-600 sm:text-base md:text-lg xl:text-xl"
              type="button"
              onClick={() => navigate("/generate")}
            >
              Generate a video
            </Button>
          </div>
        </div>
        <div className="sm:order-1 sm:col-span-12 md:flex-1 lg:col-span-7 xl:col-span-7">
          <div className="relative flex h-full justify-end overflow-hidden">
            <img
              className="h-auto max-h-96 w-full bg-purple-700 object-contain"
              src={imgPath}
              alt="Video Creation Example"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
