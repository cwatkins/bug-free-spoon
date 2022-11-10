export const Logs = ({ logs }) => {
  return (
    <div className="bg-zinc-800 py-2 px-4 overflow-y-auto rounded-md h-full">
      {logs.map((log, i) => {
        return (
          <code
            key={i}
            className="text-sm text-slate-300 py-2 break-words whitespace-pre-line"
          >
            <pre>{`> ${log}\n`}</pre>
          </code>
        )
      })}
    </div>
  )
}
