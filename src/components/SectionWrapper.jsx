import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={` ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner}`}
    >
      <div
        className={`container p-5 d-flex align-items-center justify-content-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} `}
      >
        <div className={` ${reverse ? " d-flex flex-row-reverse" : " row"}`}>
          <div
            className={`${
              reverse ? "col-md-7 px-5 " : "col-md-6"
            } pt-5 pb-3 ${styles.descDiv} ${
              reverse ? " fadeRightMini" : " fadeLeftMini"
            }`}
          >
            <h1 className={`${!reverse && "text-white"} ${styles.h1Text}`}>
              {title}
            </h1>
            <p
              className={`${!reverse && "text-white"} ${
                styles.descriptionText
              }`}
            >
              {description}
            </p>
            {showBtn && (
              <Button
                assetUrl={assets.expo}
                link="deployed nft marketplace rn"
              />
            )}
          </div>
          <div
            className={`${reverse ? "col-md-6 pe-5" : "col-md-5 px-5"}  ${
              styles.flexCenter
            }`}
          >
            <img
              src={mockupImg}
              alt="mockup"
              className={`${styles.sectionImg} ${reverse ? " fadeLeftMini" : " fadeRightMini"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
