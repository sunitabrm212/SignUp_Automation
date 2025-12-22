import SetupAccount from "../pages/setupAccount.js";
import AgencyDetails from "../pages/agencyDetails.js";

describe("Sign Up", () => {
    const setupAccount = new SetupAccount();
    const agencyDetails = new AgencyDetails();
        

    //runs before each it block
    beforeEach(() => {
        
        cy.visit("https://authorized-partner.vercel.app");

        cy.contains('button', 'Get Started').click();

        cy.get('#remember').click();

        cy.contains('button', 'Continue').click();

    })

    //checks for the URL
    it("Validate URL", () => {

        cy.url().should('eq', "https://authorized-partner.vercel.app/register?step=setup");

    })

    //checks for the title of the web page
    it("Validate title", () => {

        cy.title().should('eq', "Authorized Partner");

    })

    //checks sign up with valid data
    it("Validate sign up with valid credentials", () => {

        cy.fixture("UserDetails").then((data) => {

            setupAccount.setFirstName(data.firstName);
            setupAccount.setLastName(data.lastName);
            setupAccount.setEmail(data.email);
            setupAccount.setPhoneNumber(data.phoneNumber);
            setupAccount.setPassword(data.password);
            setupAccount.setConfirmPassword(data.confirmPassword);
            setupAccount.clickNextBtn();
            setupAccount.verifyStatus();

            // agencyDetails.setName("OrangeHRM");
            // agencyDetails.setRole("QA");
            // agencyDetails.setAgencyEmail("orangehrm@gmail.com");
            // agencyDetails.setAgencyWebsite("www.opensource-demo.orangehrmlive.com");
            // agencyDetails.setRegionOfOperation("Australia");
            // agencyDetails.clickNext();
            


        })   
        

    })

    it("Validate sign up with empty fields", () => {
         setupAccount.setFirstName("");
         setupAccount.setLastName("");
         setupAccount.setEmail("");
         setupAccount.setPhoneNumber("");
         setupAccount.setPassword("");
         setupAccount.setConfirmPassword("");
         setupAccount.clickNextBtn();
         
        })


})