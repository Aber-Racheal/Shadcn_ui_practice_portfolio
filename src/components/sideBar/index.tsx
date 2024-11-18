'use client'
import React, { useState } from "react";
import HomePage from "../homePage";
import MyStory from "../aboutMe/myStory";
import Projects from "../projects";
import Contacts from "../contacts";
import Hobbies from "../aboutMe/hobbies";

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
    SidebarMenuSub,
    SidebarMenuSubItem,

} from "@/components/ui/sidebar"

import { CollapsibleTrigger } from "@radix-ui/react-collapsible";

import { CollapsibleContent } from "@radix-ui/react-collapsible";

import { Collapsible } from "@radix-ui/react-collapsible";



// Type definitions for sidebar items
interface SubItem {
    title: string;
    url: string;
    target?: string; 
  }
  
  interface SidebarItem {
    title: string;
    url: string;
    icon: React.ComponentType;
    content?: React.JSX.Element;
    subItems?: SubItem[]; 
  }

  
  
const items = [
    {
        title: "Home",
        url: "#homepage",
        icon: Home,
        subItems: [],
        content: <HomePage />
    },
    {
        title: "About Racheal",
        icon: User,
        subItems: [
            { title: "What Racheal Does", url: "#iDo" },
            { title: "Hobbies", url: "#hobbies" }
        ],
        content: <Hobbies/> 
    },
    {
        title: "Projects",
        icon: Folder,
        subItems: [
            { title: "Project 1", url: "#project1" },
            { title: "Project 2", url: "#project2" },
            { title: "Project 3", url: "#project3" }
        ],
        content: <Projects/>
    },
    {
        title: "My Story",
        icon: Book,
        subItems: [],
        content: <MyStory />
    },
    {
        title: "Contact Me",
        icon: Phone,
        subItems: [
            { title: "LinkedIn", url: "#contacts", target: "_blank" },
            { title: "GitHub",url: "#contacts", target: "_blank" },
            { title: "Email",url: "#contacts"},
            { title: "Phone", url: "#contacts" },
            { title: "Twitter", url: "#contacts" }
        ],
        url: "#contacts",
        content: < Contacts/>
    },
]

export function AppSidebar() {

    const [activeContent, setActiveContent] = useState<React.JSX.Element | null>(<HomePage />);

    const handleMenuItemClick = (content: React.JSX.Element | null) => {
        setActiveContent(content);
    };

    return (
        <div className="flex">
            <Sidebar>
                <SidebarContent className="bg-[#05161A] text-[#6FD]">
                    <SidebarGroup>
                        <SidebarGroupLabel className="font-bold text-[30px] text-white mt-[15px]">Welcome!</SidebarGroupLabel>
                        <SidebarGroupContent className="mt-[15px]">
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <Collapsible className="group/collapsible">
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton asChild>
                                                    <a href={item.url} className="mt-[15px] text-[30px] flex items-center"
                                                        onClick={() => handleMenuItemClick(item.content || null)}>
                                                        <item.icon />
                                                        <span className="ml-2">{item.title}</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>

                                            {/* Collapsible Content */}
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {/* Render sub-menu items */}
                                                    {item.subItems && item.subItems.length > 0 && item.subItems.map((subItem, index) => (
                                                        <SidebarMenuSubItem key={index}>
                                                            <a
                                                                href={subItem.url}
                                                                target={subItem.target || "_self"}
                                                                className="text-white block mt-2"
                                                            >
                                                                {subItem.title}
                                                            </a>
                                                        </SidebarMenuSubItem>
                                                    ))}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <div className="flex-1 overflow-auto">{activeContent}</div>
        </div>
    );
}
