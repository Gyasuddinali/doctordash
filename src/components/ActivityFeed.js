const activityData = [
  { day: 'Mon', height: 20 },
  { day: 'Tue', height: 60 },
  { day: 'Wed', height: 35 },
  { day: 'Thu', height: 80 },
  { day: 'Fri', height: 45 },
  { day: 'Sat', height: 65 },
  { day: 'Sun', height: 30 },
];

const ActivityFeed = () => (
  <div className="bg-white p-4 rounded shadow">
    <h6 className="mb-3">Activity</h6>
    <div className="d-flex justify-content-between">
      {activityData.map((item, index) => (
        <div key={index} className="text-center flex-grow-1 mx-1">
          <div
            className="bg-info rounded-top"
            style={{ height: `${item.height}%`, width: '20px', margin: '0 auto' }}
          />
          <div className="small text-muted mt-1">{item.day}</div>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityFeed;
