export const checkTokenExpiration = () => {
  const expiresAtString = localStorage.getItem("expires_at");
  if (!expiresAtString) return; // Falls kein Wert existiert, abbrechen

  const expiresAt = new Date(expiresAtString).getTime(); // Konvertiere String zu Timestamp

  console.log("Expires at", expiresAt);
  console.log("Current time", Date.now());

  if (Date.now() >= expiresAt) {
    console.log("Token expired, logging out...");
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
    window.location.href = "/login"; // Weiterleitung zum Login
  }
};

