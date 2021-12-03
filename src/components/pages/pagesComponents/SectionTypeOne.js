import React from "react";

const SectionType = ({
  title,
  contentOne,
  contentSecond,
  imgSTT,
  sectionType,
  bgColor
}) => {
  if (sectionType === "four") {
    return (
      <>
        <section class="typeone" style={{backgroundColor:bgColor}}>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <span class="round-bar"></span>
                    <p class="section-heading">{title}</p>
                    <p>{contentOne}</p>
                    <br />
                    <p>{contentSecond}</p>
              </div>
              <div class="col-md-6">
                    <img src={imgSTT} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else if (sectionType === "five") {
    return (
      <>
        <section class="typetwo" style={{backgroundColor:bgColor}}>
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6 order-md-2">
                <span class="round-bar"></span>
                    <p class="section-heading">{title}</p>
                    <p>{contentOne}</p>
                    <br />
                    <p>{contentSecond}</p>
              </div>
              <div class="col-xs-12 col-md-6 order-md-1">
                    <img src={imgSTT} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <></>;
  }
};

export default SectionType;
