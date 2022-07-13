import SportsDirectPage from "../pageObjects/sportsDirect";

describe('https://lv.sportsdirect.com/', () => {
  beforeEach(() => {
    //     - Open Sportsdirect page
    SportsDirectPage.visit();
    cy.viewport(1440, 900);
  });
  it('Automate the following scenario based on https://lv.sportsdirect.com/', () => {
    //   - Click on Brands menu option
    SportsDirectPage.brandsButton.click();
    //   - Click on Addidas logo
    SportsDirectPage.adidasButton.click();
    //   - Select Trainers option (in middle of page)
    SportsDirectPage.trainersButton.click();
    //   - Check the following checkboxes:
    //     - Mens
    SportsDirectPage.mensCheck.click();
    //     - Trainers
    SportsDirectPage.trainersCheck.click();
    //     - Court Trainers
    SportsDirectPage.courtTrainersCheck.click();
    //     - Leather
    SportsDirectPage.leatherCheck.click();
    //     - Black
    SportsDirectPage.blackCheck.click();
    // -  Validate that 2 product boxes are visible
    SportsDirectPage.products.should("have.length","2");
    // - Open box that contains "SE Trainers"
    SportsDirectPage.productTitle.contains("SE Trainers").click();
    // - Validate product title "Grand Court SE Trainers Mens"
    SportsDirectPage.productName.should("have.text","Grand Court SE Trainers Mens");
  });
});

//If timeoute, rerun test | page problem?