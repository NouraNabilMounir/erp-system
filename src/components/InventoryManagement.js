import { useState } from 'react';

function InventoryManagement() {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Product A', quantity: 100, price: 9.99 },
    { id: 2, name: 'Product B', quantity: 150, price: 19.99 },
    { id: 3, name: 'Product C', quantity: 75, price: 14.99 },
  ]);

  const [newItem, setNewItem] = useState({ name: '', quantity: '', price: '' });

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity && newItem.price) {
      setInventory([
        ...inventory,
        {
          id: inventory.length + 1,
          name: newItem.name,
          quantity: Number(newItem.quantity),
          price: parseFloat(newItem.price),
        },
      ]);
      setNewItem({ name: '', quantity: '', price: '' });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Inventory Management</h2>
      <div className="flex space-x-2">
        <input
          placeholder="Product Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="border rounded-md px-3 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          className="border rounded-md px-3 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          className="border rounded-md px-3 py-2 w-full"
        />
        <button onClick={handleAddItem} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Item
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200 mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryManagement;
