class loginPage{

    elements={
        IcoLoginInput: () => cy.get('class="ico-login"'),
        EmailInput: () => cy.get('#Email'),
        PasswordInput: () => cy.get('#Password'),
        LogInButtonInput: () => cy.get('class="button-1 login-button"'),
    }

    clickIcoLogIn(IcoLogIn){
        this.elements.clickIcoLogIn().clear().click(IcoLogIn)
    }

    typeEmail(Email){
        this.elements.typeEmail().clear().type(Email)
    }

    typePassword(Password){
        this.elements.typePassword().clear().type(Password)
    }

    clickLogInButton(LogInButton){
        this.elements.clickLogInButton().clear().click(LogInButton)
    }
}

module.exports = new loginPage()
