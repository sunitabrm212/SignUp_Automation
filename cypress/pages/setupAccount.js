class SetupAccount{

    firstName = 'input[name = "firstName"]';
    lastName = 'input[name = "lastName"]';
    email = 'input[name = "email"]';
    phoneNumber = 'input[name = "phoneNumber"]';
    password = 'input[name = "password"]';
    confirmPassword = 'input[name = "confirmPassword"]';
    nextBtn = 'button[type = "submit"]'


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

}

export default new SetupAccount();