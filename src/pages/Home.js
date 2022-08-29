import React from "react";
import ApplyNow from "../components/ApplyNow";
import ContactUs from "../components/ContactUs";
import Landing from "../components/Landing";
import UniFacts from "../components/UniFacts";
import ficon from "../assets/icons/service-icon-01.png";
import sicon from "../assets/icons/service-icon-02.png";
import ticon from "../assets/icons/service-icon-03.png";

import HorizontalBar from "../components/LandingHorizontalBar";
import UpCommingMeeting from "../components/UpCommingMeeting";
import Courses from "../components/Courses";
import firstCourseImg from "../assets/images/course-01.jpg";
import secondCourseImg from "../assets/images/course-02.jpg";
import thirdCourseImg from "../assets/images/course-03.jpg";
import { motion } from "framer-motion";

export function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn();
    }, ms);
  };
}

const Home = ({ data, isPending }) => {
  const landingCardsdata = [
    { title: "best networking", icon: ficon },
    { title: "best teachers", icon: ticon },
    { title: "best students", icon: sicon },
    { title: "online meetings", icon: ticon },
    { title: "best education", icon: ficon },
    { title: "best environment", icon: sicon },
    { title: "best classes", icon: ficon },
  ];
  const coursesCardsData = [
    {
      image: firstCourseImg,
      imageAlt: "this is an img alt",
      title: "this is a course title",
      rate: 4,
      price: 20,
    },
    {
      image: secondCourseImg,
      imageAlt: "this is an img alt",
      title: "this is a long course title",
      rate: 5,
      price: 20,
    },
    {
      image: thirdCourseImg,
      imageAlt: "this is an img alt",
      title: "this is a course title",
      rate: 4,
      price: 20,
    },
    {
      image: firstCourseImg,
      imageAlt: "this is an img alt",
      title: "this is a course title",
      rate: 4,
      price: 20,
    },
    {
      image: secondCourseImg,
      imageAlt: "this is an img alt",
      title: "this is a long course title",
      rate: 5,
      price: 20,
    },
    {
      image: thirdCourseImg,
      imageAlt: "this is an img alt",
      title: "this is a course title",
      rate: 5,
      price: 20,
    },
  ];

  return (
    <motion.section className="home">
      <Landing />
      <HorizontalBar data={landingCardsdata} />
      <UpCommingMeeting data={data} isPending={isPending} />
      <ApplyNow />
      <Courses data={coursesCardsData} />
      <UniFacts />
      <ContactUs />
    </motion.section>
  );
};

export default Home;
