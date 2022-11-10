export const Layout = ({ left, right }) => {
  return (
    <div className="flex flex-col container mx-auto p-8 h-screen">
      <div className="grid grid-cols-2 gap-8 h-full">
        <section className="col-span-1">
          <h1 className="font-bold text-2xl pb-2">Square payments demo</h1>
          <hr className="pb-4" />
          {left}
        </section>
        <section className="col-span-1">{right}</section>
      </div>
    </div>
  )
}
