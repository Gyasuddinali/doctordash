

import { useEffect, useState } from "react";
import "./rootlay.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './HeroSection.css'

function RootLayout() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const portfolioItems = [
    { id: 1, category: "adventure", title: "Mountain Trekking", description: "Breathtaking trails & Himalayan panoramas.", image: "https://tse4.mm.bing.net/th/id/OIP.ZxZ_cxWzQyg_8Rwsv6nL0QHaEW?rs=1&pid=ImgDetMain&o=7&rm=3", size: "large" },
    { id: 2, category: "culture", title: "Local Markets", description: "Immerse in cuisine, crafts & native traditions.", image: "https://tse4.mm.bing.net/th/id/OIP.40oj8h9asu4WsgrZqLmOOwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", size: "medium" },
    { id: 3, category: "nature", title: "Serene Beach Escape", description: "Golden sands & crystal-clear waves.", image: "https://media.cntraveler.com/photos/566f062f8a2b39b76071c71a/master/pass/Maldavies-CR-ChrisMRogersGalleryStock.jpg", size: "large" },
    { id: 4, category: "city", title: "City Lights Tour", description: "Explore vibrant nightlife & iconic skylines.", image: "https://tse1.mm.bing.net/th/id/OIP.M6vQ7UMP2iIuoe-3gHZCQAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", size: "medium" },
    { id: 5, category: "heritage", title: "Ancient Monuments", description: "Discover timeless architectural marvels.", image: "https://thumbs.dreamstime.com/z/ancient-monuments-india-asia-name-monument-qutub-minar-situated-delhi-159033166.jpg", size: "small" },
    { id: 6, category: "cruise", title: "Luxury Cruise Voyage", description: "Relaxing ocean journeys with refined comfort.", image: "https://tse2.mm.bing.net/th/id/OIP.-j0XOfhoHSTyqog_sWmS_gHaD3?rs=1&pid=ImgDetMain&o=7&rm=3", size: "large" },
    { id: 7, category: "wildlife", title: "Jungle Safari", description: "Encounter majestic wildlife in its element.", image: "https://wildkasarwadi.com/assets/uploads/experiences/jungle_safari.jpg", size: "medium" },
    { id: 8, category: "hiking", title: "Canyon Hike", description: "Explore dramatic canyon trails and vistas.", image: "https://southwestmicroadventures.com/wp-content/uploads/2020/02/Grand-Canyon-Rim-to-Rim-Day-South-Kaibab-Hike.jpg", size: "large" }
  ];


  const Items = [
    { id: 1, category: "adventure", title: "Mountain Trekking", 
      description: "Mountain trekking refers to the act of walking or hiking through mountainous regions, often on established trails, to reach a summit or simply explore the wilderness. It differs from mountaineering in that it doesn't usually involve technical climbing or specialized gear like ropes or crampons.", image: "https://tse4.mm.bing.net/th/id/OIP.ZxZ_cxWzQyg_8Rwsv6nL0QHaEW?rs=1&pid=ImgDetMain&o=7&rm=3", size: "medium" },
    { id: 2, category: "culture", title: "Local Markets", 
      description: "Local markets are community-based marketplaces where vendors sell a variety of goods—often including fresh produce, handmade crafts, clothing, street food, and local specialties. They can be open-air, covered, or indoor, and they usually support local farmers, artisans, and small businesses.", image: "https://tse4.mm.bing.net/th/id/OIP.40oj8h9asu4WsgrZqLmOOwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", size: "medium" },
    { id: 3, category: "nature", title: "Serene Beach Escape", 
      description: "Unlike bustling beach resorts packed with crowds and nightlife, a serene beach escape emphasizes tranquility, natural beauty, and minimal distractions. It’s about slow mornings, barefoot walks, fresh seafood, and reconnecting with yourself or loved ones", image: "https://media.cntraveler.com/photos/566f062f8a2b39b76071c71a/master/pass/Maldavies-CR-ChrisMRogersGalleryStock.jpg", size: "small" },
    
  ];

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleFilterChange = (filter) => setActiveFilter(filter);

  const renderExploreBlocks = () =>
    portfolioItems.slice(0, 3).map((item, idx) => {
      const reverse = idx % 2 === 1;
      return (
        <div className={`row align-items-center mb-5 ${reverse ? "flex-md-row-reverse" : ""}`} key={item.id}>
          <div className="col-md-6">
            <img src={item.image} alt={item.title} className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">{item.title}</h3>
            <p className="text-dark">{item.description}</p>
          </div>
        </div>
      );
    });



      const renderItem = () =>
    Items.slice(0, 3).map((item, idx) => {
      const reverse = idx % 2 === 1;
      return (
        <div className={`row align-items-center mb-5 ${reverse ? "flex-md-row-reverse" : ""}`} key={item.id}>
          <div className="col-md-6">
            <img src={item.image} alt={item.title} className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">{item.title}</h3>
            <p className="text-dark">{item.description}</p>
          </div>
        </div>
      );
    });
  return (
    <div className={`App ${isLoaded ? "loaded" : ""}`}>



{/* Hero Section */}
<section className="hero-section" id="hero">
  <div className="hero-overlay">
    <div className="container text-center text-white">
      <h1 className="display-4 pt-5 fw-bold">Welcome to Paradise Cliff </h1>
           <h3 className="display-4 fw-bold">Discover the World with  Paradise Cliff </h3>

     <p className="lead  mb-4 text-white">
          Nestled high above turquoise waters, Paradise Cliff offers a breathtaking escape for nature lovers and peace seekers. Gaze across endless ocean horizons, unwind to the sound of crashing waves, and explore hidden trails carved through ancient stone.
        </p>
        <p className=" lead mb-4 text-white">
          Whether you're chasing sunrises, diving into crystal-clear lagoons, or just sipping coffee above the clouds—Paradise Cliff is where every moment feels infinite.
        </p>
      <a href="#explore" className="btn btn-lg btn-primary">Explore Now</a>
    </div>
  </div>
</section>



      {/* About Section */}
      <section className="about-section py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-image-container">
                <img
                  src="https://assets.thehansindia.com/h-upload/2019/12/27/248830-worldtour.jpg"
                  alt="Explore the World"
                  className="img-fluid rounded shadow-lg about-image"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <i className="fas fa-globe fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">About Paradise Cliff Tours</h2>
              <p className="lead text-dark">
Where the ocean meets the sky, and serenity greets you at sunrise.
Paradise Cliff is not just a destination—it's an experience carved by nature and perfected by peace. Perched high above the coastline, this cliffside retreat offers panoramic views of endless blue horizons, golden sunsets, and dramatic seascapes that take your breath away.
Whether you're:
Watching waves crash far below from a hammock,
Waking up to birdsong in your cliffside villa,
Or exploring secret trails woven through ancient rock,
Paradise Cliff brings you closer to the wild and wonderful beauty of nature—without ever compromising on comfort.
              </p>
              <div className="features">
                <div className="feature-item">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  <span className="text-dark">Curated Destinations</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-users text-primary"></i>
                  <span className="text-dark">Local Guides</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-hiking text-primary"></i>
                  <span className="text-dark">Adventure Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore the World */}
      <section className="explore-world py-5 bg-light" id="explore">
        <div className="container">
          <h2 className="section-title text-center mb-5">Explore the World</h2>
          {renderItem()}
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="portfolio-section py-5" id="portfolio">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Destinations & Tours</h2>
            <p>Filter by category to explore our offerings.</p>
          </div>
          <div className="filter-buttons text-center mb-4">
            {["all", "adventure", "culture", "nature", "city", "heritage", "cruise", "wildlife", "hiking"].map((cat) => (
              <button
                key={cat}
                className={`btn filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => handleFilterChange(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <div className="row">
            {filteredItems.map((item, idx) => (
              <div key={item.id} className={`col-lg-${item.size === "large" ? "6" : item.size === "medium" ? "4" : "3"} col-md-6 mb-4`}>
                <div className="portfolio-item">
                  <img src={item.image} alt={item.title} className="img-fluid rounded" />
                  <h5 className="mt-2">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section py-5" id="services">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Tour Packages</h2>
            <p>Expertly crafted itineraries for every traveler.</p>
          </div>
          <div className="row g-4">
            {[
              { img: "https://magazine.compareretreats.com/wp-content/uploads/2023/08/Beach-Hero-scaled.jpg", title: "Island Retreats", desc: "Private beaches & luxury resorts." },
              { img: "https://tse2.mm.bing.net/th/id/OIP.9fHia_XND02U_Gt2CkwAIgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", title: "Snow Adventures", desc: "Skiing and snowboarding experiences." },
              { img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/99/99/87.jpg", title: "Desert Safaris", desc: "Sunsets over golden dunes." }
            ].map((srv, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="service-card text-center">
                  <img src={srv.img} alt={srv.title} className="service-icon mb-3 rounded" />
                  <h4>{srv.title}</h4>
                  <p>{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-5 bg-light" id="testimonials">
        <div className="container">
          <h2 className="section-title text-center mb-5">Traveler Stories</h2>
          <div className="row">
            {[
              { name: "Gyasuddin Ali & Unknown", from: "London,UK", msg: "Our beach honeymoon with WanderWorld was pure bliss. From sunrise yoga to seafood dinners — unforgettable memories!" },
              { name: "Afroz & ms afroz", from: "Rishikesh, India", msg: "The rafting and forest trek were spectacular. We felt safe, well-guided, and fully immersed." },
              { name: "Danielle & Lee", from: "Bali, Indonesia", msg: "We discovered hidden temples and local cuisines. It felt like traveling with friends who knew all the secrets." }
            ].map((t, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{t.name}</h5>
                    <p className="card-text">“{t.msg}”</p>
                  </div>
                  <div className="card-footer text-muted">{t.from}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section py-5" id="contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <h2>Plan Your Journey</h2>
              <p className="lead">Reach out to start crafting your dream trip.</p>
              <div className="contact-info">
                <div className="contact-item"><i className="fas fa-phone text-primary"></i><span>+91 9199245 536</span></div>
                <div className="contact-item"><i className="fas fa-envelope text-primary"></i><span>tour@paradisecliff.com</span></div>
                <div className="contact-item"><i className="fas fa-map-marker-alt text-primary"></i><span>Siwan, Bihar, India</span></div>
              </div>
            </div>
            <div className="col-md-6">
              <form className="contact-form">
                <div className="mb-3"><input type="text" className="form-control" placeholder="Your Name" /></div>
                <div className="mb-3"><input type="email" className="form-control" placeholder="Your Email" /></div>
                <div className="mb-3"><textarea rows="4" className="form-control" placeholder="Tell us about your dream trip..."></textarea></div>
                <button type="submit" className="btn btn-primary w-100">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section py-4 text-center">
        <p>&copy; 2025  Tours. All rights reserved.</p>
        <div className="social-links">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </footer>
    </div>
  );
}

export default RootLayout;

