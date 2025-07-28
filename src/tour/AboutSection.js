

function  AboutSection() {
  return (
    <div className="container mt-5">
        <h1 className="bg-dark rounded text-center text-white">KASARDEVI</h1>
              <h1 className="bg-success rounded text-white">Images Of Heaven</h1>

      <div className="row">
        {/* Left: About Section */}
        <div className="col-md-6 mb-4">
          <h2>SOAK IN THE HEALTHY CLIMATE</h2>
          <p>
           Rising majestically from the panoramic backdrop of a range of mountains is Kasardevi - the highest hill of the Almora region and home to Paradise Cliff. The height makes it the ideal place for enjoying the enchanting views of the snowclad peaks that surround the place from three sides. Trishul, Nandadevi and other peaks are a treat to the eyes. The spectrum of colors that cover every view of the mighty Himalayas from here, ranges from the golden hue at sunrise to a burning crimson red at sunset.
Apart from the views, the most attractive feature of every house within Paradise Cliff is the entancing, life enhancing climate-a gift of the purity of nature.

          </p>
           <img
              src="https://tse2.mm.bing.net/th/id/OIP.MYm_h0q0II-wN2UrJnrj3wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Image 3"
              className="img-fluid rounded"
            //   style={{ maxHeight: '180px', objectFit: 'cover' }}
          style={{
            height: '300px',
            objectFit: 'cover',
            display: 'block'
          }}
            />
        </div>

        {/* Right: 3 Images */}
        <div className="col-md-6 mb-4 d-flex flex-column gap-3">
          {/* <div className="row"> */}
            {/* <div className="col-12 mb-3"> */}
              <img src="https://static2.tripoto.com/media/filter/nl/img/25072/TripDocument/1531333077_mg_9910_1.jpg" alt="Image 1" className="img-fluid rounded" style={{ maxHeight: '180px', objectFit: 'cover' }}/>
            {/* </div>
            <div className="col-12 mb-3"> */}
              <img src="https://images.picxy.com/cache/2020/11/20/d32e57f8afbdcb96a8c8d0909a9631e3.jpg" alt="Image 2" className="img-fluid rounded" style={{ maxHeight: '180px', objectFit: 'cover' }}/>
            {/* </div>
            <div className="col-12"> */}
              <img src="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/12/rsz_shutterstock_394361947.jpg" alt="Image 3" className="img-fluid rounded" style={{ maxHeight: '180px', objectFit: 'cover' }}/>
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>



     {/* Bottom Image with Overlay Box */}
<div className="mt-5 position-relative">
  {/* Full-width image */}
  <img
    src="https://wallpaperaccess.com/full/2416436.jpg"
    alt="Bottom Image"
    className="w-100 rounded"
    style={{
      height: '400px',
      objectFit: 'cover',
      display: 'block'
    }}
  />

  {/* Overlay Box - anchored inside relative container */}
  <div
    className="position-absolute text-white p-4"
    style={{
      top: '50%',
      left: '5%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: '8px',
      maxWidth: '800px'
    }}
  >
    <h5>Our Highlights</h5>
    <ul className="mb-0">
      <li>Highest hill of Almora. 6500 ft. above sea level.</li>
      <li> Just 6 km. from Almora town.</li>
      <li>Uninterrupted views of Nandadevi</li>
       <li>Panchachluli Kailash Parvat</li>
        <li> Trishul & other Himalayan peaks.
</li>
         <li>Always from chaos of crowded cities yet close to all modern day amenities.</li>
          <li>Inhabited by Buddhist monks and a place popular among foreigners for long stays</li>
    <li>Home to Kasardevi femple and surrounded by thick Oak forests.
</li>
<li>Excellent public transport system to and from Almora town.</li>
    </ul>
  </div>
</div>

    </div>
  );
}

export default AboutSection;
