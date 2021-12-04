import React from "react";
import ButtonTypeOne from "./pagesComponents/ButtonTypeOne";
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
              image = "https://source.unsplash.com/random/"
            />

            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
              image = "https://source.unsplash.com/random/"
            />

            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
              image = "https://source.unsplash.com/random/"
            />

            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
              image = "https://source.unsplash.com/random/"
            />

            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
              image = "https://source.unsplash.com/random/"
            />

            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
              image = "https://source.unsplash.com/random/"
            />

            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
              image = "https://source.unsplash.com/random/"
            />

            <CardComponent
              title="SEO TRAINING COURSE"
              description=" first name"
              image = "https://source.unsplash.com/random/"
            />
          </div>
          <ButtonTypeOne
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
