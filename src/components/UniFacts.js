import React, { useRef, useEffect, useState } from "react";
import { Stack, Box } from "@mui/system";
import { motion, useInView } from "framer-motion";
import img from "../assets/images/video-item-bg.jpg";
import playIcon from "../assets/icons/play-icon.png";

const FactsCards = ({ number, decription, symbol, isInView }) => {
  const mySymbol = symbol || "";
  const [num, setNum] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      const myUpCounter = setInterval(() => {
        setNum((pre) => {
          if (pre < number) {
            return pre + 1;
          } else {
            clearInterval(myUpCounter);
            return number;
          }
        });
      }, 2.5);
      return () => {
        clearInterval(myUpCounter);
      };
    }
  }, [isInView, number]);
  return (
    <motion.div
      ref={myRef}
      className="facts-card"
      whileHover={{
        y: -10,
      }}
    >
      <h2 data-number={number} className="number">
        {`${num}${mySymbol}`}
      </h2>
      <p className="dec">{decription}</p>
    </motion.div>
  );
};
const UniFacts = () => {
  const myRef = useRef(null);
  const isInView = useInView(myRef, { amount: 0.3, once: true });
  return (
    <Box
      ref={myRef}
      className="uni-facts-sec"
      py={13}
      sx={{ backgroundAttachment: "fixed" }}
    >
      <Stack className="container" direction="row">
        <div className="left">
          <h1>A Few Facts About Our University</h1>
          <Stack direction="row" gap={4} className="holder">
            <Stack gap={3}>
              <FactsCards
                number={94}
                decription="Succesed Students"
                symbol="%"
                isInView={isInView}
              />
              <FactsCards
                isInView={isInView}
                number={80}
                decription="Current Teachers"
              />
            </Stack>
            <Stack gap={3} mt={4}>
              <FactsCards
                isInView={isInView}
                number={152}
                decription="Awards"
              />
              <FactsCards
                isInView={isInView}
                number={2450}
                decription="New Students"
              />
            </Stack>
          </Stack>
        </div>
        <Box p={2} className="image" position="relative">
          <img src={img} alt="video cover" />
          <img src={playIcon} alt="play icon" className="play-icon" />
        </Box>
      </Stack>
    </Box>
  );
};

export default UniFacts;
