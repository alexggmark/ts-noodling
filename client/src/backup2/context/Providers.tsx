import React from 'react'
import {ApolloProvider} from '@apollo/client'
import {client} from './client'

interface IProps {
  children: React.ReactNode
}

export const ApolloClientProvider: React.FC<IProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}