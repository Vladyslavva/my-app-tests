const {expect} = require('chai');

const h1TextSelector = '//h1';
const progressMonitorButtonSelector = '//span[@id="site-name"]';
const loginButtonSelector = '//a[@qa="login-link"]';
const registerButtonSelector ='//a[@qa="register-link"]';
const globalFooterSelector = '//small[@qa="app-slogan"]';

const expectedHeader = 'System that considers\nindividual features of\neach student';
const expectedProgressMonitorTitle = 'Progress Monitor';
const expectedAlignMonitorButton = 'left';
const expectedAlignLoginButton = 'right';
const expectedAlignRegisterButton = 'right';
const expectedGlobalFooter = '© 2019 eat(); sleep(); code(); repeat();';


describe('General info', () => {
    before( () => {
        browser.url('https://stage.pasv.us/');
    });
    
    it('should validate Homepage is displayed', () => {
        expect($(h1TextSelector).getText()).to.eq(expectedHeader);
    });

    it('should validate "Progress Monitor" tab is displayed in the browser', () => {
        expect($(progressMonitorButtonSelector).getText()).to.eq(expectedProgressMonitorTitle);
    });

    it('should validate Global Header is displayed according to spec. requirements', () => {
        it('should validate "Progress Monitor" is upper left-aligned', () => {
            const actualAlignMonitorButton = $(progressMonitorButtonSelector).getCSSProperty('text-align').value;
            expect(actualAlignMonitorButton).to.eq(expectedAlignMonitorButton);
        });
        it('should validate "Login" is upper right-align', () => {
            const actualAlignLoginButton = $(loginButtonSelector).getCSSProperty('text-align').value;
            expect(actualAlignLoginButton).to.eq(expectedAlignLoginButton);
        });
        it('should validate "Register" is upper right-align', () => {
            const actualAlignRegisterButton = $(registerButtonSelector).getCSSProperty('text-align').value;
            expect(actualAlignRegisterButton).to.eq(expectedAlignRegisterButton);
        });
    });

    it('should validate  Global Footer is displayed ', () => {
        const actualGlobalFooter = $(globalFooterSelector).isDisplayed();
        expect(actualGlobalFooter).true;
    });


 

});
