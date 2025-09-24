


import "./highlight.css"; 
function Highlights() {
  const highlights = [
    "Breathtaking Views –  See Nandadevi, Trishul, Panchachuli from your room",
    "Kasardevi Temple –  A spiritual landmark surrounded by oak forests",
    "Tranquil Retreat –  Inhabited by Buddhist monks; ideal for meditation & long stays",
    "Well Connected – Excellent public transport to & from Almorah",
    "Nature All Around – Oak forests, nature walks, and serene picnic spots",
    "Perfect Location –  Far from the chaos, close to amenities",
  ];


//   const highlights=[
// "Highest hill of Almorah — 6500 ft. above sea level", 
//  "Just 6 km from Almorah town",
//  "Uninterrupted views of Nandadevi, Trishul, and Panchachuli", 
//  "Away from the chaos of cities yet close to modern amenities",
//  "Inhabited by Buddhist monks, popular for long stays" ,
//  "Home to Kasardevi temple, surrounded by dense oak forests", 
// "Excellent public transport to and from Almora" ,

//   ]
  return (
    <section className="highlights-section">
      <div className="container">
        <h2>Our Highlights</h2>
        <div className="row">
          {highlights.map((hl, idx) => (
            <div key={idx} className="col">
              <div className="icon">✓</div>
              <p id="p1">{hl}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;





