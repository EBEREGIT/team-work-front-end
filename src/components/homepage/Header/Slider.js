import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <Fragment>
      <Carousel>

        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_530,o_50,w_1200/v1581948076/2.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        
        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_530,o_50,w_1200/v1581948076/4.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        
        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_530,o_50,w_1200/v1581948077/four-people-using-laptop-computers-and-smartphone-3277808.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        
        {/* Slide 4 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_530,o_50,w_1200/v1581948078/6.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        
        {/* Slide 5 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_430,o_50,w_1200/v1581948076/3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default Slider;
