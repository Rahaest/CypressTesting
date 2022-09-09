class ToolsQAPracticeFormsPage {

    setGender(gender){
        if(gender.toLowerCase() == "male") {
            cy.contains('Male').click(); 
        }
        if(gender.toLowerCase() == "female") {
            cy.contains('Female').click(); 
        }
        if(gender.toLowerCase() == "other") {
            cy.contains('Other').click(); 
        }
    }
    
    fillIn(firstName, lastName, gender, userNumber){
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
        this.setGender(gender);
        cy.get('#userNumber').type(userNumber);
    }

    submit(){
        cy.get('#submit').click();
    }
}

export default new ToolsQAPracticeFormsPage();