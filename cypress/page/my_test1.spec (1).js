class registrationPage{
	firstNameInput(){
	    return cy.get('#FirstName')
	}
	
	LastNameInput(){
	    return cy.get('#LastName')
	}
	
	DateOfBirthdayInput(){
	    return cy.get('name="DateOfBirthDay"')
	}
	
	DateOfBirthhMontInput(){
	    cy.get('name="DateOfBirthMonth"')
	}
	
	DateOfBirthYearInput(){
	    cy.get('name="DateOfBirthYear"')
	}
	
	EmailInput(){
	    cy.get('#Email')
	}
	
	PasswordInput(){
	    cy.get('#Password')
	}
	
	ConfirmPasswordInput(){
	    cy.get('#ConfirmPassword')
	}
	
	registerButtonInput(){
	    cy.get('#register-button')
	}
	
	IcoRegisterInput(){
	    cy.get('class="ico-register"')
	}
	
	RegisterButtonInput(){
	    cy.get('#register-button')
	}
    
    typeFirstName(firstName){
        this.firstNameInput().type(firstName)
    }
    
    typeLastName(lastName){
        this.lastNameInput().clear().type(lastName)
    }
    
    selectDateOfBirthday(DateOfBirthday){
        this.DateOfBirthday().clear().select(DateOfBirthday)  
    }
    
    selectDateOfBirthhMont(DateOfBirthhMont){
        this.DateOfBirthhMont().clear().select(DateOfBirthhMont)  
    }
    
    selectDateOfBirthYear(DateOfBirthYear){
        this.DateOfBirthYear().clear().select(DateOfBirthYear)  
    }
    
    typeEmail(Email){
        this.Email().clear().type(Email)  
    }
    
    typePassword(Password){
        this.Password().clear().type(Password)  
    }
    
    typeConfirmPassword(ConfirmPassword){
        this.ConfirmPassword().clear().type(ConfirmPassword)  
    }

    clickIcoRegister(IcoRegister){
        this.IcoRegister().clear().click(IcoRegister)
    }

    clickRegisterButton(RegisterButton){
        this.RegisterButton().clear().click(RegisterButton)
    }
    
    }
    
    module.exports = new registrationPage()
