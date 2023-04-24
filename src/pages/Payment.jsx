import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

export default function Payment() {
  const [responseData, setResponseData] = useState(null)
  let { message, amount } = useParams()
  console.log(message, amount)

  useEffect(() => {
    axios
      .post(
        'https://upiqr.in/api/qr',
        {
          name: 'Roopesh',
          vpa: '9444748241@upi',
          note: message,
          amount: parseInt(amount),
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        setResponseData(response.data)
        console.log(responseData)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [message, amount, responseData])

  return (
    <div>
      <h1>Payment</h1>
      {responseData && (
        <div dangerouslySetInnerHTML={{ __html: responseData }} />
      )}
    </div>
  )
}
