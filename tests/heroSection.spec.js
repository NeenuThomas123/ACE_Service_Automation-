import { test, expect } from '@playwright/test';
import { HeroSection } from '../pageObjects/heroSection';

let hero
const baseUrl = 'http://localhost:5173/';

test.describe('Hero section', () => {
     
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    hero   = new HeroSection(page)
   
  });

  test('homepage loads successfully', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();
  });

  test('verify the heading and subheading in the hero section', async({page})=>{
    await hero.verifyHeadingOne();
    await hero.verifySubHeadingOne();
    await hero.verifyHeadingTextOne();
    await hero.verifySubHeadingTextOne();
    
    await hero.verifyHeadingTwo();
    await hero.verifySubHeadingTwo();
    await hero.verifyHeadingTextTwo();
    await hero.verifySubHeadingTextTwo();
    
    await hero.verifyHeadingThree();
    await hero.verifySubHeadingThree();
    await hero.verifyHeadingTextThree();
    await hero.verifySubHeadingTextThree();
    
    await hero.verifyHeadingFour();
    await hero.verifySubHeadingFour();
    await hero.verifyHeadingTextFour();
    await hero.verifySubHeadingTextFour();
    
   
    
  })
});