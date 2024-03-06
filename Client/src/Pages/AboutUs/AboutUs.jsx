import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="aboutUsPage">
      <div className="aboutUsHeader">
        <h1>About Us</h1>
        <p>
          Established in 2000, we have been providing top-notch service and
          solutions to our clients for over two decades.
        </p>
      </div>
      <div className="aboutUsContent">
        <p>
          Our team of real estate experts is dedicated to helping you find the
          perfect property for your needs. We have a wide range of listings,
          from residential homes to commercial properties, and our experienced
          agents will guide you through every step of the buying or selling
          process.
        </p>
        <p>
          With a strong commitment to customer service and a deep understanding
          of the real estate market, we have built a reputation as a trusted
          partner in the industry.
        </p>
        <p>
          Contact us today to learn more about how we can help you achieve your
          real estate goals. We look forward to working with you!
        </p>
      </div>
    </div>
  );
};
export default AboutUs;
