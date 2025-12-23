class SetupAccount{

    firstName = 'input[name = "firstName"]';
    lastName = 'input[name = "lastName"]';
    email = 'input[name = "email"]';
    phoneNumber = 'input[name = "phoneNumber"]';
    password = 'input[name = "password"]';
    confirmPassword = 'input[name = "confirmPassword"]';
    nextBtn = 'button[type = "submit"]';
    emailHeading = 'h2.text-lg'
    roleStatus = 'li[role = "status"]';
    firstNameError = '#«r0»-form-item-message';
    lastNameError = '#«r1»-form-item-message';
    emailError = '#«r2»-form-item-message';
    passwordError = 'Password must be at least 8 characters';


    setFirstName(firstName){
        cy.get(this.firstName).type(firstName);
    }

    setLastName(lastName){
        cy.get(this.lastName).type(lastName);
    }

    setEmail(email){
        cy.get(this.email).type(email);
    }

    setPhoneNumber(phoneNumber){
        cy.get(this.phoneNumber).type(phoneNumber);
    }

    setPassword(password){
        cy.get(this.password).type(password);
    }

    setConfirmPassword(confirmPassword){
        cy.get(this.confirmPassword).type(confirmPassword);
    }

    clickNextBtn(){
        cy.get(this.nextBtn).click();
    }

    verifyHeading(){
        cy.get(this.emailHeading).should('be.visible').should('have.text', 'Email Verification code');
    }

    // verifyStatus(){
    //     cy.get(this.roleStatus).should("have.text", "Your account has been created successfully");
    //     cy.url().should("eq", "https://authorized-partner.vercel.app/register?step=details");
    // }

    isFieldVisible(field){
        cy.get(field).should("be.visible");
    }

    firstNameErrorVerify(){
        cy.get(this.firstNameError).should('be.visible');
        cy.get(this.firstNameError).should('have.text', 'First name must be at least 2 characters');
    }

    lastNameErrorVerify(){
        cy.get(this.lastNameError).should('be.visible');
        cy.get(this.lastNameError).should('have.text', 'Last name must be at least 2 characters');
    }

    emailErrorVerify(){
        cy.get(this.emailError).should('be.visible');
        cy.get(this.emailError).should('have.text', 'Invalid email address');
    }

    passwordErrorVerify(){
        cy.contains(this.passwordError).should('be.visible');
    }

}

export default SetupAccount;