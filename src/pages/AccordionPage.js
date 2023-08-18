import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "er56789oikjhgfty7u8",
      label: "What is ReactJS used for?",
      content:
        "The ReactJS framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
    },
    {
      id: "er56789oikjhgfty7u89",
      label: "Is ReactJS for beginners?",
      content: "It is not difficult to learn the basics of React",
    },
    {
      id: "er56789oikjhgfty7u108",
      label: "Is ReactJS a frontend or backend?",
      content:
        "ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
