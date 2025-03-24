import { RootState } from '../store'
export const checkTokenExpiration = () => {
  const expiresAtString = localStorage.getItem('expires_at')

  const isAuthenticated = (state: RootState) => state.auth.isAuthenticated
  if (!isAuthenticated) return logout()
    
  if (!expiresAtString) return logout()

  const expiresAt = new Date(expiresAtString).getTime()

  if (Date.now() >= expiresAt || isNaN(expiresAt)) {
    return logout()
  }
}

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('expires_at')
  window.location.href = '/login'
}
