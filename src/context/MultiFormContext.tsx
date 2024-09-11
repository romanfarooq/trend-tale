import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { toast } from "react-hot-toast";

type MultiFormContextType = {
  steps: { id: string; name: string }[];
  currentStep: number;
  previousStep: number;
  delta: number;
  nextStep: () => void;
  prevStep: () => void;
  trendingTopics: string[];
  setTrendingTopics: Dispatch<SetStateAction<string[]>>;
  selectedTopic: string;
  setSelectedTopic: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  caption: string;
  setCaption: Dispatch<SetStateAction<string>>;
  videoUrl: string;
  setVideoUrl: Dispatch<SetStateAction<string>>;
  story: string;
  setStory: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  selectedVoice: string;
  setSelectedVoice: Dispatch<SetStateAction<string>>;
  selectedLanguage: string;
  setSelectedLanguage: Dispatch<SetStateAction<string>>;
  thumbnails: string[];
  setThumbnails: Dispatch<SetStateAction<string[]>>;
  selectedThumbnail: string;
  setSelectedThumbnail: Dispatch<SetStateAction<string>>;
};

const MultiFormContext = createContext<MultiFormContextType | null>(null);

export default function MultiFormProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  const [trendingTopics, setTrendingTopics] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [selectedThumbnail, setSelectedThumbnail] = useState("");

  const steps = [
    { id: "Step 1", name: "Topic Selection" },
    { id: "Step 2", name: "Review Story" },
    { id: "Step 3", name: "Review Title" },
    { id: "Step 4", name: "Upload to Youtube" },
  ];
  const delta = currentStep - previousStep;

  const nextStep = () => {
    if (currentStep === 0 && selectedTopic.length === 0) {
      toast.error("Please select a topic to continue");
      return;
    }

    if (currentStep === 1 && story.length === 0) {
      toast.error("Please write a story to continue");
      return;
    }

    if (currentStep === 2 && title.length === 0) {
      toast.error("Please write a title to continue");
      return;
    }

    if (currentStep === 2 && caption.length === 0) {
      toast.error("Please write a description to continue");
      return;
    }

    if (currentStep === 3 && selectedThumbnail.length === 0) {
      toast.error("Please select a thumbnail to continue");
      return;
    }

    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <MultiFormContext.Provider
      value={{
        steps,
        currentStep,
        previousStep,
        delta,
        nextStep,
        prevStep,
        trendingTopics,
        setTrendingTopics,
        selectedTopic,
        setSelectedTopic,
        title,
        setTitle,
        caption,
        setCaption,
        videoUrl,
        setVideoUrl,
        story,
        setStory,
        loading,
        setLoading,
        error,
        setError,
        selectedVoice,
        setSelectedVoice,
        selectedLanguage,
        setSelectedLanguage,
        thumbnails,
        setThumbnails,
        selectedThumbnail,
        setSelectedThumbnail,
      }}
    >
      {children}
    </MultiFormContext.Provider>
  );
}

export const useMultiFormContext = () => {
  const context = useContext(MultiFormContext);
  if (!context) {
    throw new Error(
      "useMultiFormContext must be used within a MultiFormProvider",
    );
  }
  return context;
};
