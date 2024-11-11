"use client"

import React, { ReactNode } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import Link from "next/link";



interface SidebarProps {
    children: ReactNode; // Make sure Sidebar can accept children
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <div className="fixed flex flex-col gap-[40px] w-[300px] min-w-[300px] border-r min-h-screen p-4 text-[#69A5C0] bg-[#05161A]">
            <div>
                <NavigationMenu>
                    <NavigationMenuList className="flex flex-col">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>


                    <NavigationMenuItem>
                        <Link href="/aboutme" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About Me
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenu>
            </div>


        </div>
    )
}

export default Sidebar;