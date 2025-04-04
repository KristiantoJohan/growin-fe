"use client";

import { 
    Card, 
    CardContent,
} from "../ui/card";
import { ProjectOverviewSection } from "../section/projects-overview-generalinfo";

export function ProjectOverviewTabs() {
    return (
        <Card className="h-[full] flex flex-col bg-white/50">
            <CardContent className="p-7">
                <ProjectOverviewSection />        
            </CardContent>
        </Card>
    )
}