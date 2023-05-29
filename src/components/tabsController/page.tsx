const fretsInGuitar = 16
function TabsController() {
    'use client'
  return (
    <section className="flex justify-center gap-2">
        {[...Array(fretsInGuitar)].map((fret, idx)=> {
            debugger
            // eslint-disable-next-line react/jsx-key
            return <button className="bg-slate-400 rounded-sm min-w-[2.5rem]">{idx}</button>
        })}
    </section>
  )
}

export default TabsController