const url = "http://localhost:3000/?name=name&size=&special="
const name= "bobby"
const specialinst = "gimmie free stuff"

describe('first test', () => {
    it('can navigate to the site', () => {
        cy.visit(url)
    })
})

describe('second test', () => {
    it('can type a name', () => {
        cy.get('input[name="name"]')
        .type(name)
    })
})
describe('third test', () => {
    it('can request special instructions', () => {
        cy.get('input[name="special"]')
        .type(specialinst)
    })
})