describe('automation website test', () => {
  it('submit customer form', () => {
    cy.visit('https://automationintesting.online/');
    cy.contains('Let me hack!').click()

    // enter information into the form
    cy.get('[id="name"]').type('Test McTesterson')
    cy.get('[id="email"]').type('testyTester@testing.com')
    cy.get('[id="phone"]').type('15845554854')
    cy.get('[id="subject"]').type('Very Interested')
    cy.get('[id="description"]')
      .type(
        'Hello! I am very interested in booking a room at your B&B for my vacation this summer. Would you be able to tell me more about your rates? Also are dogs permitted during our stay? If so, are there any breed restrictions?')
    // submit
    cy.get('[id="submitContact"]').click()
    })

  it('admin access', () => {
    cy.once('uncaught:exception', () => false);
    // go to admin panel
    cy.visit('https://automationintesting.online');
    cy.contains('Let me hack!').click()
    cy.contains('Admin panel').click()
    // login 
    cy.get('#username').type('admin')
    cy.get('#password').type('password')
    cy.get('#doLogin').click()
    // add a room
    cy.get('#roomName').type('204')
    cy.get('#type').select('Suite')
    cy.get('#accessible').select('true')
    cy.get('#roomPrice').type('200')
    cy.get('#wifiCheckbox').check()
    cy.get('#refreshCheckbox').check()
    cy.get('#tvCheckbox').check()
    cy.get('#safeCheckbox').check()
    cy.get('#viewsCheckbox').check()
    cy.get('#createRoom').click()
    // log out and back to front page
    cy.contains('Logout').click()
    cy.contains('B&B Booking Management').click()

  });
});