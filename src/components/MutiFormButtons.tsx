import { Button } from "@/components/ui/button";
import { useMultiFormContext } from "@/context/MultiFormContext";

export default function MultiFormButtons() {
  const { steps, currentStep, nextStep, prevStep, loading } =
    useMultiFormContext();

  return (
    <div className="mt-5 flex justify-between">
      <Button
        type="button"
        onClick={prevStep}
        disabled={currentStep === 0}
        className="rounded bg-[#070710] px-2 py-1 text-sm font-semibold text-indigo-500 shadow-sm ring-1 ring-inset ring-indigo-300 hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-indigo-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </Button>
      <Button
        type="button"
        onClick={nextStep}
        disabled={currentStep === steps.length - 1 || loading}
        className="rounded bg-[#070710] px-2 py-1 text-sm font-semibold text-indigo-500 shadow-sm ring-1 ring-inset ring-indigo-300 hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-indigo-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </Button>
    </div>
  );
}
