import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { Candy } from '@/types/candy.';

type CandyStoreType = {
  state: Candy | null;
  isOpen: boolean;
  schedule: (data: Candy) => void;
  open: () => void;
  close: () => void;
};

const useCandyStoreBase = create<CandyStoreType>(
  devtools(
    (set) => ({
      isOpen: false,
      state: {
        type: 'chupa-cupz',
      },
      schedule: (data) => {
        set(
          produce<CandyStoreType>((state) => {
            state.isOpen = true;
            state.state = data;
          })
        );
      },
      open: () => {
        set(
          produce<CandyStoreType>((state) => {
            state.isOpen = true;
          })
        );
      },
      close: () => {
        set(
          produce<CandyStoreType>((state) => {
            state.isOpen = false;
          })
        );
      },
    }),
    { name: 'CandyStore' }
  )
);

const useCandyStore = createSelectorHooks(useCandyStoreBase);

export default useCandyStore;
