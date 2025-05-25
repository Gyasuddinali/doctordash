const CalendarView = ({ weekDays = [], dates = [] }) => (
  <div className="mb-3">
    <div className="row row-cols-7 text-center small text-muted">
      {weekDays.map((day, idx) => (
        <div key={idx} className="col">{day}</div>
      ))}
    </div>
    <div className="row row-cols-7 text-center mt-1">
      {dates.map((date, idx) => (
        <div key={idx} className="col">
          <div className={`rounded-circle p-2 ${date === '26' ? 'bg-primary text-white' : 'text-dark'}`}>
            {date}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CalendarView;



