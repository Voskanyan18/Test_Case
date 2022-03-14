import registrationPage from "../pages/Test_case_2.spec"


describe('Add line ', () => {
    beforeEach( () => {
        cy.visit('https://demoqa.com/webtables')
    });
    
    it('Registration Form', () => {
        registrationPage.clickaddButton()
        registrationPage.typefirstName('Lilit')
        registrationPage.typelastName('Voskanyan')
        registrationPage.typeemail('lilit123@gemail.com')
        registrationPage.typeage('18')
        registrationPage.typesalary('1000')
        registrationPage.typedepartment('1')
        registrationPage.clicksubmitButton()
    });

    it('Edit', () => {
        registrationPage.clickeditButton()
        registrationPage.typeage('17')
        registrationPage.clicksubmitButton()
    });

    it('Delete', () => {
        registrationPage.clickdeleteButton()
    });

})
