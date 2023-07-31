describe("pe site ul Niki", () => {
  it("ma pot loga", () => {
    cy.visit("https://www.nichiduta.ro");
    cy.get(".header-tm-logos > a").click();
    cy.get("#acc_button").click();
    cy.get("a.buttonBorder.bigRadius").click();
    cy.get("#valid-email").type("testnichiduta@gmail.com");
    cy.get("#valid-password").type("test1234");
    cy.get("#submitinreg").click();
    cy.get(".notification").should("exist");
  });
});
