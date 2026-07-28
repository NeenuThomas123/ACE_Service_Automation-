import { expect } from '@playwright/test';

export class HeroSection{
    constructor(page){
        this.page = page
        this.mainHeading =  page.getByRole('heading', { name: 'Fast & Reliable AC Service at' })
        this.subHeading = page.getByText('Expert AC repair,')
        this.contactUsButton = page.getByLabel('1 /').getByRole('button', { name: 'Contact Us' })
        this.indicatorDot1 = page.getByRole('button', { name: 'Go to slide 1' })
        this.indicatorDot2 = page.getByRole('button', { name: 'Go to slide 2' })
        this.indicatorDot3 = page.getByRole('button', { name: 'Go to slide 3' })
        this.indicatorDot4 = page.getByRole('button', { name: 'Go to slide 4' })
        this.whatsAppButton = page.getByRole('button', { name: 'Chat on WhatsApp' })
    }

    async verifyHeading(){
        await expect(this.mainHeading).toBeVisible();
    }
    async verifySubHeading(){
        await expect(this.subHeading).toBeVisible();
    }
    async verifyHeadingText(){
        await expect(this.mainHeading)
        .toHaveText('Fast & Reliable AC Service at Your Doorstep');
    }
    async verifySubHeadingText(){
        await expect(this.subHeading)
        .toHaveText('Expert AC repair, installation & maintenance by verified technicians.');
    }
}