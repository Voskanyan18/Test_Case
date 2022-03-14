class   registrationPage{
    elements = { 
        addButtonInput: () => cy.get('#addNewRecordButton'),
        firstNameInput: () => cy.get('#firstName'),
        lastNameInput: () => cy.get('#lastName'),
        emailInput: () => cy.get('#userEmail'),
        ageInput:() => cy.get('#age'),
        salaryInput:() => cy.get('#salary'),
        departmentInput: () => cy.get('#department'),
        submitButtonInput: () => cy.get('#submit'),
        editButtonInput: () => cy.get('#edit-record-4'),
        deleteButtonInput: () => cy.get('#delete-record-4'),
    }


clickaddButton(addButton){
    this.elements.addButtonInput().click()
}

typefirstName(firstName) {
    this.elements.firstNameInput().type(firstName)
}

typelastName(lastName) {
    this.elements.lastNameInput().type(lastName)
}

typeemail(email) {
    this.elements.emailInput().type(email)
}

typeage(age) {
    this.elements.ageInput().type(age)
}

typesalary(salary) {
    this.elements.salaryInput().type(salary)
}

typedepartment(department) {
    this.elements.departmentInput().type(department)
}

clicksubmitButton(submitButton) {
    this.elements.submitButtonInput().click()
}

clickeditButton(editButton){
    this.elements.editButtonInput().click()
}



clickeditButton(editButton){
    this.elements.editButtonInput().click()
}

clickdeleteButton(deleteButton){
    this.elements.deleteButtonInput().click()
}

}
module.exports = new registrationPage()
