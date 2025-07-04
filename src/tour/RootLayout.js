
// import { useEffect, useState } from "react"

// import "./root.css"

// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
// import HeroSection from './HeroSection'
// function RootLayout() {
//   const [isLoaded, setIsLoaded] = useState(false)
//   const [activeFilter, setActiveFilter] = useState("all")

//   useEffect(() => {
//     setIsLoaded(true)
//   }, [])

//   // Portfolio categories and images
//   const portfolioItems = [

//   {
//     id: 1,
//     category: "adventure",
//     title: "Mountain Trekking",
//     description: "Explore breathtaking mountain trails and enjoy panoramic views.",
//     image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/mountain-climbing-1990991_1280.jpg",
//     size: "large",
//   },
//   {
//     id: 2,
//     category: "culture",
//     title: "Local Markets",
//     description: "Vibrant street markets with local crafts and cuisine.",
//     image: "https://cdn.pixabay.com/photo/2018/01/31/07/59/market-3124037_1280.jpg",
//     size: "medium",
//   },
//   {
//     id: 3,
//     category: "nature",
//     title: "Serene Beach Escape",
//     description: "Unwind at exotic beaches with golden sands and turquoise waters.",
//     image: "https://cdn.pixabay.com/photo/2015/03/26/09/54/beach-690034_1280.jpg",
//     size: "large",
//   },
//   {
//     id: 4,
//     category: "city",
//     title: "City Lights Tour",
//     description: "Experience nightlife and urban landmarks of world-famous cities.",
//     image: "https://cdn.pixabay.com/photo/2016/11/18/14/33/architecture-1836478_1280.jpg",
//     size: "medium",
//   },
//   {
//     id: 5,
//     category: "culture",
//     title: "Traditional Festival",
//     description: "Immerse in colorful festivals and cultural parades.",
//     image: "https://cdn.pixabay.com/photo/2017/10/25/10/52/diwali-2885246_1280.jpg",
//     size: "small",
//   },
//   {
//     id: 6,
//     category: "adventure",
//     title: "Desert Safari",
//     description: "Thrilling rides and sunsets over majestic dunes.",
//     image: "https://cdn.pixabay.com/photo/2018/05/09/20/55/safari-3382230_1280.jpg",
//     size: "large",
//   },
//   {
//     id: 7,
//     category: "nature",
//     title: "Forest Retreat",
//     description: "Reconnect with nature in lush green forests and eco-lodges.",
//     image: "https://cdn.pixabay.com/photo/2017/03/27/14/56/forest-2178745_1280.jpg",
//     size: "medium",
//   },
//   {
//     id: 8,
//     category: "heritage",
//     title: "Ancient Monuments",
//     description: "Visit iconic historical landmarks and architectural marvels.",
//     image: "https://cdn.pixabay.com/photo/2015/07/28/22/05/temple-865370_1280.jpg",
//     size: "small",
//   },



//     {
//     id: 9,
//     category: "cruise",
//     title: "Luxury Cruise Voyage",
//     description: "Sail through pristine oceans on a luxury cruise liner.",
//     image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/cruise-1990989_1280.jpg",
//     size: "large",
//   },
//   {
//     id: 10,
//     category: "wildlife",
//     title: "Jungle Safari",
//     description: "Close encounters with wildlife in natural habitats.",
//     image: "https://cdn.pixabay.com/photo/2016/11/29/10/07/lion-1866531_1280.jpg",
//     size: "medium",
//   },
//   {
//     id: 11,
//     category: "hiking",
//     title: "Canyon Hike",
//     description: "Adventurous hikes through dramatic canyon landscapes.",
//     image: "https://cdn.pixabay.com/photo/2016/06/22/05/36/grand-canyon-1473276_1280.jpg",
//     size: "large",
//   },
//   {
//     id: 12,
//     category: "snow",
//     title: "Snow Adventures",
//     description: "Snowboarding, skiing, and alpine magic in winter destinations.",
//     image: "https://cdn.pixabay.com/photo/2015/11/19/21/11/skier-1056737_1280.jpg",
//     size: "medium",
//   },
//   {
//     id: 13,
//     category: "culture",
//     title: "Temple Exploration",
//     description: "Discover ancient temples and spiritual landmarks.",
//     image: "https://cdn.pixabay.com/photo/2015/08/15/11/53/bali-889864_1280.jpg",
//     size: "small",
//   },
//   {
//     id: 14,
//     category: "relaxation",
//     title: "Spa & Wellness Retreat",
//     description: "Rejuvenate with world-class spa treatments in scenic settings.",
//     image: "https://cdn.pixabay.com/photo/2017/06/30/02/07/spa-2456304_1280.jpg",
//     size: "medium",
//   },
//   {
//     id: 15,
//     category: "island",
//     title: "Island Getaway",
//     description: "Private islands, coral reefs, and tropical serenity.",
//     image: "https://cdn.pixabay.com/photo/2016/10/13/09/06/boracay-1731269_1280.jpg",
//     size: "large",
//   },
//   {
//     id: 16,
//     category: "food",
//     title: "Culinary Tour",
//     description: "Taste your way through authentic regional cuisines.",
//     image: "https://cdn.pixabay.com/photo/2014/10/23/18/05/buffet-500254_1280.jpg",
//     size: "small",
//   }
//   ]

