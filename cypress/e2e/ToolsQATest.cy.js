import homePageCy from "../pages/ToolsQAHomePage.js"
import formsPageCy from "../pages/ToolsQAFormsPage.js"
import practiceFormCy from "../pages/ToolsQAPracticeFormsPage.js"


describe("Testing ToolsQA to navigate", () => {

    it("Open homepage", () => {
        cy.viewport(1920,1080);
        homePageCy.navigate();
        homePageCy.openForms();
        formsPageCy.openPracticeForms();
       
        practiceFormCy.fillIn("Test", "Persoon" , "Female", "0123456789");
        practiceFormCy.submit();
    })
})