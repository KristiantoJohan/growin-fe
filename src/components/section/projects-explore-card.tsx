"use client"

import Image from "next/image";
import { 
    Card, 
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { TrashIcon } from "lucide-react";

export function ProjectsExploreCard({
    status,
    productName,
    productCategory,
    keyword = []
}: {
    status: string,
    productName: string,
    productCategory: string,
    keyword?: string[]
}) {
    return (
        <Card className="w-full max-w-xs overflow-hidden rounded-lg shadow-sm group hover:shadow-md transition-shadow">
            <div className="relative h-48 bg-gray-100">
                <Image 
                    src="/images/project.png"
                    alt="Project"
                    fill 
                    className="object-cover rounded-t-lg transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                />  
                <div className="absolute -inset-1 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">                
                    <div className="absolute top-3 right-3">
                        <Button className="bg-white text-blue-950 p-2 rounded-lg hover:bg-gray-300 transition-colors ">
                            <TrashIcon className="h-24 w-24" /> {/* Ganti dengan ikon trash Anda */}
                        </Button>
                    </div>
                </div>
            </div>
            <CardHeader className="grid gap-1 p-4">
                <CardTitle>{productName}</CardTitle>
                <CardDescription>{productCategory}</CardDescription>
                <div className="flex flex-wrap gap-2 pt-3">
                    {keyword.map((keyword, index) => (
                    <Badge 
                        key={index} 
                        variant="outline"
                        className="text-xs font-normal text-black bg-slate-200"
                    >
                        {keyword}
                    </Badge>
                    ))}
                </div>
            </CardHeader>            
        </Card>
    )
}