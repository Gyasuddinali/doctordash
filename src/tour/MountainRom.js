
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MountainRom() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left: 3 Smaller Responsive Images */}
        <div className="col-md-6 mb-4">
          <div className="d-flex flex-column gap-3">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.sbDEJPxUOU0onhHqo-_jOAHaE8?w=626&h=418&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Image 1"
              className="img-fluid rounded"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
            <img
              src="https://i.pinimg.com/originals/0f/68/01/0f6801791a84b53db979c72404adf5b8.png"
              alt="Image 2"
              className="img-fluid rounded"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
            <img
              src="https://th.bing.com/th/id/R.185a4025b2426d2bdb69aac4c2a9e1fe?rik=dFrCXif7Gi87Hw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f02%2f6966828-beautiful-mountain-lakes.jpg&ehk=%2bg%2bVQ5VbliISAtOpOXMF0kQcE9UuTuxx58zhi69EO4k%3d&risl=&pid=ImgRaw&r=0"
              alt="Image 3"
              className="img-fluid rounded"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="col-md-6">
          <h2>Romance of the Mountains</h2>
          <p style={{ textAlign: 'justify' }}>
            CAPTURE NATURE IN HER ELEMENTS Perched in between hills at the heart of
             the Kumaon range is Almora the 5400 feet high scenic town offering a 
             harmony of breathtaking natural beauty and modern day conveniences. Famous
              for its fimeless culture, thickly wooded forests, picturesque valleys, 
              crystal lakes and twisting rivers, Almora is rightfully known as the 
              "Switzerland of India Paradise Cliff stands on the highest hill of Almora
              , combining the joy of living in the lap of nature and security of being 
              close to all basic amenities of present day lifestyles.
          </p>
           <img
              src="https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=dawn-landscape-mountains-247478.jpg&fm=jpg"
              alt="Image 3"
              className="img-fluid w-100 rounded"
            //   style={{ maxHeight: '180px', objectFit: 'cover' }}
          style={{
            height: '300px',
            objectFit: 'cover',
            display: 'block'
          }}
            />
        </div>
      </div>

      {/* Bottom Image with Overlay Box */}
      <div className="mt-5 position-relative">
        <img
          src="https://th.bing.com/th/id/R.f7530fdef06d86245c8cd739f2a5cf76?rik=EUjOSc4UjUYVCQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f04%2fMountain-wallpaper-HD-pictures-images-photos.jpg&ehk=vq8nbZerNFD2C1EvsPq8%2fibw03iCbvqKJ%2bMAVqR4YRk%3d&risl=&pid=ImgRaw&r=0"
          alt="Bottom Image"
          className="w-100 rounded"
          style={{
            height: '400px',
            objectFit: 'cover',
            display: 'block'
          }}
        />

        {/* Overlay Box */}
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
            <li>5400 ft. Above Sea level.</li>
            <li>345 km. From Delhi.</li>
            <li>Nanital, Ranikhet, Kausani, Binsar, Shitlakhet, Mukteshig Pithoragarh, Ramgarh-olla short drive away,</li>
            <li>All basic facilities like good hospitals, colleges, schools & good transport system.</li>
            <li>Highest hill of Almoran Just 6 km from Alma Uninterrupted views o Trishul & efter Him</li>
            <li>Away from chaos of omenifes</li>
            <li>Minimum temp. 2-15 (during winters Maximum 9-20
during summers
</li>
            <li>Exceptionally well maintained all weather rood network
Excellant public trans
</li>
            <li>Hope to Kaardter sneering is a well in the of its ovidedtolife
</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MountainRom;
