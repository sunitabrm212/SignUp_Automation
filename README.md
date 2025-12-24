#Authorized Partner Signup

This project contains automation test for Authorized Partner Signup using **Cypress** and **Page Object Model(POM)**;

#How to Run?

Prerequisites
-------------

-> Node.js -18 or above installed
-> npm
-> Git
-> browser (Chrome / Edge)

Steps to Execute
-----------------

1. clone repository -> git clone https://github.com/sunitabrm212/SignUp_Automation.git
                    -> cd <project-folder>

2. Run Cypress in interactive mode
-> npx cypress open -> e2e -> chrome -> select signup.cy.js

3. Run specific test file
-> npx cypress run --spec cypress/e2e/signup.cy.js

Environment Details
--------------------

-> Programming language: JavaScript
-> Test framework : Cypress
-> Automation Pattern: Page Object Model(POM)
-> Browser: Crhome
-> Cypress Version: installed through package.json

Test Data
-----------

Fixture include first name, last name, email, phone number, password and confirm password



Automation beyond the signup flow requires email OTP verification, which has not been implemented as part of this task.
As I am not currently familiar with automating OTP retrieval from email, testing could not be continued further.
Page Object files for Agency Details and Professional Experience have been included to demonstrate understanding of framework design and future test expansion.