//   const filteredItems =
//     activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

//   const handleFilterChange = (filter) => {
//     setActiveFilter(filter)
//   }

//   return (
//     <div className={`App ${isLoaded ? "loaded" : ""}`}>
//       {/* Hero Section */}
//     <HeroSection></HeroSection>

//       {/* About Section */}
//       <section className="about-section py-5">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-6 mb-4 mb-lg-0">
//               <div className="about-image-container">
//                 <img
//                   src=""
//                   alt="Wedding Photography"
//                   className="img-fluid rounded shadow-lg about-image"
//                 />
//                 <div className="image-overlay">
//                   <div className="overlay-content">
//                     <i className="fas fa-camera fa-3x"></i>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="about-content">
//                 <h2 className="section-title">About Yaadein Films & Photography</h2>
//                 <p className="lead text-dark">
//                   {/* We specialize in capturing the beauty, tradition, and emotion of Indian weddings. Every moment tells a
//                   story, and we're here to preserve those memories forever. */}
//                 At Yaadein Films & Photography, we don’t just capture moments — we preserve emotions, tell stories, and create timeless memories. Founded with a deep passion for visual storytelling, we specialize in cinematic wedding films, heartfelt pre-wedding shoots, elegant portraits, and creative event coverage.

// Our name, Yaadein — which means memories — reflects our core belief: every picture holds a story, and every story deserves to be told beautifully. Whether it’s the stolen glance of a bride, the laughter of friends, or the grandeur of cultural traditions, we aim to document every detail with artistry and authenticity.
//                 </p>
//                 <div className="features">
//                   <div className="feature-item">
//                     <i className="fas fa-heart text-primary"></i>
//                     <span className='text-dark'>Emotional Storytelling</span>
//                   </div>
//                   <div className="feature-item">
//                     <i className="fas fa-gem text-primary"></i>
//                     <span className='text-dark'>Traditional Elegance</span>
//                   </div>
//                   <div className="feature-item">
//                     <i className="fas fa-star text-primary"></i>
//                     <span className='text-dark'>Premium Quality</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Section */}
//       <section className="portfolio-section py-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-12 text-center mb-5">
//               <h2 className="section-title">Our Portfolio</h2>
//               <p className="section-subtitle">A collection of our finest wedding photography moments</p>
//             </div>
//           </div>

//           {/* Filter Buttons */}
//           <div className="row mb-4">
//             <div className="col-12">
//               <div className="filter-buttons text-center">
//                 <button
//                   className={`btn filter-btn ${activeFilter === "all" ? "active" : ""}`}
//                   onClick={() => handleFilterChange("all")}
//                 >
//                   All
//                 </button>
               
