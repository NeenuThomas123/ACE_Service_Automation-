import {test, expect} from '@playwright/test';
import { Header } from '../pageObjects/NavBar';
// console.log(Header);
   let header;
   test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5174/');
      header = new Header(page);
    });

    test('should display the Home link', async () => {
        expect(await header.isHomeLinkVisible()).toBe(true);
    });

    test('should display the Services link', async () => {
        expect(await header.isServicesLinkVisible()).toBe(true);
    });

    test('should display the About Us link', async () => {
        expect(await header.isAboutUsLinkVisible()).toBe(true);
    });

    test('should display the Shop link', async () => {
        expect(await header.isShopLinkVisible()).toBe(true);
    });

    test('should scroll to home section home link is clicked ', async ({page}) => {
        await header.clickHome();
        const homeSection = page.locator('#home')
        await expect(homeSection).toBeVisible()
    });

    test('should scroll to service section what we do link is clicked ', async ({page}) => {
        await header.clickServices();
        const serviceSection = page.locator('#services')
        await expect(serviceSection).toBeVisible();
    });

    test('should scroll to about  section when Who we are link is clicked', async ({page}) => {
        await header.clickAboutUs();
        const aboutSection = page.locator('#aboutus')
        await expect(aboutSection).toBeVisible();
    });
    test('should scroll to Shop section when Shop link is clicked', async ({page}) => {
        await header.clickShop();
        const shopSection = page.locator('#shop');
        await expect(shopSection).toBeVisible();

    });

    // test('should open mobile menu when bars icon is clicked', async () => {
    //     await header.clickBarsIcon();
    //     // Add assertion for mobile menu visibility if applicable
    // });