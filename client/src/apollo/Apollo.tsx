import React from 'react'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
})

export const ApolloClientProvider: React.FC = (props: any) => {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}