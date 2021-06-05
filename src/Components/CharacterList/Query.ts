import { gql } from '@apollo/client'

export const CHAR_GET = gql`
  query GetChar($name: String!) {
    characters(filter: { name: $name }) {
      results {
        name
        image
        id
      }
    }
  }
`
