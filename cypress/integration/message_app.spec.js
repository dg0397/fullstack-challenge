describe('Message app', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000')
    })
    it('front page can be opened', function() {
      cy.contains('Coding Challenge')
      cy.contains('Error Type 1')
      cy.contains('Warning Type 2')
      cy.contains('Info Type 3')
    })
    it('front page can be stoped', function() {
        cy.wait(2500)
        cy.contains('Stop').click()
        cy.contains('Start')
    })
    describe('when front page is stoped',function(){
        beforeEach(function(){
            cy.wait(6000)
            cy.contains('Stop').click()
        })
        it('mobile first',function(){
            cy.get('.message').then(message => {
                console.log(message.length)
                cy.wrap(message[0]).parent().should('not.have.value')
            })
        })
        it('messages are received',function(){
            cy.get('.message').then(message => {
                console.log(message.length)
                cy.wrap(message).should('have.length.within',0,10)
            })
        })
        it('page can be restarted',function(){
            cy.contains('Start').click()
            cy.contains('Stop')
        })
        describe('when viewport is greater than 1024px',function(){
            beforeEach(function(){
                cy.viewport(1024,750)
            })
            it('full viewport',function(){
                cy.get('.message').then(message => {
                    console.log(message.length)
                    cy.wrap(message[0]).parent().should('have.class','messageList')
                })
            })
            it('messages can be cleaned',function(){
                cy.contains('Clear').click()
                cy.get('.messageList').children().should('have.lengthOf',3)
            })
        })
    })
})