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

import { useState } from 'react';
 import './binsar.css'

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
      src:rowCottage,
     title: "Cotteges",
    //   description: "Discover new destinations.",
    },


  ];

//   return (
//     <div>
//       <style>{`
//         body {
//           margin: 0;
//           font-family: 'Poppins', sans-serif;
//           background: linear-gradient(to right, #f8f9fa, #e3f2fd);
//         }

//         .navbar {
//           background: rgba(255, 255, 255, 0.1);
//           backdrop-filter: blur(10px);
//           box-shadow: 0 8px 16px rgba(0,0,0,0.1);
//         }

//         .navbar-brand {
//           font-weight: 700;
//           font-size: 1.5rem;
//           color: #fff !important;
//         }

//         .hero {
//           position: relative;
//           height: 90vh;
//           background-image: url('https://source.unsplash.com/1600x900/?mountain,sky');
//           background-size: cover;
//           background-position: center;
//           color: white;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//         }

//         .overlay {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.5);
//           top: 0;
//           left: 0;
//           z-index: 1;
//         }

//         .hero-content {
//           position: relative;
//           z-index: 2;
//           max-width: 700px;
//           padding: 20px;
//           animation: fadeInUp 1s ease-out;
//         }

//         .hero h1 {
//           font-size: 3rem;
//           font-weight: 700;
//           text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
//         }

//         .hero p {
//           font-size: 1.25rem;
//           text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
//         }

//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .section-title {
//           font-weight: 700;
//           font-size: 2rem;
//           margin-bottom: 1.5rem;
//           color: #333;
//         }

//         .image-card {
//           border: none;
//           border-radius: 16px;
//           overflow: hidden;
//           transition: transform 0.4s ease, box-shadow 0.4s ease;
//           background: white;
//         }

//         .image-card:hover {
//           transform: scale(1.05);
//           box-shadow: 0 20px 30px rgba(0, 123, 255, 0.2);
//         }

//         .image-card img {
//           height: 220px;
//           object-fit: cover;
//         }

//         .card-title {
//           font-weight: 600;
//         }

//         .gallery-section {
//           background: linear-gradient(145deg, #ffffff, #f1f9ff);
//           padding: 60px 0;
//         }
//       `}</style>

//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
//         <div className="container">
//           <a className="navbar-brand" href="#">✨ SnapScape</a>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       {/* <div className="hero">
//         <div className="overlay"></div>
//         <div className="hero-content">
//           <h1>Capture the World in Frames</h1>
//           <p>Explore a stunning collection of visuals — from nature to cityscapes and beyond.</p>
//         </div>
//       </div> */}

//       {/* Gallery Section */}
//       <div className="gallery-section">
//         <div className="container">
//           <h2 className="text-center section-title">Discover Our Gallery</h2>
//           <div className="row">
//             {images.map((img, index) => (
//               <div className="col-md-6 col-lg-3 mb-4" key={index}>
//                 <div className="card image-card h-100 shadow-sm">
//                   <img src={img.src} className="card-img-top" alt={img.title} />
//                   <div className="card-body">
//                     <h5 className="card-title">{img.title}</h5>
//                     <p className="card-text">{img.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };







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
            {images.map((img, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div
                  className="card image-card h-100 shadow-sm"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img src={img.src} className="card-img-top" alt={img.title} />
                  <div className="card-body">
                    <h5 className="card-title">{img.title}</h5>
                    <p className="card-text">{img.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
