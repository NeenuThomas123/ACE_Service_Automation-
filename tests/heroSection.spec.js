import { test, expect } from '@playwright/test';
import { HeroSection } from '../pageObjects/heroSection';

let hero
const baseUrl = 'http://localhost:5174/';

test.describe('Hero section', () => {
     
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    hero   = new HeroSection(page)
   
  });

  test('homepage loads successfully', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();
  });

  test('verify the heading and subheading in the hero section', async({page})=>{
    await hero.verifyHeading();
    await hero.verifySubHeading();
    await hero.verifyHeadingText();
    await hero.verifySubHeadingText();
  })
});