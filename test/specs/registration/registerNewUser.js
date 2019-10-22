const {expect} = require('chai');

const registerButtonSelector = '//a[@class="btn btn-outline-primary"]';
const h1TextSelector = '//h1';
const firstNameFormSelector = '//input[@name="firstName"]';
const lastNameFormSelector = '//input[@name="lastName"]';
const phoneFormSelector = '//input[@name="phone"]';
const emailFormSelector = '//input[@name="email"]';
const passwordFormSelector = '//input[@name="password"]';
const aboutFormSelector = '//textarea[@name="about"]';
const goalsFormSelector = '//textarea[@name="goals"]';
const englishLevelFormSelector = '//select[@name="englishLevel"]';
const submitButtonSelector = '//button[@type="submit"]';

const expectedHeader = 'User Register';

describe('New User Register', () => {
    before( () => {
        browser.url('https://stage.pasv.us/');
    });
    
    it('should validate Register button is displayed', () => {
        const isDisplayed = $(registerButtonSelector).isDisplayed();
        expect(isDisplayed).true;
    });

    it('should validate Register button redirects to Register form', () => {
        $(registerButtonSelector).click();
        browser.pause(2000);
        const h1Text = $(h1TextSelector).getText();
        expect(h1Text).to.eq(expectedHeader);
     });
     
     it('should show "First name" field', () => {
         const firstNameForm = $(firstNameFormSelector).isDisplayed();
         expect(firstNameForm).to.be.true;
      });

      it('should show "Last name" field', () => {
         const lastNameForm = $(lastNameFormSelector).isDisplayed();
         expect(lastNameForm).to.be.true;
      });

      it('should show "Cell phone" field', () => {
         const phoneForm = $(phoneFormSelector).isDisplayed();
         expect(phoneForm).to.be.true;
      });

      it('should show "Email" field', () => {
         const emailForm = $('//input[@name="email"]').isDisplayed();
         expect(emailForm).to.be.true;
      });

      it('should show "Password" field', () => {
         const passwordForm = $(passwordFormSelector).isDisplayed();
         expect(passwordForm).to.be.true;
      });

      it('should show "About" field', () => {
         const aboutForm = $(aboutFormSelector).isDisplayed();
         expect(aboutForm).to.be.true;
      });

      it('should show "Goals" field', () => {
         const goalsForm = $(goalsFormSelector).isDisplayed();
         expect(goalsForm).to.be.true;
      });

      it('should show "English level" field', () => {
         const englishLevelForm = $(englishLevelFormSelector).isDisplayed();
         expect(englishLevelForm).to.be.true;
      });

      it('should show submit button', () => {
         const submitButton = $(submitButtonSelector).isDisplayed();
         expect(submitButton).to.be.true;
      });



});