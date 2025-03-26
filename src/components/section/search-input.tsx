"use client"

import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchInput() {
    return (
        <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                placeholder="Search project..."
                className="h-9 w-full pl-10 text-sm font-normal shadow-none md:w-40 lg:w-64"
            />
        </div>
      );
}