// src/controllers/salesController.js
import { Sale } from '../models/sale.js';

export const createSale = async (req, res) => {
  try {
    const { product, requested_amount, franchise, rate } = req.body;
    const created_by = req.user.id;

    const sale = await Sale.create({
      product,
      requested_amount,
      franchise,
      rate,
      created_by
    });

    res.status(201).json({ message: 'Sale created successfully', sale });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getSales = async (req, res) => {
  try {
    const { role, id } = req.user;
    let sales;

    if (role === 'Administrador') {
      sales = await Sale.findAll(); // Obtener todas las ventas
    } else {
      sales = await Sale.findAll(id); // Obtener solo las ventas del usuario actual
    }

    const totalRequestedAmount = sales.reduce((sum, sale) => sum + parseFloat(sale.requested_amount), 0);

    res.json({ sales, totalRequestedAmount });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateSale = async (req, res) => {
  try {
    const { id } = req.params;
    const { product, requested_amount, franchise, rate } = req.body;

    const sale = await Sale.findByPk(id);
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found' });
    }

    // Actualizamos la venta
    sale.product = product;
    sale.requested_amount = requested_amount;
    sale.franchise = franchise;
    sale.rate = rate;

    await Sale.update(id, sale); // Llamamos a la función de actualización

    res.json({ message: 'Sale updated successfully', sale });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteSale = async (req, res) => {
  try {
    const { id } = req.params;

    const sale = await Sale.findByPk(id);
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found' });
    }

    await Sale.delete(id);

    res.json({ message: 'Sale deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
