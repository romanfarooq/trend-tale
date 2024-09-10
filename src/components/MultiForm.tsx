import { useMultiFormContext } from "@/context/MultiFormContext";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MultiFormButtons from "./MutiFormButtons";
import StepProgress from "./StepProgress";
import Story from "./Story";
import Topics from "./Topics";
import Upload from "./Upload";
import Video from "./Video";

export default function MultiForm() {
  const { currentStep, delta, setLoading } = useMultiFormContext();

  useEffect(() => {
    setLoading(true);
  }, [setLoading]);

  const navigation = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigation("/");
  }

  return (
    <section
      id="ai-tool"
      className="relative flex flex-col justify-start overflow-x-hidden bg-[#070710]"
    >
      <h1 className="flex h-[25vh] flex-col justify-end p-5 text-center text-xl font-bold text-[#ccceef] md:px-24 md:text-5xl">
        Create Videos from Trends with AI
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
              <Story />
            </motion.div>
          )}
          {currentStep === 2 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Video />
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
