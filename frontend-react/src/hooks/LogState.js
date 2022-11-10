import { useContext, useState, createContext } from "react"

const LogContext = createContext({
  logs: [],
  setLogs: () => undefined
})

export const LogProvider = ({ children }) => {
  const initialLogs = [
    "Try these test cards:",
    "card number         | verification method | challenge answer",
    "4111 1111 1111 1111 | no verification     | n/a",
    "4310 0000 0020 1019 | modal verification  | code is 123456"
  ]
  const [logs, setLogs] = useState(initialLogs)
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
