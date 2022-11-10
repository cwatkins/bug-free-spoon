import { Link } from "react-router-dom"
export const Success = () => {
  return (
    <>
      <h1 className="text-2xl pb-2">Thank you</h1>
      <section>
        <p>
          Your order will be reader in{" "}
          <span className="font-semibold">15 minutes</span>. You will receive an
          email with your reciept.
        </p>
        <br />
        <Link to={`/`}>Restart demo</Link>
      </section>
    </>
  )
}
