import { useMultiFormContext } from "@/context/MultiFormContext";

export default function StepProgress() {
  const { steps, currentStep } = useMultiFormContext();

  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step, index) => (
          <li key={step.name} className="md:flex-1">
            {currentStep > index ? (
              <div className="group flex w-full flex-col border-l-4 border-[#ff00cc] py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-[#ff00cc] transition-colors">
                  {step.id.toUpperCase()}
                </span>
                <span className="text-sm font-medium text-white">
                  {step.name}
                </span>
              </div>
            ) : currentStep === index ? (
              <div
                className="flex w-full flex-col border-l-4 border-[#ff00cc] py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                aria-current="step"
              >
                <span className="text-sm font-medium text-[#ff00cc]">
                  {step.id.toUpperCase()}
                </span>
                <span className="text-sm font-medium text-white">
                  {step.name}
                </span>
              </div>
            ) : (
              <div className="group flex w-full flex-col border-l-4 border-gray-700 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-gray-500 transition-colors">
                  {step.id.toUpperCase()}
                </span>
                <span className="text-sm font-medium text-gray-400">
                  {step.name}
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
