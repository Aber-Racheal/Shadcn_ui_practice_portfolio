'use client'
import React from "react";

import { Home, User, Folder, Book, Phone } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,

} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Home",
        url: "#homepage",
        icon: Home,
    },
    {
        title: "About Racheal",
        url: "#",
        icon: User,
    },
    {
        title: "Projects",
        url: "#projects",
        icon: Folder,
    },
    {
        title: "My Story",
        url: "#mystory",
        icon: Book,
    },
    {
        title: "Contact Me",
        url: "#",
        icon: Phone,
    },
]

export function AppSidebar() {
    return (
        <div className="bg-black">
            <Sidebar>
                <SidebarHeader />
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel className="font-bold text-[30px]">Welcome!</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter />
            </Sidebar>
        </div>

    )
}
