import { Search, Bell, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const Header = ({ currentDate, onDateChange }) => (
  <header className="bg-white p-3 border-bottom d-flex justify-content-between align-items-center">
    <div className="d-flex align-items-center gap-3">
      <h5 className="mb-0 fw-semibold">Dashboard</h5>
      <div className="position-relative">
        <Search size={16} className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted" />
        <input
          type="text"
          className="form-control ps-4"
          placeholder="Search"
          style={{ width: '250px' }}
        />
      </div>
    </div>
    <div className="d-flex align-items-center gap-3">
      <span className="text-muted small">This Week</span>
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-light btn-sm" onClick={() => onDateChange('prev')}>
          <ChevronLeft size={16} />
        </button>
        <span className="fw-medium">{currentDate}</span>
        <button className="btn btn-light btn-sm" onClick={() => onDateChange('next')}>
          <ChevronRight size={16} />
        </button>
      </div>
      <Bell size={20} className="text-muted" />
      <button className="btn btn-info text-white rounded-circle p-2">
        <Plus size={16} />
      </button>
      <div
        className="bg-info text-white rounded-circle d-flex justify-content-center align-items-center"
        style={{ width: '32px', height: '32px' }}
      >
        U
      </div>
    </div>
  </header>
);

export default Header;

