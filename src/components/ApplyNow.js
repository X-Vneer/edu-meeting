import React from "react";
import { Box, Stack } from "@mui/system";
import Accordion from "./Accordion";
import ApplyNowCard from "./ApplyNowCard";

const myData = [
  {
    title: "About Edu Meeting React Template",
    description:
      "This React 18 verstion of this template was made by Moneer A. Mizyed. You can contact me via the email in the footer section. or Text me on WhatsApp +972598654780",
  },
  {
    title: "React 18 layout",
    description:
      "This React 18 verstion of this template was made by Moneer A. Mizyed. You can contact me via the email in the footer section. or Text me on WhatsApp +972598654780",
  },
  {
    title: "Please tell your friends",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque neque libero deleniti ullam, vitae magnam iusto provident in error sin voluptas sequi odio mollitia, veniam fugiat ab quas delectus eaque.",
  },
  {
    title: "Share this to your colleagues",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque neque libero deleniti ullam, vitae magnam iusto provident in error sin voluptas sequi odio mollitia, veniam fugiat ab quas delectus eaque.",
  },
];
const ApplyNow = () => {
  return (
    <Box className="apply-now" py={10} id="apply-now">
      <Stack
        direction="row"
        className="container"
        gap={4}
        justifyContent="space-between"
      >
        <Stack gap={3} flexBasis="500px" color="white">
          <ApplyNowCard
            title="APPLY FOR BACHELOR DEGREE"
            description="You are allowed to use this edu meeting CSS template for your school or university or business. You can feel free to modify or edit this layout."
            buttonText="joun us now!"
          />
          <ApplyNowCard
            title="APPLY FOR BACHELOR DEGREE"
            description="You are not allowed to redistribute the template ZIP file on any other template website. Please contact us for more information."
            buttonText="joun us now!"
          />
        </Stack>
        <Accordion data={myData} />
      </Stack>
    </Box>
  );
};

export default ApplyNow;
