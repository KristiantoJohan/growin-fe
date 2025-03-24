"use client"

import { 
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem 
} from "../ui/sidebar"

export function NavMenu({
    items,
    label,
}: {
    items: {
        title: string,
        url: string,
        icon: React.ElementType
    }[],
    label: string
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel> {label} </SidebarGroupLabel>
            <SidebarMenu>
            {items.map((item) => (
                <SidebarMenuItem>
                    <SidebarMenuButton tooltip={item.title} asChild>
                        <a href={item.url}>
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
        </SidebarGroup>        
    )
}