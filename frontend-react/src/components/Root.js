import { Outlet } from "react-router-dom"
import { LogProvider } from "../hooks/LogState"
import { Logs } from "./Logs"
export const Root = () => {
  return (
    <LogProvider>
      <div className="flex flex-col container mx-auto py-8 w-5/6 h-screen">
        <div className="grid grid-cols-2 gap-8 h-full">
          <section className="col-span-1">
            <Outlet />
          </section>
          <section className="col-span-1 max-h-screen overflow-y-auto">
            <Logs />
          </section>
        </div>
      </div>
    </LogProvider>
  )
}
