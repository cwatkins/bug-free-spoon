import * as dotenv from "dotenv"
dotenv.config({ path: "./.env" })
import { checkEnv, calculateCartTotal, getLocationId } from "./utils.js"
checkEnv()

import express from "express"
import bodyParser from "body-parser"
import { nanoid } from "nanoid"

import { Client, Environment, ApiError } from "square"

const PORT = process.env.PORT || 4111

const environment =
  process.env.NODE_ENV === "production"
    ? Environment.Production
    : Environment.Sandbox

const square = new Client({
  environment,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})

const app = express()
app.use(bodyParser.json({ extended: false }))

const applicationId = process.env.SQUARE_APP_ID

// Configuration for client: assumes our default/main Location
app.get("/config", async (_, res) => {
  const locationId = getLocationId()
  return res.send({ locationId, applicationId })
})

// Create a payment using a token
app.post("/payment", async (req, res) => {
  try {
    // Get our card token and create a request
    const { token, verificationToken } = req.body
    const { result } = await square.paymentsApi.createPayment({
      idempotencyKey: nanoid(),
      sourceId: token,
      amountMoney: {
        amount: calculateCartTotal(), // from cart (backend)
        currency: "USD",
      },
      ...(verificationToken && { verificationToken }),
    })
    // Get payment result and send info to consumer
    const { payment } = result
    return res.send({
      status: payment.status,
      receiptUrl: payment.receiptUrl,
      orderId: payment.orderId,
    })
  } catch (e) {
    // Check if this is an Square API Error
    if (e instanceof ApiError) {
      // Square errors are a list of errors
      const squareError = e.errors[0]
      return res.status(e.statusCode).send({
        error: {
          type: squareError.category,
          code: squareError.code,
          ...(squareError.detail && { message: squareError.detail }),
        },
      })
    }
    // If it's not a Square Error, send server error
    return res.status(500).send({
      error: {
        message: "Something went wrong: " + e.message,
      },
    })
  }
})

app.listen(PORT, () =>
  console.log(
    `Node server listening on port ${PORT} in ${process.env.NODE_ENV} mode`
  )
)
