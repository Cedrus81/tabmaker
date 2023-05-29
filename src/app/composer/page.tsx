import Tabs from "@/components/tabs/page"
import TabsController from "@/components/tabsController/page"
import { createContext } from "react"

function ComposerPage() {
  // const tabsProvider = createContext()
  return (
    <main className="px-40 mt-10">
        <Tabs />
        <TabsController />
    </main>
  )
}

export default ComposerPage