import { useEffect, useState } from "react"
import { useLogs } from "../hooks/LogState"
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk"
import { useNavigate } from "react-router-dom"

export const CheckoutForm = () => {
  const { logs, setLogs } = useLogs()
  const [applicationId, setApplicationId] = useState()
  const [locationId, setLocationId] = useState()
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
          <PaymentForm
            applicationId={applicationId}
            locationId={locationId}
            cardTokenizeResponseReceived={async (
              tokenResult,
              verificationResult
            ) => {
              // Pass tokent to backend for payment
              const response = await fetch("/payment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  token: tokenResult.token,
                  verificationToken: verificationResult.token
                })
              })
              const result = await response.json()
              // Set logs
              const log = `result:\n${JSON.stringify(result, null, 2)}`
              setLogs([...logs, log])
              // Go to thank you page, if payment goes through
              if (result.status === "COMPLETED") {
                navigate("/thank-you")
              }
            }}
            createVerificationDetails={() => ({
              amount: "9.21",
              currencyCode: "USD",
              intent: "CHARGE",
              billingContact: {}
            })}
          >
            <CreditCard />
          </PaymentForm>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
