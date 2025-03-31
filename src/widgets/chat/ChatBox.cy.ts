import ChatBox from './ChatBox.vue'

describe('<ChatBox />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ChatBox)
  })
})