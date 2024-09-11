import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMultiFormContext } from "@/context/MultiFormContext";

const voiceOptions = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"];
const languageOptions = [
  "Afrikaans",
  "Arabic",
  "Armenian",
  "Azerbaijani",
  "Belarusian",
  "Bosnian",
  "Bulgarian",
  "Catalan",
  "Chinese",
  "Croatian",
  "Czech",
  "Danish",
  "Dutch",
  "English",
  "Estonian",
  "Finnish",
  "French",
  "Galician",
  "German",
  "Greek",
  "Hebrew",
  "Hindi",
  "Hungarian",
  "Icelandic",
  "Indonesian",
  "Italian",
  "Japanese",
  "Kannada",
  "Kazakh",
  "Korean",
  "Latvian",
  "Lithuanian",
  "Macedonian",
  "Malay",
  "Marathi",
  "Maori",
  "Nepali",
  "Norwegian",
  "Persian",
  "Polish",
  "Portuguese",
  "Romanian",
  "Russian",
  "Serbian",
  "Slovak",
  "Slovenian",
  "Spanish",
  "Swahili",
  "Swedish",
  "Tagalog",
  "Tamil",
  "Thai",
  "Turkish",
  "Ukrainian",
  "Urdu",
  "Vietnamese",
  "Welsh",
];

export default function StoryTextarea({
  isEditing,
  setIsEditing,
}: {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}) {
  const {
    story,
    setStory,
    selectedVoice,
    setSelectedVoice,
    selectedLanguage,
    setSelectedLanguage,
  } = useMultiFormContext();
  return (
    <>
      <Textarea
        id="textField"
        value={story}
        disabled={!isEditing}
        onChange={(e) => setStory(e.target.value)}
        className="relative min-h-32 w-full resize-y rounded border border-gray-600 bg-gray-900 p-2 text-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
      />
      <div className="mt-4 flex flex-row gap-4">
        <div className="flex w-1/2 flex-col gap-2">
          <Label className="text-gray-400">Voices</Label>
          <Select value={selectedVoice} onValueChange={setSelectedVoice}>
            <SelectTrigger className="border-gray-600 bg-gray-900 text-gray-300">
              {selectedVoice || "Select a voice"}
            </SelectTrigger>
            <SelectContent className="border-gray-600 bg-[#070710] text-gray-300">
              {voiceOptions.map((voice) => (
                <SelectItem key={voice} value={voice}>
                  {voice}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-1/2 flex-col gap-2">
          <Label className="text-gray-400">Languages</Label>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="border-gray-600 bg-gray-900 text-gray-300">
              {selectedLanguage || "Select a language"}
            </SelectTrigger>
            <SelectContent className="border-gray-600 bg-[#070710] text-gray-300">
              {languageOptions.map((language) => (
                <SelectItem key={language} value={language}>
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {isEditing && (
        <div className="mt-4 flex gap-2">
          <Button
            onClick={() => setIsEditing(false)}
            variant="default"
            className="bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Save
          </Button>
          <Button
            onClick={() => setIsEditing(false)}
            variant="secondary"
            className="bg-gray-700 text-gray-300 hover:bg-gray-600"
          >
            Cancel
          </Button>
        </div>
      )}
    </>
  );
}
