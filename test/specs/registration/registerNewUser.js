const {expect} = require('chai');

const registerButton = '//a[@class="btn btn-outline-primary"]';

describe('New User Register', () => {
    before( () => {
        browser.url('https://app.pasv.us/');
    });
    
    it('should validate Register button is displayed', () => {
       // const registerButton = $('//a[@class="btn btn-outline-primary"]');
        const isDisplayed = $(registerButton).isDisplayed();
        expect(isDisplayed).true;

    });

    it('should validate Register button redirects to Register form', () => {
       // const registerButton = $('//a[@class="btn btn-outline-primary"]');
        $(registerButton).click();
        browser.pause(2000);
        const h1Text = $('//h1').getText();
        const expectedHeader = 'User Register';
        expect(h1Text).to.eq(expectedHeader);
     });
});