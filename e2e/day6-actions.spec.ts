import { test, expect } from '@playwright/test';

test('agrega y elimina un elemento', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  const addButton = page.getByRole('button', { name: 'Add Element' });

  await addButton.click();

  await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(1);

  await page.getByRole('button', { name: 'Delete' }).click();

  await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(0);
});



test('práctica de debugging', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  await page.getByRole('button', { name: 'Add Element' }).click();

  await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(1);
});

