import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  token: string | null
  user: { id: string; username: string; region: string } | null
  setAuth: (token: string, user: AuthState['user']) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setAuth: (token, user) => set({ token, user }),
      logout: () => { localStorage.removeItem('X-Access-Token'); set({ token: null, user: null }) }
    }),
    { name: 'star-ai-auth' }
  )
)
