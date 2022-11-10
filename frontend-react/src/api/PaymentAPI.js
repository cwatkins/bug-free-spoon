export const attemptPayment = async ({ tokenResult, verificationToken }) => {
  const response = await fetch("/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: tokenResult.token,
      ...(verificationToken && { verificationToken: verificationToken.token })
    })
  })
  const { payment, error } = await response.json()
  return { payment, error }
}
