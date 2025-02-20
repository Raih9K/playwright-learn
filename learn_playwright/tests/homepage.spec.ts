import { test, expect } from '@playwright/test';

test('home page test', async ({ page, request }) => {
  await page.goto('http://website.dev.myqbits.com/');
  await expect(page.locator('#sigmax2')).toContainText('For Power Usages');
  await expect(page.locator('#sigmax2')).toContainText('Buy Now');
  await expect(page.locator('#root')).toContainText('Register Your Device');
});


test('home page test2', async ({ page, request }) => {
  await page.goto('http://website.dev.myqbits.com/');
  await expect(page.locator('#sigmax2')).toContainText('For Power Usages');
  await expect(page.locator('#sigmax2')).toContainText('Buy Now');
  await expect(page.locator('#root')).toContainText('Register Your Device');
});