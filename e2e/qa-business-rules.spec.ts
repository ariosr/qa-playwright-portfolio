import { test, expect } from '@playwright/test';

function validatePassword(password: string): string {
  if (password.length >= 8) {
    return 'Contraseña válida';
  } else {
    return 'La contraseña debe tener al menos 8 caracteres';
  }
}

function canPurchase(
  userAuthenticated: boolean,
  productAvailable: boolean
): boolean {
  if (userAuthenticated && productAvailable) {
    return true;
  } else {
    return false;
  }
}

test('rechaza una contraseña demasiado corta', () => {
  expect(validatePassword('abc123')).toBe(
    'La contraseña debe tener al menos 8 caracteres'
  );
});

test('acepta una contraseña de longitud suficiente', () => {
  expect(validatePassword('miClave123')).toBe(
    'Contraseña válida'
  );
});

test('permite comprar si el usuario inició sesión y hay stock', () => {
  expect(canPurchase(true, true)).toBe(true);
});

test('rechaza la compra si no hay stock', () => {
  expect(canPurchase(true, false)).toBe(false);
});

test('rechaza la compra si el usuario no inició sesión', () => {
  expect(canPurchase(false, true)).toBe(false);
});

test('rechaza la compra si ninguna condición se cumple', () => {
  expect(canPurchase(false, false)).toBe(false);
});