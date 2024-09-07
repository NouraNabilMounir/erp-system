import { useState } from 'react';

function SalesManagement() {
  const [sales, setSales] = useState([
    { id: 1, date: '2023-06-01', product: 'Product A', quantity: 10, total: 99.90 },
    { id: 2, date: '2023-06-02', product: 'Product B', quantity: 5, total: 99.95 },
    { id: 3, date: '2023-06-03', product: 'Product C', quantity: 8, total: 119.92 },
  ]);

  const [newSale, setNewSale] = useState({ date: '', product: '', quantity: '', total: '' });

  const handleAddSale = () => {
    if (newSale.date && newSale.product && newSale.quantity && newSale.total) {
      setSales([
        ...sales,
        {
          id: sales.length + 1,
          date: newSale.date,
          product: newSale.product,
          quantity: Number(newSale.quantity),
          total: parseFloat(newSale.total),
        },
      ]);
      setNewSale({ date: '', product: '', quantity: '', total: '' });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Sales Management</h2>
      <div className="flex space-x-2">
        <input
          type="date"
          value={newSale.date}
          onChange={(e) => setNewSale({ ...newSale, date: e.target.value })}
          className="border rounded-md px-3 py-2 w-full"
        />
        <input
          placeholder="Product Name"
          value={newSale.product}
          onChange={(e) => setNewSale({ ...newSale, product: e.target.value })}
          className="border rounded-md px-3 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newSale.quantity}
          onChange={(e) => setNewSale({ ...newSale, quantity: e.target.value })}
          className="border rounded-md px-3 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Total"
          value={newSale.total}
          onChange={(e) => setNewSale({ ...newSale, total: e.target.value })}
          className="border rounded-md px-3 py-2 w-full"
        />
        <button onClick={handleAddSale} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Sale
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200 mt-4">
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.date}</td>
              <td>{sale.product}</td>
              <td>{sale.quantity}</td>
              <td>${sale.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesManagement;
