import React, { useState, useEffect } from "react";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import Img1 from "./images/slider1.png";
import Img2 from "./images/slider2.png";
import Img3 from "./images/slider3.png";
import Img4 from "./images/slider4.png";
import Img5 from "./images/slider5.png";
import classes from "./Slider.module.css";

const Slider = () => {
  const [index, setIndex] = useState(4);

  const sliderElements = [
    { img: Img1 },
    { img: Img2 },
    { img: Img3 },
    { img: Img4 },
    { img: Img5 },
  ];
  const clickhandlerdot = (i) => {
    setIndex(i);
  };
  const clickhandler = (dir) => {
    if (dir === "left") {
      setIndex(index < sliderElements.length - 1 ? index + 1 : 0);
    } else {
      setIndex(index > 0 ? index - 1 : sliderElements.length - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickhandler();
    }, 5000);
    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const dotes = Array.from({ length: sliderElements.length }).map((x, i) => {
    return (
      <div
        key={i}
        className={index === i ? classes.active : classes.dot}
        onClick={() => clickhandlerdot(i)}
      ></div>
    );
  });

  return (
    <div className={classes.Slider}>
      <div className={classes.dotes}>{dotes}</div>
      <div className={classes.right} onClick={() => clickhandler("right")}>
        <div className={classes.rightIconContainer}>
          <ArrowRightOutlined style={{ fontSize: "16px" }} />
        </div>
      </div>
      {sliderElements.map((slide, i) => (
        <div
          key={slide.img}
          className={
            i === index ? [classes.item, classes.anim].join(" ") : classes.item
          }
        >
          <img src={slide.img} alt="slideItem" />
        </div>
      ))}

      <div className={classes.left} onClick={() => clickhandler("left")}>
        <div className={classes.leftIconContainer}>
          <ArrowLeftOutlined style={{ fontSize: "16px" }} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Slider);
