const DashboardOverview = () => (
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Appointments</h5>
          <p className="card-text">4 upcoming appointments</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Tests</h5>
          <p className="card-text">2 pending tests</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Messages</h5>
          <p className="card-text">5 unread messages</p>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardOverview;
