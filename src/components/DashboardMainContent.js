import CalendarView from './CalendarView';
import DashboardOverview from './DashboardOverview';
import AnatomySection from './AnatomySection';
import HealthStatusCard from './HealthStatusCard';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

import sidebarLinks from '../data/sidebarLinks';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const dates = ['25', '26', '27', '28', '29', '30', '31'];

const DashboardMainContent = () => {
  return (
    <main className="p-4 overflow-auto">
    
     <nav>
        {sidebarLinks.map(link => (
          <a key={link.id} href={link.path} className="me-3">{link.icon} {link.label}</a>
        ))}
      </nav>

      <DashboardOverview />
      <AnatomySection />
      <HealthStatusCard healthMetrics={[
        { organ: 'Heart', date: '2025-05-24', progress: 80, color: '#dc3545', icon: '❤️', position: 'top-0' },
        { organ: 'Lungs', date: '2025-05-23', progress: 60, color: '#0d6efd', icon: '🫁', position: 'top-50' },
      ]} />
      <CalendarView weekDays={weekDays} dates={dates} />
      <UpcomingSchedule />
      <ActivityFeed />
    </main>
  );
};

export default DashboardMainContent;

