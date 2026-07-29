import { expect } from '@playwright/test';

export class HeroSection{
    constructor(page){
        this.page = page
        this.mainHeading1 =  page.getByRole('heading', { name: 'Fast & Reliable AC Service at' })
        this.subHeading1 = page.getByText('Expert AC repair,')
        this.contactUsButton = page.getByLabel('1 /').getByRole('button', { name: 'Contact Us' })
        this.mainHeading2 = page.getByRole('heading', { name: 'Professional AC Installation' })
        this.subHeading2 = page.getByText('Certified AC installation,')
        this.indicatorDot1 = page.getByRole('button', { name: 'Go to slide 1' })
        this.indicatorDot2 = page.getByRole('button', { name: 'Go to slide 2' })
        this.indicatorDot3 = page.getByRole('button', { name: 'Go to slide 3' })
        this.indicatorDot4 = page.getByRole('button', { name: 'Go to slide 4' })
        this.whatsAppButton = page.getByRole('button', { name: 'Chat on WhatsApp' })
    }

    async verifyHeadingOne(){
        await expect(this.mainHeading1).toBeVisible();
    }
    async verifySubHeadingOne(){
        await expect(this.subHeading1).toBeVisible();
    }
    async verifyHeadingTextOne(){
        await expect(this.mainHeading1)
        .toHaveText('Fast & Reliable AC Service at Your Doorstep');
    }
    async verifySubHeadingTextOne(){
        await expect(this.subHeading1)
        .toHaveText('Expert AC repair, installation & maintenance by verified technicians.');
    }
    async verifyHeadingTwo(){
        await expect(this.mainHeading2).toBeVisible();
    }
    async verifySubHeadingTwo(){
        await expect(this.subHeading2).toBeVisible();
    }
    async verifyHeadingTextTwo(){
        await expect(this.mainHeading2).toContainText('Professional AC Installation for Every Space');
    }
    async verifySubHeadingTextTwo(){
        await expect(this.subHeading2)
        .toHaveText('Certified AC installation, testing & setup by experienced technicians.');
    }
}