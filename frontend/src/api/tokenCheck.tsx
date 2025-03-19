export const checkTokenExpiration = () => {
  const expiresAtString = localStorage.getItem('expires_at')
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
