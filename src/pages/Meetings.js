import CustomLanding from "../components/CustomLanding";
import image from "../assets/images/heading-bg.jpg";
import { Stack, Box } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import UpCommingMeetingCard from "../components/UpCommingMeetingCard";

const Meetings = ({ categoriesData, data, isPending }) => {
  const [activeInd, setActiveInd] = useState(0);
  const [cards, setCards] = useState([]);
  const [cardsForFiltering, setCardsForFiltering] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [stateForUseEffect, setStateForUseEffect] = useState(true);

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
    setCardsForFiltering(myCardsArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPending]);

  useEffect(() => {
    if (cardsForFiltering.length) {
      // a var for storing the collection to Stacks that has at most 3 cards
      let myCardsCollections = [];
      // a var for storing the collection of 3 cards togather
      let myThreeCardsCollection = [];
      // a loop to get each 3 cards in a Stack component
      for (let i = 0; i < cardsForFiltering.length; i++) {
        myThreeCardsCollection = [
          ...myThreeCardsCollection,
          cardsForFiltering[i],
        ];
        if ((i + 1) % 3 === 0) {
          const col = (
            <Stack key={i} gap={Math.ceil(Math.random() * 10)}>
              {myThreeCardsCollection}
            </Stack>
          );
          myThreeCardsCollection = [];
          myCardsCollections = [...myCardsCollections, col];
        }
      }

      const coll = (
        <Stack key={"fpidsjfo"} gap={Math.ceil(Math.random() * 10)}>
          {myThreeCardsCollection}
        </Stack>
      );

      myThreeCardsCollection = [];
      myCardsCollections = [...myCardsCollections, coll];

      setSelectedCards(myCardsCollections);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards.length, stateForUseEffect]);

  const handleClick = (e) => {
    setActiveInd(parseInt(e.target.id));
    if (e.target.dataset.category === "all meetings") {
      setCardsForFiltering(cards);
      setStateForUseEffect((pre) => !pre);
      return;
    }
    if (e.target.dataset.category === "custom category") {
      setCardsForFiltering([
        <h3 className="loading">
          There is no upcomming meetings under this Categry.
        </h3>,
      ]);
      setStateForUseEffect((pre) => !pre);
      return;
    }
    const filtered = cards.filter((ele) => {
      return e.target.dataset.category === ele.props.category;
    });

    setCardsForFiltering(filtered);
    setStateForUseEffect((pre) => !pre);
  };

  return (
    <>
      <section className="page-landing">
        <CustomLanding
          image={image}
          title="UPCOMING MEETINGS"
          subTitle="HERE ARE OUR UPCOMING MEETINGS"
        />
        <div className=" container">
          <Stack
            direction="row"
            justifyContent="center"
            gap={2}
            py={12}
            component="ul"
            flexWrap="wrap"
          >
            {["all meetings", ...categoriesData.categories].map((ele, ind) => {
              return (
                <Box
                  component="li"
                  key={ind}
                  id={ind}
                  data-category={ele}
                  className={
                    ind === activeInd
                      ? "active meetings-category"
                      : "meetings-category"
                  }
                  onClick={handleClick}
                >
                  {ele}
                </Box>
              );
            })}
          </Stack>
          {isPending && <h1 className="loading">LOODING...</h1>}
          {!isPending && cards.length === 0 && (
            <h1 className="loading">
              Sorry Somthing went Wrong, Please refresh the Page
            </h1>
          )}
          <Stack
            direction="row"
            gap={4}
            flexWrap="wrap"
            justifyContent="center"
            minHeight="100vh"
          >
            {selectedCards.slice(0, 3)}
          </Stack>
        </div>
      </section>
    </>
  );
};

export default Meetings;
