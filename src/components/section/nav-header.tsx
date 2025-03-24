"use client"

import { 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem, 
} from "@/components/ui/sidebar";

export function NavHeader({
    app,
}: {
    app: {
        name: string,
        logo: React.ElementType,
        desc: string
    }
}) {
    return (
    <SidebarMenu>
        <SidebarMenuItem>
            <SidebarMenuButton asChild
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
                <a href="#">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <app.logo className="size-4" />
                    </div>
                        <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-semibold">{app.name}</span>
                        <span className="truncate text-xs">{app.desc}</span>
                    </div>
                </a>
            </SidebarMenuButton>
        </SidebarMenuItem>
    </SidebarMenu>
    )
}