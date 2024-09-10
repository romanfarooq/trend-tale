import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMultiFormContext } from "@/context/MultiFormContext";

export default function TitleDescriptionForm({
  isEditing,
  setIsEditing,
}: {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}) {
  const { title, setTitle, caption, setCaption } = useMultiFormContext();
  return (
    <div className="space-y-6">
      <div>
        <Label
          htmlFor="title"
          className="mb-2 block text-sm font-medium text-gray-200"
        >
          Title
        </Label>
        <Input
          id="title"
          placeholder="Enter the title"
          className="rounded border border-gray-600 bg-gray-900 p-2 text-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          disabled={!isEditing}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <Label
          htmlFor="description"
          className="mb-2 block text-sm font-medium text-gray-200"
        >
          Description
        </Label>
        <Textarea
          id="description"
          placeholder="Enter the description"
          className="resize-y rounded border border-gray-600 bg-gray-900 p-2 text-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          disabled={!isEditing}
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
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
    </div>
  );
}
