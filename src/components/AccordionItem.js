import React from "react";
import { motion } from "framer-motion";
const varaint = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.35,
      stiffness: 100,
      type: "spring",
    },
  }),
};

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  item,
  index,
  onClick,
  isInView,
}) =>
  isInView && (
    <motion.div
      variants={varaint}
      custom={index}
      initial="hidden"
      animate="visible"
      className="faq__accordion"
      key={item.title}
    >
      <dt>
        <button
          aria-expanded={ariaExpanded}
          aria-controls={`faq${index + 1}_desc`}
          data-qa="faq__accordion-button"
          className={`faq__accordion-button ${showDescription ? "active" : ""}`}
          onClick={onClick}
        >
          {item.title}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M360.5 217.5l-152 143.1C203.9 365.8 197.9 368 192 368s-11.88-2.188-16.5-6.562L23.5 217.5C13.87 208.3 13.47 193.1 22.56 183.5C31.69 173.8 46.94 173.5 56.5 182.6L192 310.9l135.5-128.4c9.562-9.094 24.75-8.75 33.94 .9375C370.5 193.1 370.1 208.3 360.5 217.5z" />
          </svg>
        </button>
      </dt>
      <dd>
        <p
          id={`faq${index + 1}_desc`}
          data-qa="faq__desc"
          className={`faq__desc ${showDescription}`}
        >
          {item.description}
        </p>
      </dd>
    </motion.div>
  );
export default AccordionItem;
