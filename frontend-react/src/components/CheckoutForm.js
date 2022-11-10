import { useEffect, useState } from "react"
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk"

export const CheckoutForm = ({ setLogs, logs }) => {
  const [applicationId, setApplicationId] = useState()
  const [locationId, setLocationId] = useState()

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
              if (logs && setLogs) {
                const log = `result:\n${JSON.stringify(result, null, 2)}`
                setLogs([...logs, log])
              }
            }}
            createVerificationDetails={() => ({
              amount: "0.00",
              currencyCode: "GBP",
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
