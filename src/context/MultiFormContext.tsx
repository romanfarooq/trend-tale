import { useToast } from "@/hooks/use-toast";
import { createContext, useContext, useState } from "react";

type MultiFormContextType = {
  steps: { id: string; name: string }[];
  currentStep: number;
  previousStep: number;
  delta: number;
  nextStep: () => void;
  prevStep: () => void;
  trendingTopics: string[];
  setTrendingTopics: React.Dispatch<React.SetStateAction<string[]>>;
  selectedTopic: string;
  setSelectedTopic: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  caption: string;
  setCaption: React.Dispatch<React.SetStateAction<string>>;
  videoUrl: string;
  setVideoUrl: React.Dispatch<React.SetStateAction<string>>;
  story: string;
  setStory: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  selectedVoice?: string;
  setSelectedVoice: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedLanguage?: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string | undefined>>;
  thumbnails: string[];
  setThumbnails: React.Dispatch<React.SetStateAction<string[]>>;
  selectedThumbnail: string;
  setSelectedThumbnail: React.Dispatch<React.SetStateAction<string>>;
};

const MultiFormContext = createContext<MultiFormContextType | null>(null);

export default function MultiFormProvider({
  children,
}: {
  children: React.ReactNode;
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
  const [selectedVoice, setSelectedVoice] = useState<string | undefined>(
    undefined,
  );
  const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>(
    undefined,
  );
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [selectedThumbnail, setSelectedThumbnail] = useState("");

  const { toast } = useToast();

  const steps = [
    { id: "Step 1", name: "Topic Selection" },
    { id: "Step 2", name: "Review Story" },
    { id: "Step 3", name: "Video Generation" },
    { id: "Step 4", name: "Upload to Youtube" },
  ];
  const delta = currentStep - previousStep;

  const nextStep = () => {
    if (currentStep === 0 && selectedTopic.length === 0) {
      toast({
        title: "Action Required",
        description: "Please select a topic before proceeding.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

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