// <button
//         className={`btn filter-btn ${activeFilter === "adventure" ? "active" : ""}`}
//         onClick={() => handleFilterChange("adventure")}
//       >
//         Adventure
//       </button>
//       <button
//         className={`btn filter-btn ${activeFilter === "culture" ? "active" : ""}`}
//         onClick={() => handleFilterChange("culture")}
//       >
//         Culture
//       </button>
//       <button
//         className={`btn filter-btn ${activeFilter === "nature" ? "active" : ""}`}
//         onClick={() => handleFilterChange("nature")}
//       >
//         Nature
//       </button>
//       <button
//         className={`btn filter-btn ${activeFilter === "city" ? "active" : ""}`}
//         onClick={() => handleFilterChange("city")}
//       >
//         City
//       </button>
//       <button
//         className={`btn filter-btn ${activeFilter === "heritage" ? "active" : ""}`}
//         onClick={() => handleFilterChange("heritage")}
//       >
//         Heritage
//       </button>
//       <button
//         className={`btn filter-btn ${activeFilter === "cruise" ? "active" : ""}`}
//         onClick={() => handleFilterChange("cruise")}
//       >
//         Cruise
//       </button>
//       <button
//         className={`btn filter-btn ${activeFilter === "wildlife" ? "active" : ""}`}
//         onClick={() => handleFilterChange("wildlife")}
//       >
//         Wildlife
//       </button>
//       <button
//         className={`btn filter-btn ${activeFilter === "hiking" ? "active" : ""}`}
//         onClick={() => handleFilterChange("hiking")}
//       >
//         Hiking
//       </button>
//       <button
//         className={`btn filter-btn ${activeFilter === "snow" ? "active" : ""}`}
//         onClick={() => handleFilterChange("snow")}
//       >
//         Snow
//       </button>
//       <button
//         className={`btn filter-btn ${activeFilter === "relaxation" ? "active" : ""}`}
//         onClick={() => handleFilterChange("relaxation")}
//       >
//         Relaxation
//       </button>
//       <button
//         className={`btn filter-btn ${activeFilter === "island" ? "active" : ""}`}
//         onClick={() => handleFilterChange("island")}
//       >
//         Island
//       </button>
//       <button
//         className={`btn filter-btn ${activeFilter === "food" ? "active" : ""}`}
//         onClick={() => handleFilterChange("food")}
//       >
//         Food
//       </button>
//               </div>
//             </div>
//           </div>

//           {/* Portfolio Grid */}
//           <div className="row portfolio-grid">
//             {filteredItems.map((item, index) => (
//               <div
//                 key={item.id}
//                 className={`col-lg-${item.size === "large" ? "6" : item.size === "medium" ? "4" : "3"} col-md-6 col-sm-12 mb-4`}
//               >
//                 <div className="portfolio-item" style={{ animationDelay: `${index * 0.1}s` }}>
//                   <div className="portfolio-image-container">
//                     <img
//                       src={item.image || "/placeholder.svg"}
//                       alt={item.title}
//                       className="img-fluid portfolio-image"
//                     />
//                     <div className="portfolio-overlay">
//                       <div className="portfolio-content">
//                         <h4>{item.title}</h4>
//                         <p>{item.description}</p>
//                         <button className="btn btn-light btn-sm">
//                           <i className="fas fa-expand-alt"></i>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services-section py-5 bg-light">
//         <div className="container">
//           <div className="row">
//             <div className="col-12 text-center mb-5">
//               <h2 className="section-title">Our Services</h2>
//               <p className="section-subtitle">Complete wedding photography packages tailored to your needs</p>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-4 col-md-6 mb-4">
//               <div className="service-card">
//                  <img src='https://shaadiwish.com/blog/wp-content/uploads/2020/09/pre-wedding-dresses-1024x682.jpg' className="service-icon"/>

//                 {/* <div className="service-icon">
//                   <i className="fas fa-camera-retro"></i>
//                 </div> */}
//                 <h4>Pre-Wedding Shoot</h4>
//                 <p className='text-dark'>
//                   Capture your love story before the big day with romantic and creative pre-wedding photography
//                   sessions.
//                 </p>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6 mb-4">
//               <div className="service-card">
//                 {/* <div className="service-icon">
//                   <i className="fas fa-ring"></i>
//                 </div> */}
//              <img src='https://static.vecteezy.com/system/resources/previews/024/075/724/large_2x/portrait-of-muslim-wedding-couple-wearing-traditional-attire-generative-ai-photo.jpg' className="service-icon"/>

//                 <h4>Wedding Day Coverage</h4>
//                 <p className='text-dark'>Complete documentation of your wedding day from getting ready to the final celebration moments.</p>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6 mb-4">
//               <div className="service-card">
//                 {/* <div className="service-icon">
//                   <i className="fas fa-heart"></i>
//                 </div> */}
//                 <img src='https://th.bing.com/th/id/R.01aacc423eea5bbf219ebe399a0ec04a?rik=cvN7We9at9QU%2bg&riu=http%3a%2f%2fwww.maharaniweddings.com%2fmedia%2fgallery%2f55347-1-orig.jpeg&ehk=drfhcNeD%2bNqcYSUI2nuwHs3g%2bdFeMX7%2bJYq9Vvp3kBA%3d&risl=&pid=ImgRaw&r=0' className="service-icon"/>

