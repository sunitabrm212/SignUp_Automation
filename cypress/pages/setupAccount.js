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

    //to enter first name
    setFirstName(firstName){
        cy.get(this.firstName).type(firstName);
    }

    //to enter last name
    setLastName(lastName){
        cy.get(this.lastName).type(lastName);
    }

    //to enter email
    setEmail(email){
        cy.get(this.email).type(email);
    }

    //to enter phone number
    setPhoneNumber(phoneNumber){
        cy.get(this.phoneNumber).type(phoneNumber);
    }

    //to enter password
    setPassword(password){
        cy.get(this.password).type(password);
    }

    //to re-enter password
    setConfirmPassword(confirmPassword){
        cy.get(this.confirmPassword).type(confirmPassword);
    }

    //clicking Next button to submit setupAccount form
    clickNextBtn(){
        cy.get(this.nextBtn).click();
    }

    //once the setUpAccount form is submitted, Email verification OTP code form is opened
    verifyHeading(){
        cy.get(this.emailHeading).should('be.visible').should('have.text', 'Email Verification code');
    }

    // verifyStatus(){
    //     cy.get(this.roleStatus).should("have.text", "Your account has been created successfully");
    //     cy.url().should("eq", "https://authorized-partner.vercel.app/register?step=details");
    // }

    //to check setupAccount fields visibility
    isFieldVisible(field){
        cy.get(field).should("be.visible");
    }

    //to check validation message when first name field is empty
    firstNameErrorVerify(){
        cy.get(this.firstNameError).should('be.visible');
        cy.get(this.firstNameError).should('have.text', 'First name must be at least 2 characters');
    }

    //to check validation message when last name field is empty
    lastNameErrorVerify(){
        cy.get(this.lastNameError).should('be.visible');
        cy.get(this.lastNameError).should('have.text', 'Last name must be at least 2 characters');
    }

    //to check validation message when email field is empty
    emailErrorVerify(){
        cy.get(this.emailError).should('be.visible');
        cy.get(this.emailError).should('have.text', 'Invalid email address');
    }

    //to check validation message when password field is empty
    passwordErrorVerify(){
        cy.contains(this.passwordError).should('be.visible');
    }

}

export default SetupAccount;