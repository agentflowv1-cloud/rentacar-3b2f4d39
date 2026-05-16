import create from 'zustand';

interface StoreState {
  isAdmin: boolean;
}

const useStore = create<StoreState>()((set) => ({
  isAdmin: true,
}));

export { useStore };