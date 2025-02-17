import { test, expect } from '@playwright/test';

test('home page test', async ({ page, request }) => {
  await page.goto('https://lms.boostonamazon.com/');
  await page.getByText('Self Onboarding').first().click();
  await page.getByText('Integration', { exact: true }).first().click();
  await page.getByText('Inventory', { exact: true }).first().click();
  await page.getByText('Listing', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Syncing$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Order$/ }).first().click();
  await page.getByText('Warehouse', { exact: true }).first().click();
  await page.getByRole('link', { name: 'Contact Support' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).first().click();
  await page.getByRole('textbox', { name: 'First Name' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).click();
  await page.locator('div').filter({ hasText: /^Order Volume0 - 100100 - 500500 - 1000$/ }).getByRole('combobox').selectOption('high');
  await page.getByRole('combobox').nth(1).selectOption('low');
});