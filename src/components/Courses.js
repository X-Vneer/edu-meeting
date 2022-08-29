import React from "react";
import AliceCarousel from "react-alice-carousel";
import { Box } from "@mui/system";
import CourseCard from "./CourseCard";

const Courses = ({ data }) => {
  const myCards = data.map((ele, index) => {
    return (
      <CourseCard
        key={index}
        image={ele.image}
        imageAlt={ele.imageAlt}
        title={ele.title}
        rate={ele.rate}
        price={ele.price}
      />
    );
  });

  const responsive = {
    300: {
      items: 1,
    },
    550: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  };
  return (
    <Box className="courses" py={12} id="courses">
      <div className="container">
        <AliceCarousel
          items={myCards}
          autoPlay={true}
          autoPlayInterval={6500}
          infinite={true}
          mouseTracking={true}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </Box>
  );
};

export default Courses;
