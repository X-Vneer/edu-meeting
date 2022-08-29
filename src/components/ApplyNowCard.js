import React, { useRef } from "react";
import { Box } from "@mui/system";
import { motion, useInView } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const ApplyNowCard = ({ title, description, buttonText }) => {
  const myRef = useRef(null);
  const viewed = useInView(myRef, { amount: 0.5, once: true });

  return (
    <Box
      className="apply-now-card"
      bgcolor="rgba(250,250,250,0.15)"
      p="35px"
      minHeight="300px"
      ref={myRef}
    >
      <AnimatePresence>
        {viewed && (
          <motion.h2
            initial={{ opacity: 0, x: -90 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              stiffness: 120,
            }}
          >
            {title}
          </motion.h2>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {viewed && (
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              stiffness: 120,
            }}
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>

      {description && <button className="main-button">{buttonText}</button>}
    </Box>
  );
};

export default ApplyNowCard;
