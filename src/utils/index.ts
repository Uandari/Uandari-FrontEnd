import { characters } from '@constants/index';

export function GeneratePassword(length: number): string {
  let generatedPassword = '';
  const passwordLength = length;

  for (let i = 0; i < passwordLength; i += 1) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    generatedPassword += characters[randomIndex];
  }

  return generatedPassword;
}

// Dates utils
export function getFormattedDate(date: Date): string {
  let formattedDate = '';
  let days = '';
  let months = '';
  const year = `${date.getFullYear()}`;

  if (date.getDate() >= 10) {
    days = `${date.getDate()} / `;
  } else {
    days = `0${date.getDate()} / `;
  }

  if (date.getMonth() >= 10) {
    months = `${date.getMonth() + 1} / `;
  } else {
    months = `0${date.getMonth() + 1} / `;
  }

  formattedDate = days + months + year;

  return formattedDate;
}

export function enumToArray<T extends Record<keyof T, string>>(
  enumObj: T,
): string[] {
  return (Object.keys(enumObj) as Array<keyof T>).map((key) => enumObj[key]);
}

export function getToken(): string | null {
  return sessionStorage.getItem('Token');
}

export function removeToken(): void {
  sessionStorage.removeItem('Token');
}
