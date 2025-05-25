import { LayoutDashboard, History, Calendar, Clock, BarChart3, MessageCircle, HelpCircle, Settings } from 'lucide-react';

const Sidebar = ({ activeItem }) => {
  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: History, label: 'History' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Clock, label: 'Appointments' },
    { icon: BarChart3, label: 'Statistics' },
    { icon: MessageCircle, label: 'Chat' },
    { icon: HelpCircle, label: 'Support' },
  ];

  return (
    <div className="bg-white p-4 shadow" style={{ width: '250px' }}>
      <h4 className="fw-bold">
        <span className="text-info">Health</span>
        <span className="text-dark">care.</span>
      </h4>
      <hr />
      <div className="mt-4">
        <small className="text-muted text-uppercase">General</small>
        {sidebarItems.map((item, idx) => (
          <div
            key={idx}
            className={`d-flex align-items-center p-2 mt-2 rounded ${item.label === activeItem ? 'bg-info text-white' : 'text-secondary'}`}
          >
            <item.icon size={18} className="me-2" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <small className="text-muted text-uppercase">Tools</small>
        <div className="d-flex align-items-center p-2 mt-2 text-secondary">
          <Settings size={18} className="me-2" />
          <span>Setting</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
