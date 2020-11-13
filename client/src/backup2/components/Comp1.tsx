import React from 'react'
import {useQuery, gql} from '@apollo/client'
import styled from 'styled-components'

const GET_EXCHANGE_RATES = gql`
  query GetExchangeRates($currency: String!) {
    rates(currency: $currency) {
      rate
      currency
    }
  }
`

const countries = [
  'AED',
  'AFN',
  'ALGO',
  'USD',
  'GBP'
]

const LoaderContainer = styled.h1`
  color: white;
  background-color: red;
  font-size: 30px;
`

interface IPropsInput {
  input: string
}

interface DataReturnObject {
  rates: ExchangeQueryObject[] | null
}

interface ExchangeQueryObject {
  rate: string
  currency: string
}

interface IProps {
  data: DataReturnObject
  loading: boolean
  error: boolean
}

const Loading: React.FC = () => {
  return <LoaderContainer>Loading</LoaderContainer>
}

const DisplayData: React.FC<IProps> = ({ data, loading, error }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {data?.rates?.map((item) => {
            return <li>{item.rate}</li>
          })}
        </ul>
      )}
    </>
  )
}

const OutputComponent: React.FC<IPropsInput> = ({ input }) => {
  const {data, error, loading} = useQuery(GET_EXCHANGE_RATES, {
    variables: { currency: input}
  })

  return <DisplayData data={data} loading={loading} error={error} />
}

const Comp1 = () => {
  const input = React.useRef<HTMLInputElement | null>(null)
  const [inputValue, setInputValue] = React.useState('GBP')

  const handleInput = () => {
    if (input.current === null || countries.indexOf(input.current.value) < 0) return
    setInputValue(input.current.value)
  }

  return (
    <>
      <input onChange={handleInput} placeholder="Input" ref={input} />
      <OutputComponent input={inputValue} />
    </>
  )
}

export default Comp1