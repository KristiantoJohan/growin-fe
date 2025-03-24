import { AppSidebar } from "@/components/layout/app-sidebar";
import PageContainer from "@/components/layout/page-containter";
import { DashboardCard } from "@/components/section/dashboard-card";
import { DatePickerWithRange } from "@/components/section/date-range";
import { LineChart } from "@/components/section/pm-line-chart";
import { RadialChart } from "@/components/section/pm-radial-chart";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { 
  Download,
  DollarSign,
  Percent,
  Banknote,
  Truck
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
                    <Breadcrumb>
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
                    
                    <div className="ml-auto flex items-center gap-4">     
                        <DatePickerWithRange/>                   
                        <Button className="h-8 bg-blue-950"> 
                            <Download />
                            Download 
                        </Button>
                    </div>                    
                </div>
            </header>
            <PageContainer>
                <div className='flex flex-1 flex-col space-y-2'>
                    <div className='flex items-center justify-between space-y-2'>
                        <h2 className='text-2xl font-bold tracking-tight'>
                            Overview
                        </h2>
                    </div>
                    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                        <DashboardCard 
                            title="Revenue"
                            value="$45,231.89"
                            desc="+20.1% from last month"
                            icon={DollarSign}>                        
                        </DashboardCard>
                        <DashboardCard 
                            title="Sales"
                            value="+12,234"
                            desc="+19% from last month"
                            icon={Percent}>                        
                        </DashboardCard>
                        <DashboardCard 
                            title="Profit"
                            value="$15,614.73"
                            desc="+5.1% from last month"
                            icon={Banknote}>                        
                        </DashboardCard>
                        <DashboardCard 
                            title="Distributions"
                            value="+18,571"
                            desc="+10.0% from last month"
                            icon={Truck}>                        
                        </DashboardCard>
                    </div>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <div>
                      <LineChart />
                    </div>
                    <div>
                      <RadialChart />
                    </div>
                  </div>
                </div> 
            </PageContainer>
            </SidebarInset>
        </SidebarProvider>
    );
}