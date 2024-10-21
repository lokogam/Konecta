import React, { useState, useEffect, useContext } from 'react';
import { getSales, createSale, updateSale, deleteSale } from '../services/sale.service';
import { AuthContext } from '../contexts/AuthContext';
import SaleList from '../components/sales/SaleList';
import SaleForm from '../components/sales/SaleForm';

function SalesManagement() {
  const [sales, setSales] = useState([]);
  const [editingSale, setEditingSale] = useState(null);
  const [totalRequestedAmount, setTotalRequestedAmount] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    const response = await getSales();
    setSales(response.sales);
    setTotalRequestedAmount(response.totalRequestedAmount);
  };

  const handleCreateSale = async (saleData) => {
    await createSale(saleData);
    fetchSales();
  };

  const handleUpdateSale = async (id, saleData) => {
    await updateSale(id, saleData);
    fetchSales();
    setEditingSale(null);
  };

  const handleDeleteSale = async (id) => {
    await deleteSale(id);
    fetchSales();
  };

  return (
    <div className="sales-management flex flex-col items-center">
      <h2  className="text-2xl font-bold mb-4">Sales Management</h2>

      <p>Total Requested Amount: ${totalRequestedAmount.toLocaleString()}</p>
      <SaleForm onSubmit={editingSale ? handleUpdateSale : handleCreateSale} initialData={editingSale} />
      <SaleList 
        sales={sales} 
        onEdit={setEditingSale} 
        onDelete={handleDeleteSale}
        userRole={user.role}
      />
    </div>
  );
}

export default SalesManagement;