import React from "react";
import { Stack } from "@mui/system";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const NavLinks = ({ Name, showed }) => {
  const navitems =
    showed || Name === "horizontal-ul"
      ? {
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
        }
      : { hidden: {}, visible: {} };

  return (
    <Stack
      component="ul"
      direction={Name === "horizontal-ul" ? "row" : "column"}
      height={showed ? 290 : 0}
      gap={2}
      alignItems="center"
      justifyContent="flex-end"
      className={Name}
    >
      <motion.li
        custom={0}
        variants={navitems}
        initial="hidden"
        animate="visible"
      >
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
          to="/edu-meeting"
        >
          Home
        </NavLink>
      </motion.li>
      {/*  */}
      <motion.li
        custom={1}
        variants={navitems}
        initial="hidden"
        animate="visible"
      >
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
          to="/meetings"
        >
          Meetings
        </NavLink>
      </motion.li>
      {/*  */}
      <motion.li
        custom={2}
        variants={navitems}
        initial="hidden"
        animate="visible"
      >
        <HashLink smooth to="edu-meeting/#apply-now">
          Apply now
        </HashLink>
      </motion.li>

      <motion.li
        custom={4}
        variants={navitems}
        initial="hidden"
        animate="visible"
      >
        <HashLink smooth to="/edu-meeting#courses">
          courses
        </HashLink>
      </motion.li>
      {/*  */}
      <motion.li
        custom={5}
        variants={navitems}
        initial="hidden"
        animate="visible"
      >
        <HashLink smooth to="/edu-meeting#contact-us">
          contact us
        </HashLink>
      </motion.li>
      {/*  */}
    </Stack>
  );
};

export default NavLinks;
