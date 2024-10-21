// services/sale.service.js

import api from './api'; // Asegúrate de que `api` esté correctamente configurado

export const getSales = async () => {
  try {
    const response = await api.get('/sales');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('An error occurred while fetching sales');
  }
};

export const createSale = async (saleData) => {
  try {
    const response = await api.post('/sales', saleData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('An error occurred while creating the sale');
  }
};

export const updateSale = async (id, saleData) => {
  try {
    const response = await api.put(`/sales/${id}`, saleData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('An error occurred while updating the sale');
  }
};

export const deleteSale = async (id) => {
  try {
    const response = await api.delete(`/sales/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('An error occurred while deleting the sale');
  }
};

const saleService = {
  getSales,
  createSale,
  updateSale,
  deleteSale,
};

export default saleService;
