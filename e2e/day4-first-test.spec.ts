
import { test, expect } from '@playwright/test';

test('la página de ejemplo muestra información correcta', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle('Example Domain');

  await expect(
    page.getByText('This domain is for use in documentation examples', {
      exact: false
    })
  ).toBeVisible();

  await expect(
    page.getByRole('link', { name: 'Learn more' })
  ).toBeVisible();
});
