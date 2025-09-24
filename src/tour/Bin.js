import React, { useState, useEffect } from 'react';
import san from './destination/Binsar Sanctuary.jpg'
import sanroad from './destination/Binsar Sanctuary the-road-takes-you-deeper.jpg'
import bintrek from './destination/Binsar Trek.jpeg'
import binuttra from './destination/binsar-uttarakhand.jpg'
import img1 from './destination/Almora Mystry and Beauti.jpeg';
import img2 from './destination/Meditation Room.jpg';
import img3 from './destination/Himalaya From Almora.jpeg';
import img4 from './destination/Hidden Gem Of Himalaya.jpeg';
import img5 from './destination/Landscape.jpg';
import img6 from './destination/Row Cotteges.jpg';
// import './bin.css'
 const images = [
    {
      src:san,
       title: "Binsar Sanctuary",
    //   description: "Serenity of untouched landscapes.",
    },
    {
      src: sanroad,
      title: "Binsar Sanctuary the-road",
    //   description: "Bustling energy of the city.",
    },
     {
      src:img1,
       title: "Almora Mystry and Beauti",
    //   description: "Serenity of untouched landscapes.",
    },
    {
      src: img2,
      title: "Meditation Room",
    //   description: "Bustling energy of the city.",
    },
    {
      src: bintrek,
     title: "Binsar Trek",
    //   description: "Latest in innovation and tech.",
    },
    {
      src: binuttra,
     title: "binsar-uttarakhand",
    //   description: "Discover new destinations.",
    },


  ];

export default function Bin() {
 const [visibleCount, setVisibleCount] = useState(4);  // show 4 initially
  const [visibleItems, setVisibleItems] = useState({}); // track which items are visible (for animation)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setVisibleItems(prev => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.image-card').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleCount]);

  const loadMore = () => {
    setVisibleCount(c => Math.min(c + 4, images.length));
  };
console.log("Image URLs:", san, sanroad, bintrek, binuttra, img1, img2);

  return (
    <div className="container" style={{ maxWidth: 960, padding: "40px 20px" }}>
      <h2 style={{ marginBottom: 24, textAlign: 'center', fontWeight: '700' }}>Gallery</h2>

      <div className="row">
        {images.slice(0, visibleCount).map((img, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-3" data-index={i}>
            <div className={`image-card ${visibleItems[i] ? 'visible' : ''}`}>
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="card-body">
                <h3 className="card-title">{img.title}</h3>
                <p className="card-description">{img.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < images.length && (
        <button className="load-more-btn" onClick={loadMore}>Load More</button>
      )}
    </div>
  );
}