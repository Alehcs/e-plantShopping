import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Estado inicial vacío
  },
  reducers: {
    // Reductor para agregar un nuevo artículo o incrementar su cantidad
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    
    // Reductor para remover un artículo del carrito
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    
    // Reductor para actualizar la cantidad de un artículo en el carrito
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Exporta las acciones para ser usadas en los componentes
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exporta el reductor para integrarlo en store.js
export default CartSlice.reducer;
