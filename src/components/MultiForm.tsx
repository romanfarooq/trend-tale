import axios from "@/api/axiosInstance";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/context/AuthContext";
import { useMultiFormContext } from "@/context/MultiFormContext";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MultiFormButtons from "./MutiFormButtons";
import ReviewStory from "./ReviewStory";
import ReviewTitle from "./ReviewTitle";
import StepProgress from "./StepProgress";
import Topics from "./Topics";
import Upload from "./Upload";

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
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [setLoading]);

  async function uploadVideo(credentials: string, email: string) {
    try {
      await axios.get("/download/videos", {
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
      toast({
        title: "Video uploaded",
        description:
          "You will be notified by email once the video is processed.",
        variant: "default",
      });
      // setIsDialogOpen(true);
    } catch (error) {
      console.error("Error uploading video:", error);
      toast({
        title: "Error",
        description: "Failed to upload video.",
        variant: "destructive",
      });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (user && token) {
      uploadVideo(token, user.email);
    } else {
      login();
      if (user && token) {
        uploadVideo(token, user.email);
      } else {
        console.error("Login failed or token not found");
      }
    }

    navigation("/");
  }

  function handleCloseDialog() {
    setIsDialogOpen(false);
    navigation("/");
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

      {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTitle>Upload Successful</DialogTitle>
        <DialogContent>
          Your video is being processed. We will notify you at {user?.email}{" "}
          once it's ready.
        </DialogContent>
        <DialogTrigger>
          <Button onClick={handleCloseDialog}>OK</Button>
        </DialogTrigger>
      </Dialog> */}
    </section>
  );
}
