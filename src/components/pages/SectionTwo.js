import React from "react";
import ButtenTypeOne from "./pagesComponents/ButtenTypeOne";
import CardComponent from "./pagesComponents/CardComponent";

const SectionTwo = () => {
  return (
    <>
      <section class="descoverCourses mb-5">
        <div class="container">
          <div class="row w-100 justify-content-center align-items-center">
            <h2>Discover Our Featured Courses Online</h2>
          </div>
          <div class="row">
            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
            />

            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
            />

            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
            />

            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
            />

            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
            />

            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
            />

            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
            />

            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
            />
          </div>
          <ButtenTypeOne
          name = "View All Course"
          bgColor = "#fecb00"
          btnCount = "second"
          />
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
