import React from "react";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <Box className="landing" position="relative">
      <video autoPlay muted loop>
        <source
          src={require("../assets/images/course-video.mp4")}
          type="video/mp4"
        />
      </video>
      <Box
        position="absolute"
        top={0}
        left="0"
        width="100%"
        height="100%"
        bgcolor="rgba(31,39,43,0.6)"
      >
        <Box
          display="flex"
          alignItems="center"
          className="container"
          height="100%"
        >
          <Box
            className="text"
            maxWidth={650}
            color="#fff"
            sx={{
              p: "160px 10px 10px 0 ",
            }}
          >
            <h4>HELLO STUDENTS</h4>
            <h3>
              WELCOME TO{" "}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  delay: 1.2,
                  ease: [0, 0.71, 0.2, 1.01],
                  type: "spring",
                }}
              >
                Edu meetings
              </motion.p>
            </h3>
            <p>
              This is an edu meeting template provided by TemplateMo website.
              This is React 18 layout built by{" "}
              <span style={{ color: "#ffc107" }}> Moneer A. Mizyed</span>. The
              video background is taken from Pexels website.
            </p>
            <a
              rule="button"
              href="#apply-now"
              className="main-button"
              aria-label="jone us button"
            >
              jone us now!
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
