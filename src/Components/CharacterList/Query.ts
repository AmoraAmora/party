import { gql } from "@apollo/client";

export const CHAR_GET = gql`
  query GetChar($page: Int!) {
    characters(page: $page) {
      results {
        name
        image
        id
      }
    }
  }
`;
