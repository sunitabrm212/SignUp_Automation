class AgencyDetails{

    agency_name = "input[name = 'agency_name']";
    role_in_agency = "input[name = 'role_in_agency']";
    agency_email = "input[name = 'agency_email']";
    agency_website = "input[name = 'agency_website']";
    agency_address = "input[name = 'agency_address']";
    region_of_operation = "button[role = 'combobox']";
    search = "input[placeholder = 'Search...']";
    nextBtn = 'button[type = "submit"]'

    setName(name){
        cy.get(this.agency_name).type(name);
    }

    setRole(role){
        cy.get(this.role_in_agency).type(role);
    }

    setAgencyEmail(agencyEmail){
        cy.get(this.agency_email).type(agencyEmail);
    }

    setAgencyWebsite(agencyWebsite){
        cy.get(this.agency_website).type(agencyWebsite)
    }

    setAddress(address){
        cy.get(this.agency_address).type(address);
    }

    setRegionOfOperation(region){
        cy.get(this.region_of_operation).click();
        cy.get(this.search).type(region);
        cy.contains(region).click();
    }

    clickNext(){
        cy.get(this.nextBtn).click();
    }

    

}

export default AgencyDetails;
