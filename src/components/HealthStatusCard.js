const HealthStatusCard = ({ healthMetrics }) => (
  <>
    {healthMetrics.map((metric, index) => (
      <div
        key={index}
        className={`position-absolute ${metric.position} end-0 m-3 bg-white shadow rounded p-3`}
        style={{ 
          width: '200px', 
          transform: metric.position === 'top-50' ? 'translateY(-50%)' : '' 
        }}
      >
        <div className="d-flex align-items-start gap-2">
          <div className="fs-4">{metric.icon}</div>
          <div>
            <strong>{metric.organ}</strong>
            <div className="text-muted small">{metric.date}</div>
            <div className="progress mt-2" style={{ height: '5px' }}>
              <div
                className="progress-bar"
                style={{ width: `${metric.progress}%`, backgroundColor: metric.color }}
              />
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default HealthStatusCard;
