import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What types of scrap do you deal with?",
      answer: "We handle a wide range of scrap materials, including office scrap, electrical and power scrap, HVAC scrap, ferrous and non-ferrous metal scrap, industrial and mixed scrap, and wooden scrap."
    },
    {
      question: "Do you provide office dismantling services?",
      answer: "Yes. We offer complete office scrap removal and dismantling services, including office furniture dismantling, scrap collection, and reinstatement work as required."
    },
    {
      question: "How do you decide the scrap price?",
      answer: "Scrap prices are based on current market rates, type of material, quantity, condition, and ease of dismantling or removal. We ensure transparent evaluation and fair pricing."
    },
    {
      question: "Do you provide pickup services?",
      answer: "Yes. AK Enterprises provides prompt pickup and removal services for all types of scrap materials at commercial, industrial, and office locations."
    },
    {
      question: "Do you handle electrical and power scrap?",
      answer: "Yes. We deal in UPS and battery scrap, wiring and cable scrap, electrical panels, and other power-related scrap materials, ensuring safe handling and disposal."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-green-600 font-semibold uppercase mb-4 tracking-widest">FAQ</h2>
          <h3 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">Frequently Asked Questions</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Find answers to common questions about our scrap management and recycling services.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-gray-900">
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

