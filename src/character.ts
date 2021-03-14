import {gql} from '@apollo/client'
 
export const CharGet = gql`
query{
    characters(page:$page){
      results{
        name
        image
      }
    }
  }
`;