import { CheckoutForm } from "../components/CheckoutForm"
import { CheckoutSummary } from "../components/CheckoutSummary"
import { ProductCard } from "../components/ProductCard"

const product = {
  title: "The Usual Suspect",
  description:
    "Bacon, egg, cheddar cheese & cream cheese on your choice of toasted bagel.",
  quantity: 1,
  price: 725,
  image: "https://data.thefeedfeed.com/recommended/post_2899718.jpeg"
}

const tax = product.price * 0.12
const tip = product.price * 0.15
const total = product.price + tax + tip

export const Checkout = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="justify-between">
        <h1 className="text-2xl font-black">Your order - Block Coffee</h1>
        <hr />
        <ProductCard
          title={product.title}
          description={product.description}
          quantity={product.quantity}
          price={product.price}
          image={product.image}
        />
        <hr />
        <CheckoutSummary
          price={product.price}
          tax={tax}
          tip={tip}
          total={total}
        />
      </div>
      <br />
      <CheckoutForm total={total} />
    </div>
  )
}
