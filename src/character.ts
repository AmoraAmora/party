import {gql} from '@apollo/client'
 
export const CharGet = gql`
query{
    characters(page:1){
      results{
        name
        image
      }
    }
  }
`;