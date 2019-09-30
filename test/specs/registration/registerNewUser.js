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
     
     it('should show "Real name" field', () => {
         const nameFormSelector = '//input[@name="name"]';
         const nameForm = $('//input[@name="name"]').isDisplayed();
         expect(nameForm).to.be.true;
      });

      it('should show "Cell phone" field', () => {
         const phoneFormSelector = '//input[@name="phone"]';
         const phoneForm = $('//input[@name="phone"]').isDisplayed();
         expect(phoneForm).to.be.true;
      });

      it('should show "Email" field', () => {
         const emailFormSelector = '//input[@name="email"]';
         const emailForm = $('//input[@name="email"]').isDisplayed();
         expect(emailForm).to.be.true;
      });



});