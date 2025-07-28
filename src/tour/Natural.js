
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
  return (
    <div className="container mt-5"  id="natural">
        <h1 className="fst-italic text-success rounded-pill ps-5 border border-warning">Paradise Cliff</h1>
                <h2 className="ms-10 bg-success  text-center text-white rounded ">The Natural Retreat</h2>

      <div className="row">
        {/* Left: 3 Smaller Responsive Images */}
        <div className="col-md-6 mb-4">
          <div className="d-flex flex-column gap-3">
            <img
              src="https://i.pinimg.com/originals/b7/47/ed/b747edb6369af405dfb3441f0b18aab2.jpg"
              alt="Image 1"
              className="img-fluid rounded"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.ecZyqs1ksq1Yg4esXfHxdgHaE7?pid=ImgDet&w=474&h=315&rs=1&o=7&rm=3"
              alt="Image 2"
              className="img-fluid rounded"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
            <img
              src="https://thumbs.dreamstime.com/z/doctor-doing-checkup-patient-beautiful-hispanic-examining-emergency-room-115811537.jpg"
              alt="Image 3"
              className="img-fluid rounded"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="col-md-6">
          <h2 className="  text-center text-danger">AN UNMATCHED HOUSING OPTION</h2>
      



<p className='pt-5 mt-5' style={{ textAlign: 'justify' }}>AMAFHH has already to its credit the success of its previously promoted 
AN UNMATCHED HOUSING OPTION Imagine waking up to find clouds entering 
your bedroom, sweet smell of flowers filling the air all around; 
chirping of birds sounding music to the ears and raindrops ornamenting 
the green leaves of abundant
 trees. Life in Paradise Cliff is like living your fantasies.
 Each and every house in this hilltop housing complex is a blend 
 of artistic design, aesthetics and natural environment. The architectural
  delights are created carefully to suit the needs of the connosseurs.
   Paradise Cliff is
  all about healthy and elegant lifestyle set amidst heavenly environs.
          </p>
       
           <img
              src="https://tse2.mm.bing.net/th/id/OIP.HxnQobZb_2-ZnKxFnHU1nAHaEU?w=1024&h=597&rs=1&pid=ImgDetMain&o=7&rm=3"
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
          src="https://images3.alphacoders.com/840/840607.jpg"
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
        <li>Fully Built-up Houses</li>
            <li>Freehold land with clear titles</li>
            <li>Uninterrupted Electricity & Water Supply</li>
            <li>Ample Parking Space</li>
            <li>Round the Clock Security</li>
            <li>Internal Telephone Exchange</li>
            <li>Cable TV</li>
            <li>
              Recreation Club with children play area, Billiards, Table Tennis, Card Room, and Health Club
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;