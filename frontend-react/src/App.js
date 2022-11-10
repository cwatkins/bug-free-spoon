import { useState } from "react"
import { CheckoutForm } from "./components/CheckoutForm"
import { Layout } from "./components/Layout"
import { Logs } from "./components/Logs"
import { TestCardsTable } from "./components/TestCardsTable"

function App() {
  const [logs, setLogs] = useState(["ready"])
  return (
    <Layout
      left={
        <div className="flex flex-col justify-between h-5/6">
          <CheckoutForm logs={logs} setLogs={setLogs} />
          <TestCardsTable />
        </div>
      }
      right={<Logs logs={logs} />}
    />
  )
}

export default App
