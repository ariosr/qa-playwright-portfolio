
import { test, expect } from '@playwright/test';

test('agrega dos elementos y elimina uno', async ({ page }) => {
  await page.goto(
    'https://the-internet.herokuapp.com/add_remove_elements/'
  );

  const addButton = page.getByRole('button', {
    name: 'Add Element',
  });

  const deleteButtons = page.getByRole('button', {
    name: 'Delete',
  });

  // Estado inicial: no hay botones Delete
  await expect(deleteButtons).toHaveCount(0);

  // Agregamos dos elementos
  await addButton.click();
  await addButton.click();

  // Estado intermedio: hay dos botones Delete
  await expect(deleteButtons).toHaveCount(2);

  // Eliminamos el primero
  await deleteButtons.first().click();

  // Estado final: queda un botón Delete
  await expect(deleteButtons).toHaveCount(1);
});


test('agrega tres elementos y los elimina uno por uno', async ({ page }) => {
  await page.goto(
    'https://the-internet.herokuapp.com/add_remove_elements/'
  );

  const addButton = page.getByRole('button', {
    name: 'Add Element',
  });

  const deleteButtons = page.getByRole('button', {
    name: 'Delete',
  });

  // Estado inicial
  await expect(deleteButtons).toHaveCount(0);

  // Agregamos tres elementos
  await addButton.click();
  await addButton.click();
  await addButton.click();

  // Verificamos que existan tres botones
  await expect(deleteButtons).toHaveCount(3);

  // Eliminamos uno
  await deleteButtons.first().click();
  await expect(deleteButtons).toHaveCount(2);

  // Eliminamos otro
  await deleteButtons.first().click();
  await expect(deleteButtons).toHaveCount(1);

  // Eliminamos el último
  await deleteButtons.first().click();
  await expect(deleteButtons).toHaveCount(0);
});