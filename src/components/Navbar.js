import React, { useState, useEffect } from "react";
import { Stack, Box } from "@mui/system";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
import { debounce } from "../pages/Home";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((pre) => !pre);
  };
  const [innerWidth, setIneerWidth] = useState(0);
  useEffect(() => {
    setIneerWidth(window.innerWidth);
    const handleResize = debounce(function () {
      setIneerWidth(window.innerWidth);
    }, 500);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      sx={{ backgroundColor: "rgba(250,250,250,0.15)" }}
      component="nav"
      position="absolute"
      width="100%"
      zIndex={10}
    >
      <Stack
        direction="row"
        height={100}
        alignItems="center"
        className="container navbar"
        justifyContent="space-between"
        sx={{
          textTransform: "uppercase",
        }}
      >
        <motion.h2
          transition={{ delay: 0.2, duration: 1, type: "spring" }}
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Edu meeting
        </motion.h2>
        {innerWidth >= 768 && <NavLinks Name="horizontal-ul" />}
        {innerWidth <= 768 && <NavLinks Name={"vertical-ul"} showed={show} />}
        {innerWidth <= 768 && (
          <motion.span
            transition={{ delay: 0.1, duration: 1, type: "spring" }}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            className="nav-icon"
            onClick={handleClick}
          >
            <span></span>
          </motion.span>
        )}
      </Stack>
    </Box>
  );
};

export default Navbar;
