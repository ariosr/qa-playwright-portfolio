
import { test, expect } from '@playwright/test';

test('la página tiene el título correcto', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle('Example Domain');
});

test('el párrafo informativo es visible', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(
    page.getByText(
      'This domain is for use in documentation examples',
      { exact: false }
    )
  ).toBeVisible();
});

test('el enlace Learn more es visible', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(
    page.getByRole('link', { name: 'Learn more' })
  ).toBeVisible();
});
