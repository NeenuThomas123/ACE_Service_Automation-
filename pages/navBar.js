 class NavBar {
    constructor(page) {
        this.page = page;
        this.homeLink = 'a[href="#home"]';
        this.servicesLink = 'a[href="#services"]';
        this.aboutUsLink = 'a[href="#aboutus"]';
        this.shopLink = 'a[href="#shop"]';
        // this.barsIcon = '.fa-bars';
    }

    async clickHome() {
        await this.page.click(this.homeLink);
    }

    async clickServices() {
        await this.page.click(this.servicesLink);
    }

    async clickAboutUs() {
        await this.page.click(this.aboutUsLink);
    }

    async clickShop() {
        await this.page.click(this.shopLink);
    }

    // async clickBarsIcon() {
    //     await this.page.click(this.barsIcon);
    // }

    async isHomeLinkVisible() {
        return await this.page.isVisible(this.homeLink);
    }

    async isServicesLinkVisible() {
        return await this.page.isVisible(this.servicesLink);
    }

    async isAboutUsLinkVisible() {
        return await this.page.isVisible(this.aboutUsLink);
    }

    async isShopLinkVisible() {
        return await this.page.isVisible(this.shopLink);
    }
}
module.exports = NavBar;
