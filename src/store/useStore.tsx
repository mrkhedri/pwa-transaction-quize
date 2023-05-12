import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface State {
  mode: string
  setMode: () => void
}

const useStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        mode: 'light', // or dark
        setMode: () => {
          set(state => ({ mode: state.mode === 'light' ? 'dark' : 'light' }))
        }
      }),
      {
        name: 'app-storage',
      }
    )
  )
);

export default useStore;