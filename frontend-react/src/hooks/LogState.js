import { useContext, useState, createContext } from "react"

const LogContext = createContext({
  logs: [],
  setLogs: () => undefined
})

export const LogProvider = ({ children }) => {
  const [logs, setLogs] = useState(["ready"])
  return (
    <LogContext.Provider value={{ logs, setLogs }}>
      {children}
    </LogContext.Provider>
  )
}

export const useLogs = () => {
  const { logs, setLogs } = useContext(LogContext)
  return { logs, setLogs }
}
