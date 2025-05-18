import { SidebarInset, SidebarProvider } from "@/components/components/ui/sidebar"
import { SiteHeader } from "@/components/components/site-header"
import { AppSidebar } from "@/components/components/app-sidebar"



export default function Layout({ children }: { children: React.ReactNode }) {



return(   
    <SidebarProvider>
              <AppSidebar variant="inset" />
              <SidebarInset>
                        <SiteHeader />
                        {children}
                
</SidebarInset>
</SidebarProvider>
)



}