//                 <h4>Reception Photography</h4>
//                 <p className='text-dark'>Capture the joy and celebration of your reception with candid and posed photography.</p>
//               </div>
//             </div>

//               <div class="col-lg-4 col-md-6 mb-4">
//         <div class="service-card">
//           <img src="https://assets-global.website-files.com/63cdd2d1d805d52f99098938/64a185fa2133a5f4177716b1_Event-coverage-video.jpg" alt="Event Coverage" class="service-icon mb-3 img-fluid rounded" />
//           <h4 class="fw-bold">Event Coverage</h4>
//           <p class="text-dark">We cover birthdays, engagements, and celebrations with vibrant, professional visuals.</p>
//         </div>
//       </div>

//         <div class="col-lg-4 col-md-6 mb-4">
//         <div class="service-card">
//           <img src="https://stability-images-upload.s3.amazonaws.com/v1_txt2img_acd68314-b651-451b-a13c-d96366645fae.png" alt="Cinematic Edits" class="service-icon mb-3 img-fluid rounded" />
//           <h4 class="fw-bold">Cinematic Edits</h4>
//           <p class="text-dark">Emotionally engaging edits that turn your memories into timeless visual stories.</p>
//         </div>
//       </div>
//       <div class="col-lg-4 col-md-6 mb-4">
//         <div class="service-card">
//           <img src="https://scontent.fdbd1-2.fna.fbcdn.net/v/t39.30808-6/501199486_4135925266734227_6983473907717027916_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TRLp6TiOJIgQ7kNvwEIyqr6&_nc_oc=AdlSQRruDcgl8FSTfrWktOTSOH5h5RuKkCdhi0qRNAVSAJaK_VP7V7m7DnYPmYIoRUcnZmbP7qiH0A2_QqtyGvL_&_nc_zt=23&_nc_ht=scontent.fdbd1-2.fna&_nc_gid=7dXdi4-T_kkI2v_zpGdMFQ&oh=00_AfPWq1injro5vsBnmjPpeEVJDVDyzbZ1AbIkJRHf3XN6YQ&oe=6867EFF6" alt="Portraits" class="service-icon mb-3 img-fluid rounded" />
//           <h4 class="fw-bold">Portraits & Lifestyle</h4>
//           <p class="text-dark">Character-rich, professional portraits that bring out your unique essence.</p>
//         </div>
//       </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials-section py-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-12 text-center mb-5">
//               <h2 className="section-title">What Couples Say</h2>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-4 col-md-6 mb-4">
//               <div className="testimonial-card">
//                 <div className="testimonial-content">
//                   <p>
//                     "Absolutely stunning photography! They captured every emotion and detail perfectly. Our wedding
//                     album is a treasure."
//                   </p>
//                 </div>
//                 <div className="testimonial-author">
//                   <h5>Gyasuddin & Unknown</h5>
//                   <span>Mumbai Wedding</span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6 mb-4">
//               <div className="testimonial-card">
//                 <div className="testimonial-content">
//                   <p>
//                     "Professional, creative, and so easy to work with. They made us feel comfortable and the results
//                     were beyond our expectations."
//                   </p>
//                 </div>
//                 <div className="testimonial-author">
//                   <h5>Anita & Vikram</h5>
//                   <span>Delhi Wedding</span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6 mb-4">
//               <div className="testimonial-card">
//                 <div className="testimonial-content">
//                   <p>
//                     "They understood our vision perfectly and delivered photographs that tell our love story
//                     beautifully."
//                   </p>
//                 </div>
//                 <div className="testimonial-author">
//                   <h5>Taiyab & Hussainara</h5>
//                   <span>Mairwa</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="contact-section py-5">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-6 mb-4 mb-lg-0">
//               <h2 className="section-title">Let's Create Magic Together</h2>
//               <p className="lead">
//                 Ready to capture your special day? Get in touch with us to discuss your wedding photography needs.
//               </p>
//               <div className="contact-info">
//                 <div className="contact-item">
//                   <i className="fas fa-phone text-primary"></i>
//                   <span>9199245536</span>
//                 </div>
//                 <div className="contact-item">
//                   <i className="fas fa-envelope text-primary"></i>
//                   <span>tour@gmail.com</span>
//                 </div>
//                 <div className="contact-item">
//                   <i className="fas fa-map-marker-alt text-primary"></i>
//                   <span>Siwan, Bihar</span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="contact-form">
//                 <form>
//                   <div className="row">
//                     <div className="col-md-6 mb-3">
//                       <input type="text" className="form-control" placeholder="Your Name" />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <input type="email" className="form-control" placeholder="Your Email" />
//                     </div>
//                   </div>
//                   <div className="mb-3">
//                     <input type="text" className="form-control" placeholder="Wedding Date" />
//                   </div>
//                   <div className="mb-3">
//                     <textarea className="form-control" rows="4" placeholder="Tell us about your wedding..."></textarea>
//                   </div>
//                   <button type="submit" className="btn btn-primary btn-lg w-100">
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

