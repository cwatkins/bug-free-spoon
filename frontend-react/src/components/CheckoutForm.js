import { useEffect, useState } from "react"
import { useLogs } from "../hooks/LogState"
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk"
import { useNavigate } from "react-router-dom"
import { attemptPayment } from "../api/PaymentAPI"

export const CheckoutForm = ({ total }) => {
  const [applicationId, setApplicationId] = useState()
  const [locationId, setLocationId] = useState()
  const { logs, setLogs } = useLogs()

  const navigate = useNavigate()

  useEffect(() => {
    const retrieveSquareConfig = async () => {
      const request = await fetch("/config")
      const result = await request.json()
      setApplicationId(result.applicationId)
      setLocationId(result.locationId)
    }
    retrieveSquareConfig()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {applicationId && locationId ? (
        <div>
          <p>TODO: setup payment</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
