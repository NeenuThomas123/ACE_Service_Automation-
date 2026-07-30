import { expect } from '@playwright/test';

export class HeroSection{
    constructor(page){
        this.page = page
        this.mainHeading1 =  page.getByRole('heading', { name: 'Fast & Reliable AC Service at Your Doorstep' })
        this.subHeading1 = page.getByText(/Expert AC repair/i)
        this.contactUsButton = page.getByLabel('1 /').getByRole('button', { name: 'Contact Us' })
        this.indicatorDot1 = page.getByRole('button', { name: 'Go to slide 1' })
        this.mainHeading2 = page.getByRole('heading', { name: 'Professional AC Installation for Every Space' })
        this.subHeading2 = page.getByText(/Certified AC installation/i)
        this.indicatorDot2 = page.getByRole('button', { name: 'Go to slide 2' })
        this.mainHeading3 = page.getByRole('heading', { name: 'Annual Maintenance Plans for Long Life' })
        this.subHeading3 =  page.getByText(/Regular servicing and preventive maintenance/i)
        this.indicatorDot3 = page.getByRole('button', { name: 'Go to slide 3' })
        this.mainHeading4 =  page.getByRole('heading', { name: 'Emergency AC Repair Available 24/7' })
        this.subHeading4 = page.getByText(/Quick diagnosis and reliable repair services/i)
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
        await expect(this.subHeading2).toContainText('Certified AC installation');
    }
    async verifyHeadingThree(){
        await expect(this.mainHeading3).toBeVisible();
    }
    async verifySubHeadingThree(){
        await expect(this.subHeading3).toBeVisible();
    }
    async verifyHeadingTextThree(){
        await expect(this.mainHeading3).toContainText('Annual Maintenance Plans for Long Life');
    }
    async verifySubHeadingTextThree(){
        await expect(this.subHeading3).toContainText('Regular servicing and preventive maintenance');
    }
    async verifyHeadingFour(){
        await expect(this.mainHeading4).toBeVisible();
    }
    async verifySubHeadingFour(){
        await expect(this.subHeading4).toBeVisible();
    }
    async verifyHeadingTextFour(){
        await expect(this.mainHeading4).toContainText('Emergency AC Repair Available 24/7');
    }
    async verifySubHeadingTextFour(){
        await expect(this.subHeading4).toContainText('Quick diagnosis and reliable repair services');
    }
}