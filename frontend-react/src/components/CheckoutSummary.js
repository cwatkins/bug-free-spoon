import { UsdFormatter } from "../helpers"

export const CheckoutSummary = ({ price }) => {
  const tax = price * 0.12
  const tip = price * 0.15
  const total = price + tax + tip
  return (
    <section className="py-2">
      <div className="flex flex-row justify-between">
        <div>Subtotal</div>
        <div>{UsdFormatter.format(price / 100)}</div>
      </div>
      <div className="flex flex-row justify-between">
        <div>Taxes</div>
        <div>{UsdFormatter.format(tax / 100)}</div>
      </div>
      <div className="flex flex-row justify-between">
        <div>Tip</div>
        <div>{UsdFormatter.format(tip / 100)}</div>
      </div>
      <div className="flex flex-row justify-between font-semibol border-y font-semibold">
        <div>Total</div>
        <div>{UsdFormatter.format(total / 100)}</div>
      </div>
    </section>
  )
}
