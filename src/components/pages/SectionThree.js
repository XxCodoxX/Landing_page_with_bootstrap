import React from "react";
import SectionThreeImg from '../../img/sectionThree.png'

const SectionThree = () => {
  return (
    <>
      <section class="about-seek-sec-box">
        <div class="bottom-layer">
          <img
            src={SectionThreeImg}
            alt=""
            srcset=""
          />
        </div>

        <div class="overlay"></div>

        <div class="about-seek-sec-text">
          <p class="about-seek-heading">About SeekaHost University</p>

          <p class="about-seek-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea
            dictumst quisque sagittis purus sit. Cras adipiscing enim eu turpis
            egestas pretium aenean pharetra. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
            semper auctor neque vitae tempus quam.. Sollicitudin nibh sit amet
            commodo nulla facilisi.
          </p>

          <div class="counters">
            <div class="count">
              <p class="details">
                <span class="yellow-num">2k+</span>
                <br/>
                students <br/>
                learning
              </p>
            </div>

            <div class="count">
              <p class="details">
                <span class="yellow-num">30+</span>
                <br/>
                active <br/>
                course
              </p>
            </div>

            <div class="count">
              <p class="details">
                <span class="yellow-num">15+</span>
                <br/>
                instructors <br/>
                online
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
