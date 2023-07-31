describe("Ordering products on Niki website", () => {
  beforeEach(() => {
    cy.clearCookies();
  });

  it("should be able to add products to cart and complete checkout process", () => {
    cy.visit("https://niki-website.localhost/");
    cy.get(":nth-child(1) > .menu_item").click();
    // cy.get(".header-tm-logos > a").click();
    cy.get("#acc_button").click();
    cy.get("a.buttonBorder.bigRadius").click();
    cy.get("#valid-email").type("testnichiduta@gmail.com");
    cy.get("#valid-password").type("test1234");
    cy.get("#submitinreg").click();
    cy.get(".notification").should("exist");

    //  Add products to cart
    cy.get(":nth-child(1) > .menu_item").click();
    cy.get(":nth-child(1) > .first_link").click();
    cy.get('[rel="353871"] > :nth-child(1) > .load_image').click();
    cy.get("#add_to_cart_product").click();

    // Complete checkout process
    cy.get(".cart_menu").click();
    cy.get("#begin_checkout").click();
    cy.get('[for="billing_address_1236839"]').click();
    // cy.get("#purchase_button").click();
  });
});
