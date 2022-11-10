import { UsdFormatter } from "../helpers"

export const CheckoutSummary = ({ price, tip, tax, total }) => {
  return (
    <section className="text-xl py-2">
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
      <div className="flex flex-row justify-between border-y font-bold">
        <div>Total</div>
        <div>{UsdFormatter.format(total / 100)}</div>
      </div>
    </section>
  )
}
