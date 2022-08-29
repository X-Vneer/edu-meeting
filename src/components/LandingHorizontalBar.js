import React from "react";
import LandingCard from "./LandingCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const LandingHorizontalBar = ({ data }) => {
  const myData = data.map((e, i) => {
    return <LandingCard key={i} icon={e.icon} title={e.title} itemId={i} />;
  });

  const responsive = {
    0: {
      items: 1,
    },
    550: {
      items: 2,
    },
    945: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1500: {
      items: 5,
    },
  };
  return (
    <div className="horizontl-bar">
      <AliceCarousel
        items={myData}
        autoPlay={true}
        autoPlayInterval={6500}
        infinite={true}
        mouseTracking={true}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default LandingHorizontalBar;
