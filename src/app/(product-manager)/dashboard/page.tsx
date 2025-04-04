import { AppSidebar } from "@/components/layout/app-sidebar";
import PageContainer from "@/components/layout/page-containter";
import { DashboardCard } from "@/components/section/dashboard-card";
import { DatePickerWithRange } from "@/components/section/date-range";
import { BestSellerProductChart } from "@/components/section/public-bestSellerProduct-chart";
import { ProductManagementChart } from "@/components/section/public-productManagement-chart";
import { ProjectionsChart } from "@/components/section/public-projections-chart";
import { TeamActivites } from "@/components/section/public-teamActivities";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { 
  Download,
  DollarSign,
  UsersRound,
  Package,
  Smile
} from "lucide-react";

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
                            Dashboard
                        </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                        <BreadcrumbPage>Overview</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                    </Breadcrumb>
                    
                    <div className="ml-auto flex items-center gap-4 md:gap-6">
                        <DatePickerWithRange/>                   
                        <Button className="hidden md:flex h-8 bg-blue-950 "> 
                            <Download />
                            Download 
                        </Button>
                    </div>                    
                </div>
            </header>
            <PageContainer>
                <div className='flex flex-1 flex-col space-y-2 pb-4'>
                    <div className='flex items-center justify-between space-y-2 pb-3'>
                        <h2 className='text-2xl font-bold tracking-wide'>
                            Overview
                        </h2>
                    </div>
                    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                        <DashboardCard
                            title="Revenue"
                            unit="$"
                            value="45,231.89"
                            desc="+20.1% from last month"
                            icon={DollarSign}>                        
                        </DashboardCard>
                        <DashboardCard 
                            title="Products"
                            unit=""
                            value="150"
                            desc="+10 products from last month"
                            icon={Package}>                        
                        </DashboardCard>
                        <DashboardCard 
                            title="Active User"
                            unit=""
                            value="54,788"
                            desc="+15.1% from last month"
                            icon={UsersRound}>                        
                        </DashboardCard>
                        <DashboardCard 
                            title="Satisfaction"
                            unit=""
                            value="4.7"
                            desc="Customer satisfaction (CSAT): 4.7/5"
                            icon={Smile}>                        
                        </DashboardCard>
                    </div>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <div className="h-full">
                            <ProductManagementChart />
                        </div>
                        <div className="h-full">
                            <ProjectionsChart />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <div className="h-full">
                            <BestSellerProductChart />
                        </div>
                        <div className="h-full">
                            <TeamActivites />
                        </div>
                    </div>
                </div> 
            </PageContainer>
            </SidebarInset>
        </SidebarProvider>
    );
}