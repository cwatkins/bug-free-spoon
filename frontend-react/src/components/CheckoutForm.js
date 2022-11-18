import { useEffect, useState } from "react"
import { useLogs } from "../hooks/LogState"
import {
  CashAppPay,
  CreditCard,
  PaymentForm
} from "react-square-web-payments-sdk"
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
          <PaymentForm
            applicationId={applicationId}
            locationId={locationId}
            createPaymentRequest={() => ({
              countryCode: "US",
              currencyCode: "USD",
              total: {
                amount: `${(total / 100).toFixed(2)}`,
                label: "Total"
              }
            })}
            cardTokenizeResponseReceived={async (
              tokenResult,
              verificationResult
            ) => {
              // Pass token to backend for payment
              const { error, payment } = await attemptPayment({
                tokenResult,
                verificationResult
              })
              // Handle error
              if (error) {
                const log = `result:\n${JSON.stringify(error, null, 2)}`
                setLogs([...logs, log])
                return
              }

              const log = `payment:\n${JSON.stringify(payment, null, 2)}`
              setLogs([...logs, log])
              // Go to thank you page, if payment goes through
              if (payment.status === "COMPLETED") {
                navigate("/thank-you")
                window.location.reload(false) // forces Cashapp to unmount and remount on navigation
              }
            }}
            createVerificationDetails={() => ({
              amount: `${(total / 100).toFixed(2)}`,
              currencyCode: "USD",
              intent: "CHARGE",
              billingContact: {}
            })}
          >
            <div className="py-2">
              <CashAppPay
                width="full"
                callbacks={{
                  onTokenization: async (event) => {
                    const { tokenResult } = event.detail
                    const { error, payment } = await attemptPayment({
                      tokenResult
                    })
                    // Handle error
                    if (error) {
                      const log = `result:\n${JSON.stringify(error, null, 2)}`
                      setLogs([...logs, log])
                      return
                    }
                    // Set logs
                    const log = `payment:\n${JSON.stringify(payment, null, 2)}`
                    setLogs([...logs, log])
                    // Go to thank you page, if payment goes through
                    if (payment.status === "COMPLETED") {
                      navigate("/thank-you")
                      window.location.reload(false) // forces Cashapp to unmount and remount on navigation
                    }
                  }
                }}
              />
            </div>
            <CreditCard />
          </PaymentForm>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
