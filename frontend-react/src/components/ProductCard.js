import { UsdFormatter } from "../helpers"

export const ProductCard = ({ image, title, description, quantity, price }) => {
  return (
    <div className="py-2">
      <div className="flex flex-row space-x-4">
        <img src={image} alt={title} className="h-40 rounded-lg" />
        <div className="flex flex-col text-left text-neutral-400">
          <h4 className="text-neutral-900 font-medium text-base">{title}</h4>
          <p>{description}</p>
          <div className="pt-2 text-neutral-800">
            <p>Quantity: {quantity}</p>
            <p>Price: {UsdFormatter.format(price / 100)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
