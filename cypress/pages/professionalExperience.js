class ProfessionalExperience{

    yearsOfExperience = "button[role = 'combobox']";
    noOfStudentsRecruitedAnnually = 'input[name = "number_of_students_recruited_annually"]';
    focusArea = 'input[name = "focus_area"]';
    successMetrics ='input[name = "success_metrics"]';
    serviceProvided = 'button[role="checkbox"]';
    nextBtn = 'button[type = "submit"]'

    setNoOfStudentRecruitedAnually(noOfStudRecruited){
        cy.get(this.noOfStudentsRecruitedAnnually).type(noOfStudRecruited);
    }

    setFocuArea(focusArea){
        cy.get(this.focusArea).type(focusArea);
    }

    setSuccessMetrics(successMetrics){
        cy.get(this.successMetrics).type(successMetrics);
    }

    setServiceProvided(serviceProvided){
        cy.get(this.serviceProvided).type(serviceProvided);
    }

    clickNext(){
        cy.get(this.nextBtn).click();
    }



}

export default ProfessionalExperience;