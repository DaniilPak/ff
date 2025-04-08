import { defineStore } from 'pinia'
import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'

// Define the GraphQL query
const GET_USERS = gql`
  query {
    users {
      id
      name
      email
      age
    }
  }
`

export const useUsersStore = defineStore('users', () => {
  // Use Apollo query inside the store
  const { result, loading, error } = useQuery(GET_USERS)

  return { result, loading, error }
})
