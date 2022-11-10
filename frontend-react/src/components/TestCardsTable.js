export const TestCardsTable = () => {
  const testCards = [
    {
      brand: "Visa",
      cardNumber: "4111 1111 1111 1111",
      cvv: "111",
      challengeType: "None",
      verificationCode: "N/A"
    },
    {
      brand: "Visa EU",
      cardNumber: "4310 0000 0020 1019",
      cvv: "111",
      challengeType: "Modal",
      verificationCode: "123456"
    }
    // {
    //   brand: "Visa",
    //   cardNumber: "4811 1100 0000 0008",
    //   cvv: "111",
    //   challengeType: "None",
    //   verificationCode: "N/A"
    // },
    // {
    //   brand: "Mastercard",
    //   cardNumber: "5333 3300 0000 0008",
    //   cvv: "111",
    //   challengeType: "Modal",
    //   verificationCode:
    //     "Challenge 1: Thomason \nChallenge 2: Select both St Louis & Dallas \nChallenge 3: Smith"
    // }
  ]

  return (
    <div className="pt-6 text-neutral-500">
      <h2 className="text-md font-semibold text-neutral-700">Test cards</h2>
      <table className="pt-2 w-full text-sm text-left table-auto border border-spacing-2">
        <thead>
          <tr>
            <th className="font-medium border p-1">Numbers</th>
            <th className="font-medium border p-1">CVV</th>
            <th className="font-medium border p-1">Challenge</th>
            <th className="font-medium border p-1">Verification code</th>
          </tr>
        </thead>
        <tbody>
          {testCards.map((tc, i) => {
            return (
              <tr key={i}>
                <td className="w-1/2 border p-1">{tc.cardNumber}</td>
                <td className="border p-1">{tc.cvv}</td>
                <td className="border p-1">{tc.challengeType}</td>
                <td className="border p-1 break-words whitespace-pre-line">
                  {tc.verificationCode}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
