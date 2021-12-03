import React from "react";
import SectionOneImg from '../../img/sectionOne.png'
import ButtenTypeOne from "./pagesComponents/ButtenTypeOne";

const SectionOne = () => {
  return (
    <>
      <section class="section-one-box">
        <div class="section-one-layer">
          <img src={SectionOneImg} alt="" srcset="" />
        </div>

        <div class="section-one-text">
            <p class="section-one-heading">Explore your</p>
            <p class="section-one-secondHeading">Creativity</p>
            <p class="section-one-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
            </p>

            <ButtenTypeOne
                name = "View All Course"
                bgColor = "#fecb00"
                btnCount = "one"
            />

        </div>
      </section>
    </>
  );
};

export default SectionOne;
