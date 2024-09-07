import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import FinanceManagement from './components/FinanceManagement';
import InventoryManagement from './components/InventoryManagement';
import SalesManagement from './components/SalesManagement';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'finance':
        return <FinanceManagement />;
      case 'inventory':
        return <InventoryManagement />;
      case 'sales':
        return <SalesManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar onTabChange={setActiveTab} />
      <div className="flex-1 ml-64 p-4 h-screen overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
