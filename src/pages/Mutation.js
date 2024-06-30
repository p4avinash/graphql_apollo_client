//This is for another API, but the implementation is correct. Use it as the mutation reference

import { gql, useMutation } from "@apollo/client"
import React from "react"

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: { name: $name, quantityPerUnit: $quantityPerUnit }) {
      record {
        name
      }
    }
  }
`

const Mutation = () => {
  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: "hotdog",
        quantityPerUnit: 4,
      },
    }
  )

  return (
    <div>
      <button onClick={() => createProduct()}>Create Product</button>
    </div>
  )
}

export default Mutation
