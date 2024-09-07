import { useState } from 'react';

function FinanceManagement() {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-06-01', description: 'Sales Revenue', amount: 5000 },
    { id: 2, date: '2023-06-02', description: 'Office Supplies', amount: -200 },
    { id: 3, date: '2023-06-03', description: 'Utility Bill', amount: -150 },
  ]);

  const [newTransaction, setNewTransaction] = useState({ date: '', description: '', amount: '' });

  const handleAddTransaction = () => {
    if (newTransaction.date && newTransaction.description && newTransaction.amount) {
      setTransactions([...transactions, { id: transactions.length + 1, ...newTransaction }]);
      setNewTransaction({ date: '', description: '', amount: '' });
    }
  };

  const totalBalance = transactions.reduce((sum, transaction) => sum + Number(transaction.amount), 0);

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Finance Management</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-semibold">Total Balance</h3>
        <p className="text-3xl font-bold">${totalBalance.toFixed(2)}</p>
      </div>
      <div className="flex space-x-2">
        <input
          type="date"
          value={newTransaction.date}
          onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
          className="border rounded-md px-3 py-2 w-full"
        />
        <input
          placeholder="Description"
          value={newTransaction.description}
          onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
          className="border rounded-md px-3 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
          className="border rounded-md px-3 py-2 w-full"
        />
        <button onClick={handleAddTransaction} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Transaction</button>
      </div>
      <table className="min-w-full bg-white border border-gray-200 mt-4">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td className={transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}>
                ${Number(transaction.amount).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FinanceManagement;
