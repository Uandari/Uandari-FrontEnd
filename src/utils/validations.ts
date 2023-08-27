export const isValidEmail = (email?: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const match = String(email).toLowerCase().match(emailRegex);

  return !!match;
};

export const isEmail = (email?: string): string | undefined => {
  return isValidEmail(email) ? undefined : 'Correo electrónico no válido.';
};

export const isGreaterThanZero = (number: number): string | undefined => {
  return number === 0 ? 'El número debe ser mayor a 0.' : undefined;
};

export const isRequired = (value?: string): string | undefined => {
  return value ? undefined : 'Este campo es requerido.';
};

export const isOptional = () => undefined;
