import React from "react";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Box
      component="footer"
      py={16}
      color="white"
      className="footer"
      textAlign="center"
    >
      <p>
        COPYRIGHT © 2022 EDU MEETING CO., LTD. ALL RIGHTS RESERVED. <br />{" "}
        DESIGN:<span>TEMPLATEMO</span>
      </p>
      <Box pt={6} color="white" className=" me" textAlign="center">
        <p>
          This design was recreated using React 18 by{" "}
          <span>Moneer A. Mizyed</span> ,<br />
          <a href="mailto:xv.neer.business@gmail.com">contact me via email</a>
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
