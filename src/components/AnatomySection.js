import { healthStatus } from '../data/healthData';
import anatomyImage from '../assets/R.jpeg';

const AnatomySection = () => (
  <div className="row">
    <div className="col-md-6">
      <img src={anatomyImage} alt="Anatomy" className="img-fluid rounded"/> 
    </div>
    <div className="col-md-6">
      {healthStatus.map(({ id, label, status, color }) => (
        <div key={id} className="mb-3">
          <h6>{label}</h6>
          <p className={`text-${color}`}>{status}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AnatomySection;

