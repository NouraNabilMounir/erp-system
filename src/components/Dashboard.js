import { DollarSign, Package, ShoppingCart, Users } from 'lucide-react';

function Dashboard() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[{
          title: 'Total Revenue',
          amount: '$45,231.89',
          change: '+20.1% from last month',
          Icon: DollarSign
        }, {
          title: 'Inventory Items',
          amount: '2,345',
          change: '+180 new items',
          Icon: Package
        }, {
          title: 'Active Orders',
          amount: '+573',
          change: '+201 since last hour',
          Icon: ShoppingCart
        }, {
          title: 'Total Customers',
          amount: '12,234',
          change: '+2.6% from last month',
          Icon: Users
        }].map(({ title, amount, change, Icon }, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">{title}</h3>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <div className="text-2xl font-bold">{amount}</div>
              <p className="text-xs text-muted-foreground">{change}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
