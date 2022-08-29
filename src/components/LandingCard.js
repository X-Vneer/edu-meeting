import React from "react";

function LandingCards({ title, icon, body }) {
  return (
    <>
      <div className="landing-card">
        <div className="card-icon">
          <img src={icon} alt="card icon" />
        </div>
        <div className="card-content">
          <h4 className="card-title">{title}</h4>
          <p className="card-body">
            {body
              ? body
              : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ex possimus odit eum molestias delectus"}
          </p>
        </div>
      </div>
    </>
  );
}

export default LandingCards;
