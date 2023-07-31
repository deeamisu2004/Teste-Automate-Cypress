describe("Add product to wishlist", () => {
  it("should display a message when user is not logged in", () => {
    cy.visit("https://www.nichiduta.ro/"); // navigate to the website
    cy.get(
      ":nth-child(2) > :nth-child(1) > .product-thumb > .sub_left > .cart"
    ).click();
    cy.get("#add_to_wish").click();
    cy.wait(2000); // wait for the element to appear
    cy.get("#ajaxMessage");
  });
});
