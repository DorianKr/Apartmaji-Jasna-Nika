import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image from '../../assets/place_holder.jpg';
import "./carousel.css";

function CarouselContainer() {
    return (
        <div className='flex_center'>
            <Carousel className='carouselContainer' swipeable={false} showStatus={false} animationHandler="fade" showArrows={true} autoPlay={true} infiniteLoop={true} interval={7000} transitionTime={1000}>
                <div>
                    <img src={image} />
                </div>
                <div>
                    <img src={image} />
                </div>
                <div>
                    <img src={image} />
                </div>
                <div>
                    <img src={image} />
                </div>
                <div>
                    <img src={image} />
                </div>
                <div>
                    <img src={image} />
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselContainer
