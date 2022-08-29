import React, { useRef, useState } from "react";
import AccordionItem from "./AccordionItem";
import { useInView } from "framer-motion";

const Accordion = ({ data }) => {
  const myRef = useRef(null);
  const isInView = useInView(myRef, { amount: 0.5, once: true });
  const [activeIndex, setActiveIndex] = useState(1);

  const renderedData = data.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        key={index}
        showDescription={showDescription}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        isInView={isInView}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <div className="faq" ref={myRef}>
      <dl className="faq__list">{renderedData}</dl>
    </div>
  );
};

export default Accordion;
