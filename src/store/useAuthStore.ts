import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          // In a real app, you would make an API call here
          // For demo purposes, we'll just simulate a successful login after a delay
          await new Promise(resolve => setTimeout(resolve, 1000));

          // Simulating a successful login
          if (email === 'user@example.com' && password === 'password') {
            set({
              user: { id: '1', email, name: 'Demo User' },
              isAuthenticated: true,
              isLoading: false
            });
          } else {
            throw new Error('Invalid email or password');
          }
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'An unknown error occurred',
            isLoading: false
          });
        }
      },

      register: async (name: string, email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          // In a real app, you would make an API call here
          // For demo purposes, we'll just simulate a successful registration after a delay
          await new Promise(resolve => setTimeout(resolve, 1000));

          // Simulating a successful registration
          // Use password in a real app implementation
          console.log(`Would register with password: ${password}`);
          
          set({
            user: { id: '1', email, name },
            isAuthenticated: true,
            isLoading: false
          });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'An unknown error occurred',
            isLoading: false
          });
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      clearError: () => {
        set({ error: null });
      }
    }),
    {
      name: 'auth-storage' // name of the item in localStorage
    }
  )
); 