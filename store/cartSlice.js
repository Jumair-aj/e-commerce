import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'));
    } else {
        return [];
    }
}


const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
}

const initialState = {
    carts: fetchFromLocalStorage(),
    itemsCount: fetchFromLocalStorage().length,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemCart = state.carts.find(item => item.id === action.payload.id);
            if (isItemCart) {
                const tempCart = state.carts.map(item => {
                    if (item.id == action.payload.id) {
                        let tempQty = action.payload.quantity;
                        let tempTotalPrice = tempQty * item.price;
                        return {
                            ...item, quantity: tempQty, totalPrice: tempTotalPrice
                        }
                    }
                    else {
                        return item
                    }
                })
                state.carts = tempCart;
                toast.success('Item Updated in the Cart')
            }
            else {
                state.carts.push(action.payload)
            }
            storeInLocalStorage(state.carts)
            state.itemsCount = state.carts.length
        },
        removeFromCart: (state, action) => {
            const cartWithoutRemovedItem = state.carts.filter(item => item.id != action.payload.id)
            state.carts = cartWithoutRemovedItem
            storeInLocalStorage(state.carts)
            state.itemsCount = state.carts.length
            toast.success('Item removed from the Cart')
        },
        toggleCartQty: (state, action) => {
            const tempCart = state.carts.map(item => {
                if (item.id == action.payload.id) {
                    
                }
            }
            )
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions
export const getAllCarts = (state) => state.cart.carts;
export const getCartItemsCount = (state) => state.cart.itemsCount;
export default cartSlice.reducer