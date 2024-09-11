import axios from "@/api/axiosInstance";
import MultiFormButtons from "@/components/MutiFormButtons";
import ReviewStory from "@/components/ReviewStory";
import ReviewTitle from "@/components/ReviewTitle";
import StepProgress from "@/components/StepProgress";
import Topics from "@/components/Topics";
import Upload from "@/components/Upload";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { useMultiFormContext } from "@/context/MultiFormContext";
import { cn, getInitials } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function MultiForm() {
  const {
    currentStep,
    delta,
    setLoading,
    title,
    caption,
    selectedThumbnail,
    story,
    selectedLanguage,
    selectedVoice,
  } = useMultiFormContext();

  const { user, token, login } = useAuth();
  const navigation = useNavigate();

  useEffect(() => {
    setLoading(true);
  }, [setLoading]);

  function showUploadToast(
    email: string,
    picture: string,
    givenName: string,
    familyName: string,
  ) {
    toast.custom(
      (t) => (
        <div
          className={cn(
            t.visible ? "animate-enter" : "animate-leave",
            "pointer-events-auto flex w-full max-w-md rounded-lg bg-slate-900 shadow-lg ring-1 ring-gray-600",
          )}
        >
          <div className="w-0 flex-1 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <Avatar>
                  <AvatarImage
                    src={picture}
                    className="h-10 w-10 rounded-full"
                    alt="User Avatar"
                  />
                  <AvatarFallback>
                    {getInitials(givenName, familyName)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-3 flex-1">
                <p className="text-lg font-medium text-gray-100">
                  Video Processing
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Your video is being processed. We will notify you at{" "}
                  <span className="text-gray-300">{email}</span> once it's
                  uploaded.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-700">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-400 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ),
      {
        duration: 10000,
      },
    );
  }

  
  function uploadVideo(
    credentials: string,
    email: string,
    picture: string,
    given_name: string,
    family_name: string,
  ) {
    try {
      axios.get("/download/videos", {
        headers: {
          Authorization: `Bearer ${credentials}`,
        },
        params: {
          email: email,
          title: title,
          description: caption,
          thumbnail_url: selectedThumbnail,
          story: story,
          language: selectedLanguage,
          voice: selectedVoice,
        },
      });

      showUploadToast(email, picture, given_name, family_name);
    } catch (error) {
      console.error("Error uploading video:", error);
      toast.error("There was an error uploading your video.");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (user && token) {
      uploadVideo(
        token,
        user.email,
        user.picture,
        user.given_name,
        user.family_name,
      );
      navigation("/");
    } else {
      login();
    }
  }

  return (
    <section
      id="ai-tool"
      className="relative flex flex-col justify-start overflow-x-hidden bg-[#070710]"
    >
      <h1 className="flex h-[25vh] flex-col justify-end p-5 text-center text-xl font-bold text-[#ccceef] md:px-24 md:text-5xl">
        Create Review Titles from Trends with AI
      </h1>

      <div className="flex min-h-[75vh] flex-col justify-between p-5 md:px-24">
        <StepProgress />

        <form onSubmit={handleSubmit}>
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Topics />
            </motion.div>
          )}
          {currentStep === 1 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative"
            >
              <ReviewStory />
            </motion.div>
          )}
          {currentStep === 2 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative"
            >
              <ReviewTitle />
            </motion.div>
          )}
          {currentStep === 3 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Upload />
            </motion.div>
          )}
        </form>

        <MultiFormButtons />
      </div>
    </section>
  );
}
