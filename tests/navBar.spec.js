const { test, expect } = require('@playwright/test');
const NavBar = require('../pageObjects/NavBar');
// console.log(NavBar);

test.describe('Navigation Bar Tests', () => {
    let navBar;

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/');
        navBar = new NavBar(page);
    });

    test('should display the Home link', async () => {
        expect(await navBar.isHomeLinkVisible()).toBe(true);
    });

    test('should display the Services link', async () => {
        expect(await navBar.isServicesLinkVisible()).toBe(true);
    });

    test('should display the About Us link', async () => {
        expect(await navBar.isAboutUsLinkVisible()).toBe(true);
    });

    test('should display the Shop link', async () => {
        expect(await navBar.isShopLinkVisible()).toBe(true);
    });

    test('should navigate to Home page when Home link is clicked', async () => {
        await navBar.clickHome();
        expect(await navBar.isHomeLinkVisible()).toBe(true);
    });

    test('should navigate to Services page when Services link is clicked', async () => {
        await navBar.clickServices();
        expect(await navBar.isServicesLinkVisible()).toBe(true);
    });

    test('should navigate to About Us page when About Us link is clicked', async () => {
        await navBar.clickAboutUs();
        expect(await navBar.isAboutUsLinkVisible()).toBe(true);
    });

    test('should navigate to Shop page when Shop link is clicked', async () => {
        await navBar.clickShop();
        expect(await navBar.isShopLinkVisible()).toBe(true);
    });

    // test('should open mobile menu when bars icon is clicked', async () => {
    //     await navBar.clickBarsIcon();
    //     // Add assertion for mobile menu visibility if applicable
    // });
});