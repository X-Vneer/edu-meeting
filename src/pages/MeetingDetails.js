import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import CustomLanding from "../components/CustomLanding";
import image from "../assets/images/heading-bg.jpg";
import { db } from "../firebase-config";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
const MeetingDetails = () => {
  const id = useParams();
  const [meetingData, setMeetingData] = useState({});
  let myDataArr = new Date(meetingData?.startTime?.seconds * 1000)
    .toString()
    .split(" ");

  useEffect(() => {
    let started = false;
    const docRef = doc(db, "meeting", id.id);
    getDoc(docRef).then((doc) => {
      if (!started) {
        setMeetingData(doc.data());
      }
    });
    return () => {
      started = true;
    };
  }, [id.id]);

  const share = async () => {
    const shareData = {
      title: "Edu Meetings",
      text: meetingData?.title,
      url: window.location.href,
    };
    try {
      await navigator.share(shareData);
      console.log("shared successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="page-landing">
        <CustomLanding
          image={image}
          title={meetingData.title ? meetingData.title : "loading..."}
          subTitle="get all details"
        />
        <Box className="container" minHeight="95vh" py={7}>
          {meetingData.title && (
            <Box className="meeting-details-card">
              <div className="image">
                <img src={meetingData.image} alt="meeting cover" />
                {meetingData.price ? (
                  <span className="price">{`$ ${meetingData.price}`}</span>
                ) : (
                  <span className="price free">Free</span>
                )}
                {myDataArr && (
                  <div className="date">
                    <div className="month">{myDataArr[1]}</div>
                    <div className="day">{myDataArr[2]}</div>
                  </div>
                )}
              </div>
              <div className="content">
                <div className="head">
                  <h2 className="title">{meetingData.title}</h2>
                  <p className="address">{meetingData.address}</p>
                </div>
                <div className="description">
                  <p className="main-description">{meetingData.description}</p>
                  {meetingData.subDescription && (
                    <p>{meetingData.subDescription}</p>
                  )}
                </div>
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={4}
                  borderBottom="1px solid #eee"
                  mb={5}
                  pb={2}
                >
                  {meetingData.notes && (
                    <ul className="notes detail">
                      <h3>Notes:</h3>
                      {meetingData.notes.map((ele, ind) => {
                        return <li key={ind}>{ele}</li>;
                      })}
                    </ul>
                  )}
                  <div className="time detail">
                    <h3>Time:</h3>
                    <p>
                      {new Date(
                        meetingData?.startTime?.seconds * 1000
                      ).toString()}
                    </p>
                  </div>
                  <div className="location detail">
                    <h3>Location:</h3>
                    <p>{meetingData.address}</p>
                  </div>
                  <div className="booking detail">
                    <h3>Booking now:</h3>
                    <p>{meetingData.bookingNumber}</p>
                  </div>
                </Stack>
                <div className="share">
                  <h3 onClick={share}>share</h3>
                </div>
              </div>
            </Box>
          )}
        </Box>
        <Link
          to="/meetings"
          className="main-button"
          style={{ margin: "0 auto", display: "block", width: "fit-content" }}
        >
          Back to meetings list
        </Link>
      </section>
    </>
  );
};

export default MeetingDetails;
