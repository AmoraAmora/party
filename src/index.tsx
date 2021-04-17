import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import reportWebVitals from './reportWebVitals'
import App from './App/index'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ApolloProvider>,
    document.getElementById('root'),
)
reportWebVitals()
