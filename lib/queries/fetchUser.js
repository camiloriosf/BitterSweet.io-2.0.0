import { gql } from 'react-apollo';

export default gql`
  query User {
    user {
      token
      id
    }
  }
`;
