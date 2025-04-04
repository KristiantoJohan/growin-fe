import { AppSidebar } from "@/components/layout/app-sidebar";
import PageContainer from "@/components/layout/page-containter";
import { ProjectsExploreCard } from "@/components/section/projects-explore-card";
import SearchInput from "@/components/section/search-input";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { 
  Plus
} from "lucide-react";
import Link from "next/link";

export default function Page() {
    
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
                            <BreadcrumbLink href="#">
                                Projects
                            </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                            <BreadcrumbPage>Explore</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                        </Breadcrumb>   

                        <div className="ml-auto flex items-center gap-4 md:gap-4">     
                            <SearchInput />
                        </div>                              
                    </div>
                </header>
                <PageContainer>
                    <div className='flex flex-1 flex-col space-y-2 pb-5'>
                        <div className='flex items-center justify-between space-y-2'>
                            <h2 className='text-2xl font-bold tracking-wide'>
                                Explore
                            </h2>
                            <Button className="h-8 bg-blue-950">
                                <Link href="/projects/create" className="flex items-center gap-2">
                                    <Plus/>
                                    <span> New Project </span> 
                                </Link>
                            </Button>
                        </div>
                        <div className="pt-4 grid gap-4 justify-center md:grid-cols-2 lg:grid-cols-4">
                            <ProjectsExploreCard 
                                productName="TensorFlow"
                                productCategory="Software"
                                status="Finished"
                                keyword={["research", "development", "testing"]}
                            />
                            <ProjectsExploreCard 
                                productName="TensorFlow"
                                productCategory="Software"
                                status="Finished"
                                keyword={["research", "development", "testing"]}
                            />
                            <ProjectsExploreCard 
                                productName="TensorFlow"
                                productCategory="Software"
                                status="Finished"
                                keyword={["research", "development", "testing"]}
                            />
                            <ProjectsExploreCard 
                                productName="TensorFlow"
                                productCategory="Software"
                                status="Finished"
                                keyword={["research", "development", "testing"]}
                            />
                            <ProjectsExploreCard 
                                productName="TensorFlow"
                                productCategory="Software"
                                status="Finished"
                                keyword={["research", "development", "testing"]}
                            />
                        </div>
                    </div>
                </PageContainer>
            </SidebarInset>
        </SidebarProvider>
    );
}