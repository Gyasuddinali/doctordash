const upcomingAppointments = [
  { time: '11:00 AM', title: 'Health Checkup', doctor: 'Dr. Smith' },
  { time: '02:00 PM', title: 'Ophthalmologist', doctor: 'Dr. Johnson' },
  { time: '04:00 PM', title: 'Cardiology Consultation', doctor: 'Dr. Lee' },
];

const UpcomingSchedule = () => (
  <div className="bg-white p-4 rounded shadow">
    <h6 className="mb-3">Upcoming Schedule</h6>
    {upcomingAppointments.map((appointment, index) => (
      <div key={index} className="d-flex justify-content-between mb-2">
        <div>
          <strong>{appointment.title}</strong>
          <div className="small text-muted">{appointment.doctor}</div>
        </div>
        <div className="text-muted">{appointment.time}</div>
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;
