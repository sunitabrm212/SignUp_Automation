class SetupAccount{

    firstName = 'input[name = "firstName"]';
    lastName = 'input[name = "lastName"]';
    email = 'input[name = "email"]';
    phoneNumber = 'input[name = "phoneNumber"]';
    password = 'input[name = "password"]';
    confirmPassword = 'input[name = "confirmPassword"]';
    nextBtn = 'button[type = "submit"]'
    roleStatus = 'li[role = "status"]'


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

    verifyStatus(){
        cy.get(this.roleStatus).should("have.text", "Your account has been created successfully");
        cy.url().should("eq", "https://authorized-partner.vercel.app/register?step=details");
    }

}

export default SetupAccount;