import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questionsData = [
  {
    question: "How does TrendTale work?",
    answer:
      "TrendTale allows users to select from trending topics, let AI craft captivating stories, turn those stories into videos, and automatically upload them to YouTube. It's a seamless process designed to streamline content creation.",
  },
  {
    question: "What kind of topics can I choose from?",
    answer:
      "You can select from a wide range of trending topics that are curated to be relevant and engaging. Our AI ensures that the stories created are tailored to the selected topics.",
  },
  {
    question: "How long does it take to generate a video?",
    answer:
      "The time it takes to generate a video depends on the complexity of the story and video. Typically, the process is quick, allowing you to go from topic selection to video upload in a matter of minutes.",
  },
  {
    question: "Can I customize the generated videos?",
    answer:
      "Currently, the videos are generated automatically based on the story crafted by AI. However, we are working on adding customization features in future updates.",
  },
  {
    question: "Is there a limit to the number of videos I can create?",
    answer:
      "There is no limit to the number of videos you can create with TrendTale. Feel free to generate as many videos as you need.",
  },
  {
    question: "How does TrendTale handle copyright and content ownership?",
    answer:
      "All generated content is owned by you. TrendTale ensures that your videos and stories are unique and compliant with copyright regulations.",
  },
];

export default function FAQs() {
  return (
    <section id="faqs" className="bg-[#111025] py-12 text-white">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <div className="mb-8 flex items-center justify-center">
          <div className="mx-4 h-0.5 w-24 bg-white" />
          <h1 className="text-xl font-bold">FAQ's</h1>
          <div className="mx-4 h-0.5 w-24 bg-white" />
        </div>
        <h2 className="mb-12 text-3xl font-semibold md:text-4xl">
          Questions? We Have <br /> Answers.
        </h2>
        <Accordion type="single" collapsible>
          {questionsData.map((item, index) => (
            <AccordionItem
              className="border-[#7064e9]"
              key={index}
              value={`faq-${index}`}
            >
              <AccordionTrigger className="text-start text-base font-semibold text-[#7064e9] hover:no-underline sm:text-lg md:text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-start text-[#7376aa]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
