import san from './destination/Binsar Sanctuary.jpg'
import sanroad from './destination/Binsar Sanctuary the-road-takes-you-deeper.jpg'
import bintrek from './destination/Binsar Trek.jpeg'
import binuttra from './destination/binsar-uttarakhand.jpg'
import img1 from './destination/Almora Mystry and Beauti.jpeg';
import img2 from './destination/Meditation Room.jpg';
import img3 from './destination/Himalaya From Almora.jpeg';
import img4 from './destination/Hidden Gem Of Himalaya.jpeg';
import img5 from './destination/Landscape.jpg';
import himalay from './destination/Himalaya From Paradise Cliff.jpeg'
import kasar from './destination/Kasar Devi.jpeg'
import rowCottage from './destination/Row Cotteges.jpg'
import meditation from './destination/Meditation Room.jpg'
import meetingroom from './destination/seminar-meeting-room_105762-1708.avif'
import { useState } from 'react';
 import './binsar.css'


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const DiscoverAllPlace = () => {
 const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src:san,
       title: "Binsar Sanctuary",
    //   description: "Serenity of untouched landscapes.",
    },
    {
      src: himalay,
      title: "Himalaya From Paradise Cliff",
    //   description: "Bustling energy of the city.",
    },
     {
      src:meditation,
       title: "Meditation Room",
    //   description: "Serenity of untouched landscapes.",
    },
    {
      src: img3,
      title: "Himalaya From Almora",
    //   description: "Bustling energy of the city.",
    },
    {

      src: kasar,
     title: "Kasar Devi",
    //   description: "Latest in innovation and tech.",
    },
    {
      src:meetingroom,
     title: "Meeting Room",
    //   description: "Discover new destinations.",
    },


  ];



return (
    <div >
      {/* Navbar */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">✨ SnapScape</a>
        </div>
      </nav> */}

      {/* Hero Section */}
      {/* <div className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Capture the World in Frames</h1>
          <p>Explore a stunning collection of visuals — from nature to cityscapes and beyond.</p>
        </div>
      </div> */}

      {/* Gallery Section */}
      <div className="gallery-section">
        

 

        <div className="container">
          
          <h2 className="text-center section-title" style={{color:'goldenrod'}}>Discover Our Gallery</h2>
          <div className="row">
            <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}

        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }} 
      >
            {images.map((img, index) => (
             <SwiperSlide key={index}>
            <div className="card border-0 shadow-sm h-100">

             {/* <div className="col-md-6 col-lg-3 mb-4" key={index}> */}
                <div
                  className="card image-card h-100 shadow-sm"
                  onClick={() => setSelectedImage(img.src)}
                >

                  <img
                src={img.src}
                alt={img.title}
                className="img rounded-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
                  {/* <img src={img.src} className="card-img-top" alt={img.title} /> */}
                  <div className="card-body">
                    <h5 className="card-title">{img.title}</h5>
                    <p className="card-text">{img.description}</p>
                  </div>
                </div>
              </div>
             </SwiperSlide>

            ))}
            </Swiper>
          </div>
             
        </div>
       
      </div>
     

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <span className="close-btn" onClick={() => setSelectedImage(null)}>&times;</span>
          <img src={selectedImage} alt="Enlarged" />
        </div>
      )}
    </div>
  );
};

export default DiscoverAllPlace;
