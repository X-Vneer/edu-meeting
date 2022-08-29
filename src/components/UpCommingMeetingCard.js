import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

const UpCommingMeetingCard = ({
  image,
  price,
  month,
  day,
  title,
  instructorName,
  jobTitle,
  order,
  category,
  id,
}) => {
  const myRef = useRef(null);
  const viewed = useInView(myRef, { amount: 0.3, once: true });
  const myVariant = {
    hidden: {
      opacity: 0,
      x: "150px",
    },
    visible: {
      x: viewed ? 0 : "150px",
      opacity: viewed ? 1 : 0,
      transition: `all 0.7s ease  ${order * 0.2}s`,
    },
    exit: {
      opacity: 0,
      transition: `all 0.3s ease  ${order * 0.1}s`,
    },
  };

  return (
    <Link to={`/meeting-details/${id}`} style={{ textDecoration: "none" }}>
      <motion.div
        ref={myRef}
        variants={myVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="up-comming-meeting-card"
        data-category={category}
      >
        <div className="card-img">
          <img src={image} alt="Meeting" />
        </div>
        <div className="card-content">
          {price ? (
            <span className="price">{`$ ${price}`}</span>
          ) : (
            <span className="price free">Free</span>
          )}
          <div className="date">
            {month && <div className="month">{month}</div>}
            {day && <div className="day">{day}</div>}
          </div>
          {title && <h3 className="card-title">{title}</h3>}
          <div className="instructor">
            {instructorName && <span className="name">{instructorName}</span>}
            {jobTitle && <span className="jop-title">{jobTitle}</span>}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default UpCommingMeetingCard;
