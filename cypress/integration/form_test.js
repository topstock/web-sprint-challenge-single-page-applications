describe('Test form functionality', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get('select[name=size]');
    const prosciuttoInput = () => cy.get('input[name=prosciutto]');
    const granaPadanoInput = () => cy.get('input[name=granaPadano]');
    const artichokeInput = () =>  cy.get('input[name=artichoke]');
    const basilInput = () => cy.get('input[name=artichoke]');
    const specialTextInput = () => cy.get('input[name=specialText]');
    const orderBtn = () => cy.get('button[id=order-button]');

    it('can add text to the name box', () => {
        nameInput()
            .type('Lorem Ipsum')
            .should('have.value', 'Lorem Ipsum');
    })

    
   
    it('can select multiple toppings', () => {

        prosciuttoInput().should('not.have.checked');
        granaPadanoInput().should('not.have.checked');
        basilInput().should('not.have.checked');
        artichokeInput().should('not.have.checked');


        prosciuttoInput().check();
        granaPadanoInput().check();
        basilInput().check();
        artichokeInput().check();

        prosciuttoInput().should('have.checked');
        granaPadanoInput().should('have.checked');
        basilInput().should('have.checked');
        artichokeInput().should('have.checked');
    })

    it('can add text to the Special Instructions box', () => {
        specialTextInput()
            .type('Lorem Ipsum')
            .should('have.value', 'Lorem Ipsum');
    })

    it('can submit the form', () => {
        nameInput()
            .type('Lorem Ipsum');
        sizeInput()
            .select('party');
        prosciuttoInput().check();
        granaPadanoInput().check();
        artichokeInput().check();
        basilInput().check();
        specialTextInput()
            .type('lorem ipsum dolor sept');
        orderBtn().click();
    })

   
})