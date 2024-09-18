import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Details = async ({ params }: { params: { id: string } }) => {
  let photo;
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${params.id}`,
      { cache: "no-store" }
    );
    const res = await data.json();
    photo = res;
  } catch (error: any) {
    throw new Error(error);
  }
  console.log(photo);

  const faq = [
    {
      ques: "Question 1?",
      ans: "answer 1",
    },
    {
      ques: "Question 2?",
      ans: "answer 2",
    },
    {
      ques: "Question 3?",
      ans: "answer 3",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-6">
      <Image alt="" src={photo.url} width={400} height={400}></Image>

      <div className="w-1/4 flex justify-center">
        <Accordion type="multiple" collapsible>
          {faq.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{item.ques}</AccordionTrigger>
              <AccordionContent>{item.ans}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Details;
