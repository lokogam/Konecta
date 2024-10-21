import React from 'react';
import Button from '../common/Button';

const SaleList = ({ sales, onEdit, onDelete }) => {
  // console.log('sales', sales);
  return (
    <div className="sale-list w-full max-w-4xl mt-6">
      <h3 className="text-xl font-semibold mb-4">Sales List</h3>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Requested Amount</th>
            <th className="border px-4 py-2">Franchise</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td className="border px-4 py-2">{sale.product}</td>
              <td className="border px-4 py-2">
                ${sale.requested_amount != null ? sale.requested_amount.toLocaleString(undefined, { minimumFractionDigits: 2 }) : 'N/A'}
              </td>
              <td className="border px-4 py-2">{sale.franchise || 'N/A'}</td>
              <td className="border px-4 py-2">
                <Button onClick={() => onEdit(sale)} className="mr-2">Edit</Button>
                <Button onClick={() => onDelete(sale.id)} className="bg-red-500">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SaleList;
