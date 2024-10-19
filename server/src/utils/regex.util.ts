export const regex_number = /^[0-9]+$/;
export const regex_alphanumeric = /^[A-Za-z0-9\s]+$/;
export const regex_cep = /^[0-9]{5}-[0-9]{3}$/;
export const regex_letters = /^[A-Za-z\s]+$/;
export const regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const regex_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function generateUsername() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = String(now.getFullYear()).slice(-2);
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `u${day}${month}${year}${hours}${minutes}`;
}