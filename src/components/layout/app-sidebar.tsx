"use client"

import * as React from "react"
import {
  Component,
  CircleGauge,
  FolderGit2,
  PackageSearch,
  Truck,
  MessageSquareQuote,
  SquareKanban,
  Settings,
  LogOut
} from "lucide-react"

import { NavHeader } from "../section/nav-header"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMenu } from "../section/nav-items"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  app: {
    name: "Growin",
    logo: Component,
    desc: "Corporate"
  },
  menu: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: CircleGauge
    },
    {
      title: "Projects",
      url: "/projects",
      icon: FolderGit2
    },
    {
      title: "Products",
      url: "#",
      icon: PackageSearch
    },
    {
      title: "Distributions",
      url: "#",
      icon: Truck
    },
    {
      title: "Feedback",
      url: "#",
      icon: MessageSquareQuote
    },
    {
      title: "Scrum",
      url: "#",
      icon: SquareKanban
    },
  ],
  account: [
    {
      title: "Settings",
      url: "#",
      icon: Settings
    },
    {
      title: "Sign Out",
      url: "#",
      icon: LogOut
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader app={data.app} />
      </SidebarHeader>
      <SidebarContent>
        <NavMenu items={data.menu} label="Menu"/>
      </SidebarContent>
      <SidebarFooter>
        <NavMenu items={data.account} label="Account"/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
