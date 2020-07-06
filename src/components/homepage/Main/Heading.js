import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
// initialize Animation on Scroll (AOS)
AOS.init();

export default function Heading(props) {
    return (
        <h3
        className="headings"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos-delay="50"
      >
        {props.heading}
      </h3>
    )
}
