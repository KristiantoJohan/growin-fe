"use client";

import { AppSidebar } from "@/components/layout/app-sidebar";
import PageContainer from "@/components/layout/page-containter";
import { ProjectMarketingPricingTabs } from "@/components/section/projects-marketingPricing-tab";
import { ProjectOperatingModelTabs } from "@/components/section/projects-operatingModel-tab";
import { ProjectOverviewTabs } from "@/components/layout/projects-overview-tab";
import { ProjectStpdTabs } from "@/components/section/projects-stpd-tab";
import { ProjectUseCaseTabs } from "@/components/section/projects-useCase-tab";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@radix-ui/react-separator";
import { TabsContent } from "@radix-ui/react-tabs";
import { Eye } from "lucide-react";

export default function page() {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b bg-sidebar">
                    <div className="flex items-center gap-2 px-4 w-full">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb className="hidden md:block">
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/projects">
                                    Projects
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/projects">
                                    Explore
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block"/>
                            <BreadcrumbPage>New Project</BreadcrumbPage>
                        </BreadcrumbList>
                        </Breadcrumb>                                           
                    </div>
                </header>
                <PageContainer>
                    <div className='flex flex-1 flex-col space-y-2 pb-5'>
                        <div className='flex items-center justify-between space-y-2'>
                            <h2 className='text-2xl font-bold tracking-wide'>
                                New Project
                            </h2>                            
                        </div>                                                 
                        <Tabs defaultValue="overview">
                            <div className="pt-4 flex items-center justify-between space-y-2 pb-4">   
                                <TabsList className="grid grid-cols-5">
                                    <TabsTrigger value="overview">Product Overview</TabsTrigger>
                                    <TabsTrigger value="stpd">Segmenting Targetting</TabsTrigger>
                                    <TabsTrigger value="operatingModel">Operating Model</TabsTrigger>
                                    <TabsTrigger value="useCase">Use Case</TabsTrigger>
                                    <TabsTrigger value="marketingPricing">Marketing & Pricing</TabsTrigger>
                                </TabsList>
                                <Button className="h-8 bg-blue-950">
                                    <Eye />
                                    Preview
                                </Button>
                            </div> 
                            <TabsContent value="overview">
                                <ProjectOverviewTabs />
                            </TabsContent>
                            <TabsContent value="stpd">
                                <ProjectStpdTabs />
                            </TabsContent>
                            <TabsContent value="operatingModel">
                                <ProjectOperatingModelTabs />
                            </TabsContent>
                            <TabsContent value="useCase">
                                <ProjectUseCaseTabs />
                            </TabsContent>
                            <TabsContent value="marketingPricing">
                                <ProjectMarketingPricingTabs />
                            </TabsContent>
                        </Tabs>
                            
                                               
                    </div>
                </PageContainer>
            </SidebarInset>
        </SidebarProvider>
    )
}