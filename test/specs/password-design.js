const {expect} = require('chai');

const passwordFieldPath = '//input[@name="password"]'

describe('Login - Password field - Design', () => {
    before( () => {
        browser.url('https://app.pasv.us/user/login');
    });

 //Verify that "Password" input field has a border-color: #ced4da   
 it('should verify that Password field has correct border-color', () => {
    const actualBorderColor = $(passwordFieldPath).getCSSProperty('border-color').parsed.hex;
    console.log(actualBorderColor);
    const expectedResult = '#ced4da';
    expect(actualBorderColor).to.eq(expectedResult);
 });

 //Verify that when user puts a cursor to the field has a Focus border-color: #4d94ff 
 it ('should verify that Focus border-color is correct, when user puts a cursor', () => {
    $(passwordFieldPath).click();
    browser.pause(1000);
    const actualBorderColor = $(passwordFieldPath).getCSSProperty('border-color').parsed.hex;
    console.log(actualBorderColor);
    const expectedResult = '#4d94ff';
    expect(actualBorderColor).to.eq(expectedResult);
 });

   //Verify that when user puts a cursor to the field, it has a Focus highlight color: rgba(0, 82, 204, 0.25)
 it ('should verify that Focus highlight color is correct, when user puts a cursor', () => {
    $(passwordFieldPath).click();
    browser.pause(1000);
    const actualBoxShadow = $(passwordFieldPath).getCSSProperty('box-shadow').parsed.rgba;
    console.log(actualBoxShadow);
    const expectedResult = 'rgba(0,82,204,0.25)0px0px0px3.2px';
    expect(actualBoxShadow).to.eq(expectedResult);
 });

 //Verify that when user enters first symbol Font-color: #485057
 it ('should verify that when user enters first symbol Font-color is correct', () => {
    $(passwordFieldPath).click();
    browser.pause(1000);
    $(passwordFieldPath).setValue('1');
    browser.pause(1000);
    const actualFontColor = $(passwordFieldPath).getCSSProperty('color').parsed.hex;
    console.log(actualFontColor);
    const expectedResult = '#495057';
    expect(actualFontColor).to.eq(expectedResult);
 });

//Verify that when user enters first symbol Background-color: #ffffff
it ('should verify that when user enters first symbol Background-color is correct', () => {
    $(passwordFieldPath).click();
    browser.pause(1000);
    $(passwordFieldPath).setValue('1');
    browser.pause(1000);
    const actualBackgroundColor = $(passwordFieldPath).getCSSProperty('background-color').parsed.hex;
    console.log(actualBackgroundColor);
    const expectedResult = '#ffffff';
    expect(actualBackgroundColor).to.eq(expectedResult);
 });

 //Verify that when user enters first symbol Text-align: start
 it ('should verify that when user enters first symbol Text-align is correct', () => {
    $(passwordFieldPath).click();
    browser.pause(1000);
    $(passwordFieldPath).setValue('1');
    browser.pause(1000);
    const actualTextAlign = $(passwordFieldPath).getCSSProperty('text-align').value;
    console.log(actualTextAlign);
    const expectedResult = 'start';
    expect(actualTextAlign).to.eq(expectedResult);
 });

 //Verify that when user enters first symbol Font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif
 it ('should verify that when user enters first symbol Font-family is correct', () => {
    $(passwordFieldPath).click();
    browser.pause(1000);
    $(passwordFieldPath).setValue('1');
    browser.pause(1000);
    const actualFontFamily = $(passwordFieldPath).getCSSProperty('font-family').parsed.value.join(', ');
    console.log(actualFontFamily);
    const expectedResult = 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif';
    expect(actualFontFamily).to.eq(expectedResult.toLowerCase());
 });

 //Verify that when user enters first symbol Font-weight: 400
 it ('should verify that when user enters first symbol Font-weight is correct', () => {
    $(passwordFieldPath).click();
    browser.pause(1000);
    $(passwordFieldPath).setValue('1');
    browser.pause(1000);
    const actualFontWeight = $(passwordFieldPath).getCSSProperty('font-weight').value;
    console.log(actualFontWeight);
    const expectedResult = 400;
    expect(actualFontWeight).to.eq(expectedResult);
 });

 //Verify that when password is validated: border-color: #24c88b
 it('should verify that when password is validated border-color is correct', () => {
    const actualBorderColor = $(passwordFieldPath).getCSSProperty('border-color').parsed.hex;
    $(passwordFieldPath).click();
    browser.pause(1000);
    $(passwordFieldPath).setValue('11111');
    browser.pause(1000);
    console.log(actualBorderColor);
    const expectedResult = '#24c88b';
    expect(actualBorderColor).to.eq(expectedResult);
 });








});