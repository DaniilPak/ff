import { gql } from 'graphql-tag' // Correct import

export const GET_USERS = gql`
  query {
    users {
      id
      name
      email
      age
    }
  }
`
