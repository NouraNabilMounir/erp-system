import { useState } from 'react';
import { Home, DollarSign, Package, ShoppingCart } from 'lucide-react';

function Sidebar({ onTabChange }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4 fixed top-0 left-0">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul className="space-y-2">
        <li
          className={`cursor-pointer p-2 rounded-md ${activeTab === 'dashboard' ? 'bg-gray-600' : 'hover:bg-gray-700'}`}
          onClick={() => handleTabChange('dashboard')}
        >
          <Home className="inline-block mr-2" />
          Dashboard
        </li>
        <li
          className={`cursor-pointer p-2 rounded-md ${activeTab === 'finance' ? 'bg-gray-600' : 'hover:bg-gray-700'}`}
          onClick={() => handleTabChange('finance')}
        >
          <DollarSign className="inline-block mr-2" />
          Finance
        </li>
        <li
          className={`cursor-pointer p-2 rounded-md ${activeTab === 'inventory' ? 'bg-gray-600' : 'hover:bg-gray-700'}`}
          onClick={() => handleTabChange('inventory')}
        >
          <Package className="inline-block mr-2" />
          Inventory
        </li>
        <li
          className={`cursor-pointer p-2 rounded-md ${activeTab === 'sales' ? 'bg-gray-600' : 'hover:bg-gray-700'}`}
          onClick={() => handleTabChange('sales')}
        >
          <ShoppingCart className="inline-block mr-2" />
          Sales
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
