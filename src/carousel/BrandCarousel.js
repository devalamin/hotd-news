import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import food from '../components/images/food.jpg'



const BrandCarousel = () => {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={food}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={food}
                            alt="Second slide"
                        />


                    </Carousel.Item>

                </Carousel>

            </div>


        </div>
    );
};

export default BrandCarousel;