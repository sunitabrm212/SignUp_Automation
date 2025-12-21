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

        cy.fixture("UserDetails").then((data) => {

            signup.setFirstName(data.firstName);
            signup.setLastName(data.lastName);
            signup.setEmail(data.email);
            signup.setPhoneNumber(data.phoneNumber);
            signup.setPassword(data.password);
            signup.setConfirmPassword(data.confirmPassword);
            signup.clickNextBtn();
        })    

    })


})