"use client"
import React, { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../ui/button";


const Projects = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const handleOnClick = () => {
            setDrawerIsOpen(true)
    }

    return (
        <div id="projects" className="bg-gradient-to-r from-[#0F968C] via-[#6DA5C0] to-[#294D61] w-full h-screen overflow-hidden text-white">

            <h1 className="text-[60px] font-bold text-center m-[10px]">My Projects Are Like Pizza – Always Better When Shared!</h1>
            <Carousel className="w-full max-w-sm ml-[450px] mt-[100px]">
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card onClick={handleOnClick}>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-2xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <Drawer open={drawerIsOpen} onClose={() => setDrawerIsOpen(false)}>
                <DrawerTrigger></DrawerTrigger>
                <DrawerContent className="w-[600px] ml-[500px] bg-[#0F968C]">
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <div className="flex gap-10">
                        <Button className="w-[70px]">Design</Button>
                        <Button className="w-[70px]">GitHub</Button>
                        <Button className="w-[70px]">Product</Button>
                        </div>
                        <DrawerClose>
                            <Button variant="outline" onClick={() => setDrawerIsOpen(false)}>Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </div>
    )
}
export default Projects;