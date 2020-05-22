describe('Logictest', function() {
    it('app runs', function(){
        cy.visit('/')
    });
    it('filter works', function(){
        cy.visit('/parkinglist');
        cy.get('[data-cy=filterInput]').type('re');
        cy.get('[data-cy=parkingCard]').should('have.length', 1);
    });
    it('mock parking get', function() {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Parking'
        })
    });
    it('mock parking list', function(){
        cy.server({ delay: 1000 });
        cy.route({
            method: 'GET',
            url: '/api/Parking',
            status: 200,
            response: 'fixture:parkings.json'
        });
        
        cy.visit('/parkinglist');
        cy.get('[data-cy=parkingCard]').should('have.length', 3);
    });
    it('on error should show error message', function() {
        cy.server();
        cy.route({
          method: 'GET',
          url: '/api/Parking',
          status: 500,
          response: 'ERROR'
        });

        cy.visit('/parkinglist');
        cy.get('[data-cy=appError]').should('be.visible');
    });
});
