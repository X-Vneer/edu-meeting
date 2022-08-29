import React from "react";
import { Stack, Box } from "@mui/system";

const CustomLanding = ({ image, title, subTitle }) => {
  return (
    <Stack
      gap={1}
      textAlign="center"
      justifyContent="center"
      color="white"
      fontWeight="bolder"
      sx={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        textTransform: "uppercase",
        paddingTop: "230px",
        paddingBottom: "110px",
      }}
    >
      <Box component="h3" fontWeight="800">
        {subTitle}
      </Box>
      <Box component="h1" fontWeight="800">
        {title}
      </Box>
    </Stack>
  );
};

export default CustomLanding;
