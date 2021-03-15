import {gql} from '@apollo/client'
 
export const CharGet = gql`
query getChar($page:Int!){
    characters(page:$page){
      results{
        name
        image
      }
    }
  }
`;