
function AppHeader() {
  return (
    <header className="bg-slate-700 text-slate-200 flex justify-between px-20 items-center">
        <h1 className="text-2xl font-bold">Tabmaker</h1>
        <div className="flex gap-2 font-bold">
            <span>Scales</span>
            <span>Home</span>
            <span>Page1</span>
            <span>Page2</span>
        </div>
    </header>
  )
}

export default AppHeader