import { SidebarInset, SidebarProvider } from "@/components/components/ui/sidebar"
import { AppSidebar } from "@/components/components/app-sidebar"
import { Topbar } from "./Topbar"


export default function Layout({ children }: { children: React.ReactNode }) {


  return (
    <>
    <SidebarProvider >
    <AppSidebar variant="inset"  />
    <SidebarInset >
                <Topbar />
      <div className="flex flex-col gap-4 px-4 pt-16 pb-4">

        {children}
      </div>
    </SidebarInset>
</SidebarProvider>
</>
  )
}