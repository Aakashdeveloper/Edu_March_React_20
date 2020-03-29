import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const showGallery = ({galleryArray}) =>{
    if(galleryArray){
        return(
            <Slider {...settings}>
                {galleryArray.map((item) => {
                    return(
                     <Link to="/" className="slider-item">
                     <div className="image"
                     style={{background:`url(/images/galleries/${item.images[0].img})`}}>
                     </div>
                    </Link>
                    )
                })}
            </Slider>
        )
    } 
    if(!galleryArray){
        return(
            <div>
                <img src="./loading.gif"/>
            </div>
        )
    }
}

const GalleryNews  = (props) => {
    return(
        <div className="home-gallery">
            <h2>Image Gallery</h2>
            {showGallery(props)}
            <hr/>
        </div>
    )
}

export default GalleryNews;