// {/*reviews */}

// <section className="py-5 bg-light text-center">
//   <div className="container">
//     <h2 className="mb-5 text-dark">Reviews</h2>
//     <div className="row">

//       {/* Testimonial 1 */}
//       <div className="col-md-4 mb-4">
//         <div className="card h-100 shadow-sm">
//           <img
//             src=""
//             className="card-img-top"
//             alt="Gyasu"
//           />
//           <div className="card-body">
//             <h5 className="card-title">Gyasuddin Shams</h5>
//             <p className="text-warning">
//               ★★★★★
//             </p>
//             <p className="card-text">
//               “Our wedding video made us cry — in the best way. Every detail was captured perfectly. We couldn’t be happier!”
//             </p>
//           </div>
//           <div className="card-footer text-muted">Siwan, Bihar</div>
//         </div>
//       </div>

//       {/* Testimonial 2 */}
//       <div className="col-md-4 mb-4">
//         <div className="card h-100 shadow-sm">
//           <img
//             src="https://randomuser.me/api/portraits/men/51.jpg"
//             className="card-img-top"
//             alt="Rohit Mehra"
//           />
//           <div className="card-body">
//             <h5 className="card-title">Rohit & Simran</h5>
//             <p className="text-warning">
//               ★★★★★
//             </p>
//             <p className="card-text">
//               “The Yaadein team is incredible. They delivered more than a video — they gave us a memory we’ll watch forever.”
//             </p>
//           </div>
//           <div className="card-footer text-muted">Mumbai, India</div>
//         </div>
//       </div>

//       {/* Testimonial 3 */}
//       <div className="col-md-4 mb-4">
//         <div className="card h-100 shadow-sm">
//           <img
//             src="https://randomuser.me/api/portraits/women/44.jpg"
//             className="card-img-top"
//             alt="Meera Patel"
//           />
//           <div className="card-body">
//             <h5 className="card-title">Aarav & Meera</h5>
//             <p className="text-warning">
//               ★★★★★
//             </p>
//             <p className="card-text">
//               “Everything felt so cinematic. The colors, music, emotions — absolutely flawless. Highly recommend!”
//             </p>
//           </div>
//           <div className="card-footer text-muted">Delhi, India</div>
//         </div>
//       </div>

//     </div>
//   </div>
// </section>


//       {/* Footer */}
//       <footer className="footer-section py-4">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <p className="mb-0">&copy; 2024 Wedding Photography. All rights reserved.</p>
//             </div>
//             <div className="col-md-6 text-md-end">
//               <div className="social-links">
//                 <a href="https://www.instagram.com/yfstudioindia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-link">
//                   <FaInstagram></FaInstagram>
//                 </a>
//                 <a href="https://www.facebook.com/profile.php?id=100063884984407" className="social-link">
                  
//                   <FaFacebook></FaFacebook>
//                 </a>
//                 <a href="#" className="social-link">
//                   <FaTwitter></FaTwitter>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default RootLayout











import { useEffect, useState } from "react";
import "./root.css";
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

  return (
    <div className={`App ${isLoaded ? "loaded" : ""}`}>
     
{/* Hero Section */}
<section className="hero-section">
  <div className="hero-overlay">
    <div className="container text-center text-white">
      <h1 className="display-4 fw-bold">Welcome to Paradise Cliff </h1>
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
      <section className="about-section py-5">
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
      <section className="explore-world py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Explore the World</h2>
          {renderExploreBlocks()}
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="portfolio-section py-5">
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
      <section className="services-section py-5">
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
      <section className="testimonials-section py-5 bg-light">
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
      <section className="contact-section py-5">
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
        <p>&copy; 2025 WanderWorld Tours. All rights reserved.</p>
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

