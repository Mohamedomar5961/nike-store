import React, { useState } from "react";

const Slide = () => {
  const [x, setX] = useState(0);
  const styles = {
    transform: `translateX(${x}%)`,
    transition: "transform 0.3s ease-in-out",
  };

  const onRight = () => {
    if (x === 0) {
      setX(-100);
    } else if (x === -100) {
      setX(0);
    }
  };
  setTimeout(() => {
    onRight();
  }, 5000);

  return (
    <div className="SlideBody">
      <div className="slideContainer">
        <button onClick={onRight} className="leftArrow">
          <div className="icon">
            <svg
              aria-hidden="true"
              fill="#111"
              height="30px"
              width="30px"
              viewBox="0 0 185.4 300"
            >
              <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path>
            </svg>
          </div>
        </button>
        <div className="slider" style={styles}>
          <div className="spannWrapperOne">
            <span>
              FREE SHIPPING + RETURNS, FREE MEMBERSHIP, EXCLUSIVE PRODUCTS
            </span>
          </div>
          <div className="spannWrapperTwo">
            <span>SAVE UP TO 50%</span>
          </div>
        </div>
        <button onClick={onRight} className="rightArrow">
          <div className="icon">
            <svg
              aria-hidden="true"
              fill="#111"
              height="30px"
              width="30px"
              viewBox="0 0 185.4 300"
            >
              <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Slide;
