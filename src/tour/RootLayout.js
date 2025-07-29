

import { useEffect, useState } from "react";
import "./rootlay.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './HeroSection.css'
import AboutSection from "./AboutSection";
import MountainRom from "./MountainRom";
import Profile from "./Profile";
import Natural from "./Natural";
import Himalay from './Himalay'
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
    { id: 1, category: "adventure", title: "Nainital", subtitle:"NAINITAL LAKE VIEW",
      description: "This most famous hill station of Kumaon is 62 Kms from  situated at 6300 feet above see level this resort town is centered around a lake and has been the summer seat of the Provincial Government 7 Kms from Almora is perched atop the 5 Kms long saddle shaped ridge situated at 5800 feet above sea level.", image: "https://1.bp.blogspot.com/-5WtytcU0cV8/Xt-JQJOGffI/AAAAAAAADY8/__4BPVjfI_gW3oautX2GSPW1Dnc7aKZCwCK4BGAsYHg/s1440/Best-Places-to-visit-in-Nainital.jpg", size: "medium" , },
    { id: 2, category: "culture", title: "NAINITAL LAKE", subtitle:"A VIEW OF ALMORA",
      description:"Almora is the cultural centre of Kumaon. This is the District Headquarters and has a University and other Educational Institutions. There are very good medical facilities available at the Base Hospital and Almora aho has a helipad Driving time from Kathgodam 2hrs", image: "https://media.tripinvites.com/places/nainital/naini-lake/picturesque-nainital-lake-featured.jpg", size: "medium" },
    { id: 3, category: "nature", title: "Haldwani /Kathgodam", subtitle:"A VIEW OF NANDA DEVI FROM CHAUKORI",
      description: "Connected by rail to Delhi, Agra Bareily and Bucknow Important trains Shalabadi Express, Howrah Express (3019/3020), Ranikhet Express (3013/3014), Nainital Express (5308/5307) Rampur Passenger (1/2 RKPassenger and%RK of the biggest fruit and Passenger). Major town for all supplies to the hills. Is one vegetable", image: "https://www.lifeberrys.com/img/article/haldwani-1-1630993007-lb.jpg", size: "small" },
    {id:4,category:"culture" ,title:"Paradise Cliff",subtitle:"A VIIEW OF KOSI RIVER VALLEY FROM 'PRADIISE CLIFF'",
      description:"Paradise Cliff is part of the Kasar Devi Hill and is situated in a developed area, 7Kms from the District foan Almora on the main Binsar -Almora road. 370 Kma from New Delhi, easily accessible by an excellent all weather motorable road. The property is located in a lush forest of pine, oak chesnut Deodar A Panorma of the snow clad major Himalayan peaks on one side and the Kosi River Valley views from."
    ,size:"small",image:"https://s3.envato.com/files/c8a50d08-c1d7-47a3-a821-2f1f8d0ff030/inline_image_preview.jpg"
    },
    {id:5,category:"culture" ,title:"A VIEW OF KOSI RIVER VALLEY FROM PARADISE CLIFF",subtitle:"A VIEW BEYOND KAUSAANI",
      description:"Binsar is 30 Kms. from Paradise Cliff and is a well known high altitude wild life sanctuary. The reserve zone of Binsar sanctuary begins from Paradise Cliff"
    ,size:"small",image:"https://i.ytimg.com/vi/_AytXhpggxM/maxresdefault.jpg"
    },

    {id:6,category:"culture" ,title:"Ranikhet",subtitle:"A VIEW RANIKHET",
      description:"Another Picturesque Hill Station Kausani, is 33 Kms. Situated 6100 feet above sea level atop a narrow wooded ridge. Kausani is often compared with Switzerland Driving time from 'Paradise Cliff'-1hr 10 minutes Just 50kms away situated at 6000 ft. above sea level is Ranikhet. This retreat offers an interesting mix of hill and military cultures. It is an ideal holiday destination for nature lovers and golfers Driving time from Paradise Cliff 1hr 20 minutes"
    ,size:"small",image:"https://tse3.mm.bing.net/th/id/OIP.MlComqG7pdVWrW8WntuktgHaEK?w=768&h=432&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
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
    Items.slice(0, 6).map((item, idx) => {
      const reverse = idx % 2 === 1;
      return (




        
        <div className={`row align-items-center mb-5 ${reverse ? "flex-md-row-reverse" : ""}`} key={item.id}>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">The Visionary Promoters</a>
        <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#profile">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#uttranchal"> Uttaranchal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#almora">Almora</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#kasar">Kasardevi</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#paradise">Paradise</a>
            </li> 
          
            <li className="nav-item">
              <a className="nav-link" href="#tour">Tour</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
          <div className="col-md-6">
            <img src={item.image} alt={item.title} className="img-fluid rounded shadow" />
          <h4 className="text-center">{item.subtitle}</h4>
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
    <section className="hero-section d-flex align-items-center" id="hero">
      <div className="hero-overlay">
      <div className="container text-center text-white hero-content">
        <h1 className="hero-title">The Visionary Promoters</h1>
        <h2 className="hero-subtitle">Discover the World with Paradise Cliff</h2>
        <p className="hero-text mx-auto">
          AMAFHH Hotels & Resorts Pvt. Ltd., a pioneer in Himalayan hillside living, is
          known for real estate development that marries nature with luxury.
        </p>
        <p className="hero-text mx-auto mb-4">
          From cloud-lit mornings to panoramic valley views—Paradise Cliff promises unforgettable moments.
        </p>
        
      </div>
      </div>
    </section>

<Profile></Profile>
<Himalay></Himalay>
<MountainRom></MountainRom>
<AboutSection></AboutSection>
<Natural></Natural>

      {/* Explore the World */}
      <section className="explore-world py-5 bg-light" id="tour">
        <div className="container">
          <h2 className="section-title text-center mb-5">Explore the World</h2>
          {renderItem()}
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
              <h2 className="section-title">About The Visionary Promoters</h2>
              <p className="lead text-dark">
AMAFHH Hotels & Resorts Pvt. Ltd. - one of the pioneering companies to introduce the concept of life amidst nature is a well known name in the field of real estate development in the Himalayan hills.
AMAFHH has already to its credit the success of its previously promoted projects that have not just provided material properties to its clients but has also built a life long association with them. AMAFHH prides it self for its expertises and experience of transforming dreams into realities. The joy and happiness of its satisfied customers

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


      {/* Portfolio Gallery */}
      {/* <section className="portfolio-section py-5" id="portfolio">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Destinations</h2>
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
      </section> */}

      {/* Services */}
      {/* <section className="services-section py-5" id="services">
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
      </section> */}

      {/* Testimonials */}
      <section className="testimonials-section py-5 bg-light" id="testimonials">
        <div className="container">
          <h2 className="section-title text-center mb-5">Couple Reviews</h2>
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

