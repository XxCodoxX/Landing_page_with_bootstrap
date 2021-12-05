import React from "react";
import SectionOneImgOne from "../../img/sectionOneImgOne.png";
import SectionOneImgSecond from "../../img/SectionOneImgSecond.png";
import ButtonTypeOne from "./pagesComponents/ButtonTypeOne";

const SectionOne = () => {
  return (
    <>
      <section class="header">
        <div class="gradient"></div>

        <div class="image-layer-1">
          <img src={SectionOneImgOne} alt="" srcset="" />
        </div>

        <div class="corner">
          <img src={SectionOneImgSecond} alt="" />
        </div>

        <div class="explore-box">
          <div class="cent-text">
            <span class="explore-heading">Explore your</span>
            <span class="creative-text">Creativity</span>

            <p class="explore-text">
              Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut.
            </p>

            <ButtonTypeOne
          name = "View All Course"
          bgColor = "#fecb00"
          btnCount = "one"
          />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
