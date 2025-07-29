import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Natural() {
  return (
    <div className="container mt-5" id="aradise">
      <h1 className="fst-italic text-success rounded-pill ps-5 border border-warning text-center text-md-start">
        Paradise Cliff
      </h1>
      <h2 className="bg-success text-center text-white rounded py-2">
        The Natural Retreat
      </h2>

      <div className="row mt-4">
        {/* Left: Images */}
        <div className="col-lg-6 col-md-12 mb-4">
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
        <div className="col-lg-6 col-md-12">
          <h2 className="text-center text-danger mb-3">An Unmatched Housing Option</h2>
          <p className="pt-3" style={{ textAlign: 'justify' }}>
            AMAFHH has already to its credit the success of its previously promoted housing projects.
            Imagine waking up to clouds entering your bedroom, the sweet scent of flowers filling the air,
            birds chirping melodiously, and raindrops decorating green leaves. Life at Paradise Cliff is
            like living your fantasies.
            <br /><br />
            Every home here is an artistic blend of elegant design and natural beauty, created to meet the
            lifestyle of true connoisseurs. Paradise Cliff is where health and serenity meet modern living.
          </p>

          <img
            src="https://tse2.mm.bing.net/th/id/OIP.HxnQobZb_2-ZnKxFnHU1nAHaEU?w=1024&h=597&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Housing"
            className="img-fluid w-100 rounded mt-3"
            style={{ height: '300px', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Bottom Image with Overlay */}
      <div className="mt-5 position-relative">
        <img
          src="https://images3.alphacoders.com/840/840607.jpg"
          alt="Bottom"
          className="w-100 rounded"
          style={{ height: '400px', objectFit: 'cover' }}
        />

        <div
          className="position-absolute text-white p-3 p-md-4"
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
          <h5 className="fw-bold">Our Highlights</h5>
          <ul className="small mb-0">
            <li> Fully Built-up Houses</li>
            <li> Freehold Land with Clear Titles</li>
            <li> Uninterrupted Electricity & Water Supply</li>
            <li> Ample Parking Space</li>
            <li> Round-the-Clock Security</li>
            <li> Internal Telephone Exchange</li>
            <li> Cable TV Access</li>
            <li>Recreation Club with Children's Play Area, Billiards, Table Tennis, Card Room & Health Club</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Natural;
