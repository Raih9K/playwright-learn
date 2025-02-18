import { test, expect } from '@playwright/test';

test('is pippasync right for', async ({ page }) => {
  await page.goto('https://lms.boostonamazon.com/');
  await page.getByText('Login|Is PippaSync Right For Me?WebinarRequest a demo').click();
  await page.locator('.w-4').first().click();
  await page.locator('div').filter({ hasText: /^Business channels$/ }).locator('div').getByRole('paragraph').click();
  await page.locator('div').filter({ hasText: /^Ebay$/ }).locator('div').click();
  await page.locator('div').filter({ hasText: /^Continue$/ }).nth(1).click();
  await page.getByText('Continue').click();
  await page.locator('div').filter({ hasText: /^Continue$/ }).nth(1).click();
  await page.getByText('Inventory sync').click();
  await page.locator('div').filter({ hasText: /^No$/ }).click();
  await page.locator('div').filter({ hasText: /^Continue$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Yes$/ }).locator('div').click();
  await page.getByRole('textbox', { name: 'Write your primary challenges' }).click();
  await page.getByText('Primary Challenge', { exact: true }).click();
  await page.getByText('Primary Challenge', { exact: true }).click();
  await page.getByText('Continue').click();
  await page.getByRole('paragraph').filter({ hasText: /^$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Under \$1000$/ }).locator('div').click();
  await page.getByText('AmazonEbayWalmartShopifyWooCommerceOther').click();
  await page.locator('div').filter({ hasText: /^Continue$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Scalability$/ }).locator('div').click();
  await page.locator('div').filter({ hasText: /^Continue$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Get one month free' }).click();
  await page.getByRole('button', { name: 'Get one month free' }).click();
  await page.getByRole('link', { name: 'BLog' }).click();
  await page.locator('.max-w-md > .absolute').first().click();
  await page.locator('.grid > div:nth-child(2) > .absolute').click();
  await page.locator('div:nth-child(3) > .absolute').click();
  await page.locator('div:nth-child(11) > .absolute').click();
  await page.locator('div:nth-child(12) > .absolute').click();
  await page.getByRole('textbox', { name: 'Enter your email address' }).click();
});