import signup from "../pages/setupAccount.js";

describe("Sign Up", () => {

    beforeEach(() => {
        
        cy.visit("https://authorized-partner.vercel.app");

        cy.contains('button', 'Get Started').click();

        cy.get('#remember').click();

        cy.contains('button', 'Continue').click();

        cy.url().should('eq', "https://authorized-partner.vercel.app/register?step=setup");

    })

    it("Validate sign up with valid credentials", () => {

        signup.setFirstName("Sunita");
        signup.setLastName("Baram");
        signup.setEmail("baramsunita82@gmail.com");
        signup.setPhoneNumber("9818196395");
        signup.setPassword("Sunita123@");
        signup.setConfirmPassword("Sunita123@");
        signup.clickNextBtn();

    })


})