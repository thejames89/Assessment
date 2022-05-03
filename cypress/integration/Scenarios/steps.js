import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import selectors from '../../fixtures/selectors.js';

Given('the page loads', () => {
    cy.visit_space_x();
})
Then('a screen will appear with a list of Space API results', () =>{
    cy.get(selectors.allItems).should('have.length', '111')
    cy.get(selectors.yearFilter).should('be.enabled')
    cy.get(selectors.sortDescending).should('be.enabled')
    cy.get(selectors.reloadData).should('be.enabled')
      cy.get(selectors.allItems)
        .each(($item) => {
        expect($item.children()).to.have.class(selectors.missionContent).to.have.class(selectors.metaInfo)
    })
})
Given('selecting filter', () => {
    cy.visit_space_x();
})
When('setting filter by year to 2015', () => {
    cy.get(selectors.yearFilter).select('2015')
})
Then('return a list of only launches in 2015', () =>{
    var items = []
      cy.get(selectors.dateItems)
        .each(($item) => {
        expect($item).to.contain("2015");
        items.push($item.text()) 
        cy.log($item.text())
    })
})
Given('no year filter is on', () =>{
    cy.visit_space_x();
    cy.get(selectors.yearFilter).should('have.value','')
})
When('ordering is done descending', () =>{
    cy.get(selectors.sortDescending).click()
})
Then ('items should be ordered alphabetically', () =>{
    var items = []
    cy.get(selectors.launchLabel).each(($item, index) => {
    items[index] = $item.text()})
        .then(() => {
        expect(items).to.be.sorted({descending: true})
    })   
})

