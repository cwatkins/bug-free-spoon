import { CheckoutForm } from "../components/CheckoutForm"
import { CheckoutSummary } from "../components/CheckoutSummary"
import { ProductCard } from "../components/ProductCard"
import { TestCardsTable } from "../components/TestCardsTable"

export const Checkout = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl">Your order - Block Coffee</h1>
      <hr />
      <ProductCard
        title={"The Usual Suspect"}
        description={
          "Bacon, egg, cheddar cheese & cream cheese on your choice of toasted bagel."
        }
        quantity={1}
        price={725}
        image={
          "https://upload.wikimedia.org/wikipedia/commons/d/d6/BEC_Sandwich_on_Everything_Bagel.jpg"
        }
      />
      <hr />
      <CheckoutSummary price={725} />
      <br />
      <CheckoutForm />
      <TestCardsTable />
    </div>
  )
}
