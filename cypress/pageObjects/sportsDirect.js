import BasePage from "../pageObjects/basePage";

class SportsDirectPage extends BasePage {
    static get url() {
      return "https://lv.sportsdirect.com";
    }
    static get brandsButton(){
        return cy.get('#lnkTopLevelMenu_2579840',{ timeout: 10000 })
    }
    static get adidasButton(){
        return cy.get('.Adidas',{ timeout: 10000 });
    }
    static get trainersButton(){
        return cy.get('.swiper-slide-next > a > .slideName',{ timeout: 10000 });
    }
    static get mensCheck(){
        return cy.get('[data-productname="Mens"] > .FilterAnchor > .SelectableFilter',{ timeout: 10000 });
    }
    static get trainersCheck(){
        return cy.get('[data-productname="Trainers"] > .FilterAnchor > .SelectableFilter',{ timeout: 10000 });
    }
    static get courtTrainersCheck(){
        return cy.get('[data-productname="Court Trainers"] > .FilterAnchor > .SelectableFilter',{ timeout: 10000 });
    }
    static get leatherCheck(){
        return cy.get('[data-productname="Leather"] > .FilterAnchor > .SelectableFilter',{ timeout: 10000 });
    }
    static get blackCheck(){
        return cy.get('[data-productname="Black"] > .FilterAnchor > .SelectableFilter',{ timeout: 10000 });
    }
    static get products(){
        return cy.get("[class = 's-productthumbbox']",{ timeout: 10000 });
    }
    static get productTitle(){
        return cy.get("[class = 'nameWrapTitle']",{ timeout: 10000 });
    }
    static get productName(){
        return cy.get('#lblProductName',{ timeout: 10000 });
    }
}

export default SportsDirectPage;