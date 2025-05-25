const SimpleAppointmentCard = ({ time, title, doctor }) => (
  <div className="bg-light p-3 rounded mb-2">
    <strong>{title}</strong>
    <div className="small text-muted">{doctor}</div>
    <div className="text-muted">{time}</div>
  </div>
);

export default SimpleAppointmentCard;
