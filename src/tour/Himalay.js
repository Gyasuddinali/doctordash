import React from 'react';

function AboutSection() {
  return (
    <div className="container mt-5" id="uttranchal">
      <h1 className="bg-dark rounded text-center text-white">Uttranchal</h1>
      <h2 className="bg-success rounded text-white text-center mt-3">Feeling the Himalayas
</h2>

      <div className="row mt-4">
        {/* Left: About Section */}
        <div className="col-lg-6 col-md-12 mb-4">
          <h2 className="fw-bold">FALL IN LOVE WITH THE TERRAIN</h2>
          <p className="text-justify">
            Lofty mountains, lush valleys, exotic flowers and unmatched spectacle 
            against permanent snows... the great Himalayan escape has always been the
             cynosure of the discerning. Nestled under the shadows of this majestic 
             mountain range is Uttaranchal - the state that offers the glory of nature
              at its best. Life in these hills is nothing but a glimpse of paradise - 
              where a leisurely walk is often interrupted by the passing clouds, where
               every breath is filled with the scent of a thousand flowers, where 
               every view is painted in a million shades of greens and blues.
                It is in these serene settings that Paradise Cliff is placed. 
                A unique housing option that is unmatched in ambience and uncomparable
                 in features.



          </p>

          <img
            src="https://1.bp.blogspot.com/-50oCXAwJnzA/XwBOcXM_rJI/AAAAAAAAMeI/OfU-0A-_gKMyKhREHYu47CP5bFjYdZoyQCLcBGAsYHQ/d/106909661_956712478084003_4686402456312810897_o.jpg"
            alt="Main View"
            className="img-fluid rounded mt-3"
            style={{ width: '100%', objectFit: 'cover', maxHeight: '300px' }}
          />
        </div>

        {/* Right: 3 Images */}
        <div className="col-lg-6 col-md-12 d-flex flex-column gap-3">
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/87/20/19/1000_F_287201927_2qIqUSkAp6dxsY5erhmLrUQDFafJFFg7.jpg"
            alt="Image 1"
            className="img-fluid rounded"
            style={{ objectFit: 'cover', width: '100%', maxHeight: '180px' }}
          />
          <img
            src="https://thumbs.dreamstime.com/b/kumaon-himalaya-mountain-range-snow-peaks-flying-migratory-birds-as-viewed-binsar-zero-point-uttarakhand-india-176822477.jpg"
            alt="Image 2"
            className="img-fluid rounded"
            style={{ objectFit: 'cover', width: '100%', maxHeight: '180px' }}
          />
          <img
            src="https://c8.alamy.com/comp/2F85WEB/himalaya-panoramic-view-of-indian-himalayas-great-himalayan-range-uttarakhand-india-2F85WEB.jpg"
            alt="Image 3"
            className="img-fluid rounded"
            style={{ objectFit: 'cover', width: '100%', maxHeight: '180px' }}
          />
        </div>
      </div>

      {/* Bottom Section with Overlay */}
      <div className="mt-5 position-relative">
        <img
          src="https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/07/30145525/valley-of-flowers-1600x900.jpg"
          alt="Bottom Image"
          className="w-100 rounded"
          style={{
            objectFit: 'cover',
            height: '400px',
            width: '100%',
          }}
        />

        {/* <div
          className="position-absolute text-white p-3 p-sm-4"
          style={{
            top: '50%',
            left: '5%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '8px',
            maxWidth: '90%',
            width: '100%',
          }}
        >
          <h5 className="fw-bold">🌟 Our Highlights</h5>
          <ul className="mb-0 small">
            <li>Highest hill of Almora — 6500 ft. above sea level</li>
            <li>Just 6 km from Almora town</li>
            <li>Uninterrupted views of Nandadevi, Trishul, and Panchachuli</li>
            <li>Away from the chaos of cities yet close to modern amenities</li>
            <li>Inhabited by Buddhist monks, popular for long stays</li>
            <li>Home to Kasardevi temple, surrounded by dense oak forests</li>
            <li>Excellent public transport to and from Almora</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default AboutSection;
