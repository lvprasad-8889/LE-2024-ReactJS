// zustand
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  productsAddedInTheCart: [],
  increment: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  decrement: () => {
    set((state) => ({
      count: state.count - 1,
    }));
  },
  reset: () => {
    set((state) => ({
      count: 0,
    }));
  },
  setCountToN: (n) => {
    set((state) => ({
      count: n,
    }));
  },
  addProductToTheCart: (product) => {
    console.log("products from home.jsx is", product)
    set((state) => ({
      productsAddedInTheCart: [ ...state.productsAddedInTheCart, product ],
    }));
  },
}));

export default useStore;
