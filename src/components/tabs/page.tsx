function Tabs() {
  const tabExample = _makeExampleTab()
  return (
    <section className="text-l">
    {tabExample.map(tabLine=>{
     return <div key={'234234'} className="tracking-[.3em]">{tabLine}</div> 
    })}
    </section>
  )
}

export default Tabs


function _makeExampleTab() {
  let res: string[] = ['','','','','','']
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 80; j++) {
      res[i] += '-'
    }
  }
  return res
}