/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import UpCommingMeetingCard from "./UpCommingMeetingCard";
import Categories from "./Categories";
import { AnimatePresence } from "framer-motion";
const UpCommingMeeting = ({ data, isPending, categoriesData }) => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const myCardsArray = data.map((ele, i) => {
      let myDataArr = new Date(ele.startTime.seconds * 1000)
        .toString()
        .split(" ");

      return (
        <UpCommingMeetingCard
          category={ele.category}
          key={i}
          image={ele.image}
          price={ele.price}
          month={myDataArr[1]}
          day={myDataArr[2]}
          title={ele.title}
          instructorName={ele.lecturer}
          jobTitle={ele.jobTitle}
          order={i + 1}
          id={ele.id}
        />
      );
    });

    setCards(myCardsArray);
  }, [isPending]);
  useEffect(() => {
    setSelectedCards(cards.slice(0, 4));
  }, [cards]);

  const handleCategories = (e) => {
    const selCards = cards.filter((ele) => {
      return ele.props.category === e.target.dataset.category;
    });
    if (selCards.length > 4) {
      setSelectedCards(selCards.slice(0, 4));
    } else {
      setSelectedCards(selCards);
    }
  };

  return (
    <Box
      mt="-5px"
      pb={16}
      className="up-comming-meetings"
      overflow="hidden"
      minHeight="110vh"
    >
      <h3 className="main-head container">up comming meetings</h3>
      <Stack className="container" gap={4}>
        <Categories handleCategories={handleCategories} />
        <Stack className="holder" direction="row" gap={4}>
          {isPending && (
            <h3 style={{ textAlign: "center" }} className="loading">
              loading...
            </h3>
          )}
          {selectedCards.length === 0 && !isPending && (
            <h3 className="loading" style={{ textAlign: "center" }}>
              There is no upcoming meetings under this category right now!
            </h3>
          )}
          <Stack gap={6} py={2}>
            <AnimatePresence mode="wait">
              {selectedCards[0]}
              {selectedCards[2]}
            </AnimatePresence>
          </Stack>
          <Stack gap={3}>
            <AnimatePresence mode="wait">
              {selectedCards[1]}
              {selectedCards[3]}
            </AnimatePresence>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default UpCommingMeeting;
