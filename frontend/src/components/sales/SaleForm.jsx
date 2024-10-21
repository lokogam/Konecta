import React, { useState, useEffect } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const SaleForm = ({ onSubmit, initialData }) => {
  const [saleData, setSaleData] = useState({
    product: 'Credito de Consumo', // Valor por defecto
    requested_amount: '',
    franchise: 'VISA', // Valor por defecto
    rate: '',
  });

  useEffect(() => {
    if (initialData) {
      setSaleData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSaleData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting sale data:', saleData);
    if (initialData) {
      onSubmit(initialData.id, saleData);
    } else {
      onSubmit(saleData);
    }
  
    // Resetear el formulario después de enviar
    setSaleData({
      product: 'Credito de Consumo',
      requested_amount: '',
      franchise: 'VISA',
      rate: '',
    });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="sale-form w-full max-w-lg flex flex-col items-center"
    >
      <select
        name="product"
        value={saleData.product}
        onChange={handleChange}
        required
        className="mb-4 p-2 border rounded"
      >
        <option value="Credito de Consumo">Credito de Consumo</option>
        <option value="Libranza Libre Inversión">Libranza Libre Inversión</option>
        <option value="Tarjeta de Credito">Tarjeta de Credito</option>
      </select>

      <Input
        name="requested_amount"
        type="number"
        placeholder="Monto Solicitado"
        value={saleData.requested_amount}
        onChange={handleChange}
        required
        className="mb-4"
      />

      <select
        name="franchise"
        value={saleData.franchise}
        onChange={handleChange}
        required
        className="mb-4 p-2 border rounded"
      >
        <option value="AMEX">AMEX</option>
        <option value="VISA">VISA</option>
        <option value="MASTERCARD">MASTERCARD</option>
      </select>

      <Input
        name="rate"
        type="number"
        step="0.01"
        placeholder="Tasa de Interés (%)"
        value={saleData.rate}
        onChange={handleChange}
        className="mb-4"
      />

      <Button type="submit" className="bg-blue-500">
        {initialData ? 'Actualizar Venta' : 'Crear Venta'}
      </Button>
    </form>
  );
};

export default SaleForm;
