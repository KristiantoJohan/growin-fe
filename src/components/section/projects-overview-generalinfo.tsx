import { 
    Image, 
    Check, 
    ChevronsUpDown, 
    Save, 
    TriangleAlert, 
    X, 
    CircleCheck 
} from "lucide-react";
import { Button } from "../ui/button";
import { 
    Card,
    CardContent
} from "../ui/card";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipContent, 
    TooltipTrigger 
} from "../ui/tooltip";
import {
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel 
} from "../ui/form";
import { 
    ProjectOverviewValid,
    TProjectOverviewValid 
} from "@/validators/projects-valid";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFileUpload } from "@/hooks/use-file-upload";
import { Textarea } from "../ui/textarea";
import { PRODUCT_CATEGORY } from "@/constants/product-category";
import { PRODUCT_CURRENT_STAGE } from "@/constants/product-current-stage";
import { PRODUCT_PLATFORM } from "@/constants/product-platform";
import { 
    Popover, 
    PopoverContent 
} from "../ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { 
    Command, 
    CommandEmpty, 
    CommandGroup, 
    CommandItem, 
    CommandList
} from "../ui/command";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { Toaster } from "../ui/toaster";

export function ProjectOverviewSection() {    
    /**
     *  Validating the general information input
     */
    const projectOverviewForm = useForm<TProjectOverviewValid>({
        resolver: zodResolver(ProjectOverviewValid),
    });

    const { handleSubmit, setValue, watch, formState: { errors }, } = projectOverviewForm;

    const {
        fileInputRef: logoInputRef,
        previewUrl: logoPreview,
        handleFileChange: handleLogoChange,
        handleRemoveFile: removeLogo
    } = useFileUpload({
        name: "productLogo",
        setValue,
        watch,
        acceptedType: "image/",
        invalidTypeMessage: "Please upload an image (JPEG, PNG, etc)"
    });
      
    const {
        fileInputRef: docInputRef,
        previewUrl: docPreview,
        handleFileChange: handleDocChange,
        handleRemoveFile: removeDoc
    } = useFileUpload({
        name: "complienceDocument",
        setValue,
        watch,
        acceptedType: "application/pdf",
        invalidTypeMessage: "Please upload a valid PDF document"
    });
    
    /**
     *  Hook for gallery
     */
    const galleryUploadHandlers = [...Array(5)].map((_, index) =>
        useFileUpload({
            name: `gallery.${index}`,
            setValue,
            watch,
            acceptedType: "image/",
            invalidTypeMessage: "Please upload a valid image"
        })
    );

    const hustler = parseInt(watch("hustler") || "0", 10);
    const hipster = parseInt(watch("hipster") || "0", 10);
    const hacker = parseInt(watch("hacker") || "0", 10);

    // Update total setiap ada perubahan di input
    useEffect(() => {
        const total: number = (hustler || 0) + (hipster || 0) + (hacker || 0);
        setValue("totalTeamMember", total);
    }, [hustler, hipster, hacker, setValue]);

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            toast({
                variant: "destructive",
                title: (
                    <div className="flex items-center gap-2">
                        <TriangleAlert className="w-5 h-5 text-white" />
                        <span>Check your inputs</span>
                    </div>
                ) as unknown as string,
                description: "Please fill in all required fields correctly.",
            });
        }
    }, [errors, toast]);

    const onSubmit = (data: any) => {
        toast({
            variant: "default",
            title: (
                <div className="flex items-center gap-2">
                    <CircleCheck className="w-5 h-5 text-black" />
                    <span>Success! Data submitted</span>
                </div>    
            ) as unknown as string,
            description: "Your information has been saved successfully.",
        });
    };

    return (
        <div>            
            <Form {...projectOverviewForm}>                
                <form onSubmit={projectOverviewForm.handleSubmit(onSubmit)}>
                    <div className="pb-7">
                        <p className="scroll-m-20 text-lg tracking-wide">General Information</p>
                    </div>
                    <div className="flex flex-row space-x-10 pb-5">
                        {/* Form field for product logo */}
                        <div className="flex flex-col max-w-sm gap-1.5">
                            <FormLabel className={cn(errors.productLogo && "text-red-500")}>Product logo*</FormLabel>
                
                            {/* Hidden file input */}
                            <Input
                                id="logo"
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                ref={logoInputRef}
                                className="hidden"
                            />
                            
                            {/* Upload card */}
                            <Card
                                className={cn(
                                    "border-2 border-dashed cursor-pointer hover:border-gray-300 transition-colors w-[183px] h-[183px]",
                                    logoPreview && "border-solid"
                                )}
                                onClick={() => logoInputRef.current?.click()}
                            >
                                <CardContent className="flex flex-col items-center justify-center p-6 w-[183px] h-[183px]">
                                    {logoPreview ? (
                                        <div className="relative w-full">
                                        <img
                                            src={logoPreview}
                                            alt="Preview"
                                            className="rounded-md object-contain max-h-60 w-full"
                                        />
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="absolute top-2 right-2 rounded-full bg-background/80 hover:bg-background"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                removeLogo();
                                            }}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                        </div>
                                    ) : (
                                        <>
                                            <Image className="h-8 w-8 mb-2 text-gray-300" />
                                        </>
                                    )}
                                </CardContent>
                            </Card>
                            
                            {/* File info */}
                            {logoPreview && logoInputRef.current?.files?.[0] && (
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                                            Selected: {logoInputRef.current.files[0].name}
                                        </p>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{logoInputRef.current.files[0].name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            )}

                            {/* {errors.productLogo && (
                                <p className="text-red-500 text-sm">{errors.productLogo.message}</p>
                            )} */}
                        </div>
                        
                        <div className="flex flex-1 flex-col space-y-2 self-start">
                            {/* Form field for product name */}
                            <FormField
                                control={projectOverviewForm.control}
                                name="productName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Product name* </FormLabel>
                                        <FormControl>
                                            <Input className="shadow-sm text-gray-600 border-gray-300 bg-white" { ...field }/>
                                        </FormControl>
                                    </FormItem>                       
                                )}
                            />

                            {/* Form field for product tagline */}
                            <FormField
                                control={projectOverviewForm.control}
                                name="tagline"
                                render={({ field }) => (                                
                                    <FormItem>
                                        <FormLabel> Tagline* </FormLabel>
                                        <FormControl>
                                            <Input className="shadow-sm text-gray-600 border-gray-300 bg-white" { ...field }/>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Form field for product description */}
                            <FormField
                                control={projectOverviewForm.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Description* </FormLabel>
                                        <FormControl>
                                            <Textarea className="resize-none shadow-sm text-gray-600 border-gray-300 bg-white h-[114px]" { ...field }/>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        
                        <div className="flex flex-1 flex-col space-y-2 self-start">
                            {/* Form field for product category */}
                            <FormField
                                control={projectOverviewForm.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem> 
                                    <FormLabel>Category*</FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            className={cn(
                                                            "w-full justify-between text-gray-600 border-gray-300 h-[36.7px]", // Tambahkan h-10 untuk match height input
                                                            !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value
                                                            ? PRODUCT_CATEGORY.find(
                                                                (product) => product.value === field.value
                                                                )?.label
                                                            : "Select category"}
                                                            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-[200px] p-0" align="start">
                                                    <Command>
                                                        <CommandList>
                                                            <CommandEmpty>No category found.</CommandEmpty>
                                                            <CommandGroup>
                                                                {PRODUCT_CATEGORY.map((product) => (
                                                                    <CommandItem
                                                                    value={product.label}
                                                                    key={product.value}
                                                                    onSelect={() => {
                                                                        projectOverviewForm.setValue("category", product.value, {
                                                                            shouldValidate: true,
                                                                            shouldDirty: true
                                                                        })
                                                                    }}
                                                                    >
                                                                    {product.label}
                                                                    <Check
                                                                        className={cn(
                                                                        "ml-auto",
                                                                        product.value === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                        )}
                                                                    />
                                                                    </CommandItem>
                                                                ))}
                                                            </CommandGroup>
                                                        </CommandList>
                                                    </Command>
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Form field for product current stage */}
                            <FormField
                                control={projectOverviewForm.control}
                                name="currentStage"
                                render={({ field }) => (
                                    <FormItem> {/* Hapus flex flex-col space-y-3 di sini */}
                                    <FormLabel>Current stage*</FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            className={cn(
                                                            "w-full justify-between text-gray-600 border-gray-300 h-[36.7px]", // Tambahkan h-10 untuk match height input
                                                            !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value
                                                            ? PRODUCT_CURRENT_STAGE.find(
                                                                (stage) => stage.value === field.value
                                                                )?.label
                                                            : "Select stage"}
                                                            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-[200px] p-0" align="start">
                                                    <Command>
                                                        <CommandList>
                                                            <CommandEmpty>No stage found.</CommandEmpty>
                                                            <CommandGroup>
                                                                {PRODUCT_CURRENT_STAGE.map((stage) => (
                                                                    <CommandItem
                                                                    value={stage.label}
                                                                    key={stage.value}
                                                                    onSelect={() => {
                                                                        projectOverviewForm.setValue("currentStage", stage.value, {
                                                                            shouldValidate: true,
                                                                            shouldDirty: true
                                                                        })
                                                                    }}
                                                                    >
                                                                    {stage.label}
                                                                    <Check
                                                                        className={cn(
                                                                        "ml-auto",
                                                                        stage.value === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                        )}
                                                                    />
                                                                    </CommandItem>
                                                                ))}
                                                            </CommandGroup>
                                                        </CommandList>
                                                    </Command>
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Form field for product platform */}
                            <FormField
                                control={projectOverviewForm.control}
                                name="platform"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Platform*</FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            className={cn(
                                                                "w-full justify-between text-gray-600 border-gray-300 h-[36.7px]", // Tambahkan h-10 untuk match height input
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value
                                                            ? PRODUCT_PLATFORM.find(
                                                                (platform) => platform.value === field.value
                                                                )?.label
                                                            : "Select stage"}
                                                            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-[200px] p-0" align="start">
                                                    <Command>
                                                        <CommandList>
                                                            <CommandEmpty>No stage found.</CommandEmpty>
                                                            <CommandGroup>
                                                                {PRODUCT_PLATFORM.map((platform) => (
                                                                    <CommandItem
                                                                    value={platform.label}
                                                                    key={platform.value}
                                                                    onSelect={() => {
                                                                        projectOverviewForm.setValue("platform", platform.value, {
                                                                            shouldValidate: true,
                                                                            shouldDirty: true
                                                                        })
                                                                    }}
                                                                    >
                                                                    {platform.label}
                                                                    <Check
                                                                        className={cn(
                                                                        "ml-auto",
                                                                        platform.value === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                        )}
                                                                    />
                                                                    </CommandItem>
                                                                ))}
                                                            </CommandGroup>
                                                        </CommandList>
                                                    </Command>
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Form field for product description */}
                            <FormField
                                control={projectOverviewForm.control}
                                name="websiteUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Website URL* </FormLabel>
                                        <FormControl>
                                            <Input className="shadow-sm text-gray-600 border-gray-300 bg-white" { ...field }/>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2 pb-5">
                        <FormLabel>Product gallery (Max. 5)</FormLabel>
                        <div className="flex flex-row ">
                            {galleryUploadHandlers.map(({ fileInputRef, previewUrl, selectedFile, handleFileChange, handleRemoveFile }, index) => (
                                <div key={index} className="flex flex-row pb-5 space-x-2">
                                    {/* Hidden file input */}
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        ref={fileInputRef}
                                        className="hidden"
                                    />
                                    
                                    {/* Upload card */}
                                    <Card
                                        className={cn(
                                            "border-2 border-dashed cursor-pointer hover:border-gray-300 transition-colors w-[95px] h-[95px]",
                                            previewUrl && "border-solid"
                                        )}
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        <CardContent className="flex flex-col items-center justify-center p-2 w-[95px] h-[95px]">
                                            {previewUrl ? (
                                                <div className="flex items-center justify-center relative w-full">
                                                    <img
                                                        src={previewUrl}
                                                        alt="Preview"
                                                        className="rounded-md object-fill max-h-80"
                                                    />
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="absolute rounded-full bg-background/80 hover:bg-background"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleRemoveFile();
                                                        }}
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ) : (
                                                <>
                                                    <Image className="h-8 w-8 mb-2 text-gray-300" />
                                                </>
                                            )}
                                        </CardContent>
                                    </Card>                                    
                                </div>
                            ))}
                        </div>                        
                    </div>                    
                    <div className="pt-8 pb-10">
                        <div className="pb-7">
                            <p className="scroll-m-20 text-lg tracking-wide">Team Highlight</p>
                        </div>                        
                        <div className="flex flex-row space-x-10">
                            <div className="flex flex-1 flex-col space-y-2 self-start">
                                {/* Form field for product name */}
                                <FormField
                                    control={projectOverviewForm.control}
                                    name="productName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Team in charge* </FormLabel>
                                            <FormControl>
                                                <Input className="shadow-sm text-gray-600 border-gray-300 bg-white" { ...field }/>
                                            </FormControl>
                                        </FormItem>                       
                                    )}
                                />

                                {/* Form field for product tagline */}
                                <FormField
                                    control={projectOverviewForm.control}
                                    name="totalTeamMember"
                                    render={({ field }) => (                                
                                        <FormItem>
                                            <FormLabel> Team member total </FormLabel>
                                            <FormControl>
                                                <Input className="shadow-sm text-gray-600 border-gray-300 bg-white" { ...field } disabled />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                
                                <div className="flex flex-1 flex-row gap-4">
                                    <div className="flex flex-1 flex-col space-y-2 self-start">
                                        {/* Form field for product description */}
                                        <FormField
                                            control={projectOverviewForm.control}
                                            name="hustler"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel> Hustler* </FormLabel>
                                                    <FormControl>
                                                        <Input 
                                                            type="number" 
                                                            className="resize-none shadow-sm text-gray-600 border-gray-300 bg-white" 
                                                            { ...field }
                                                            min="0"         // Membatasi input minimal 0
                                                            step="1"        // Hanya memungkinkan bilangan bulat
                                                            defaultValue="0"  // Nilai awal adalah 0
                                                            onChange={(e) => {
                                                                const value = e.target.value;
                                                                if (/^\d+$/.test(value) || value === "") {
                                                                    field.onChange(value);
                                                                }
                                                            }}
                                                            onBlur={(e) => {
                                                                if (!e.target.value || parseInt(e.target.value) < 0) {
                                                                    field.onChange("0"); // Jika kosong atau negatif, set ke "0"
                                                                }
                                                            }}                                                            
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col space-y-2 self-start">
                                        {/* Form field for product description */}
                                        <FormField
                                            control={projectOverviewForm.control}
                                            name="hipster"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel> Hipster* </FormLabel>
                                                    <FormControl>
                                                        <Input 
                                                            type="number" 
                                                            className="resize-none shadow-sm text-gray-600 border-gray-300 bg-white" 
                                                            { ...field }
                                                            min="0"         // Membatasi input minimal 0
                                                            step="1"        // Hanya memungkinkan bilangan bulat
                                                            defaultValue="0"  // Nilai awal adalah 0
                                                            onChange={(e) => {
                                                                const value = e.target.value;
                                                                if (/^\d+$/.test(value) || value === "") {
                                                                    field.onChange(value);
                                                                }
                                                            }}
                                                            onBlur={(e) => {
                                                                if (!e.target.value || parseInt(e.target.value) < 0) {
                                                                    field.onChange("0"); // Jika kosong atau negatif, set ke "0"
                                                                }
                                                            }}  
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    
                                    <div className="flex flex-1 flex-col space-y-2 self-start">
                                        {/* Form field for product description */}
                                        <FormField
                                            control={projectOverviewForm.control}
                                            name="hacker"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel> Hacker* </FormLabel>
                                                    <FormControl>
                                                        <Input 
                                                            type="number" 
                                                            className="resize-none shadow-sm text-gray-600 border-gray-300 bg-white" 
                                                            { ...field }
                                                            min="0"         // Membatasi input minimal 0
                                                            step="1"        // Hanya memungkinkan bilangan bulat
                                                            defaultValue="0"  // Nilai awal adalah 0
                                                            onChange={(e) => {
                                                                const value = e.target.value;
                                                                if (/^\d+$/.test(value) || value === "") {
                                                                    field.onChange(value);
                                                                }
                                                            }}
                                                            onBlur={(e) => {
                                                                if (!e.target.value || parseInt(e.target.value) < 0) {
                                                                    field.onChange("0"); // Jika kosong atau negatif, set ke "0"
                                                                }
                                                            }}  
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>                                
                            </div>                            
                            <div className="flex flex-1 flex-col space-y-2 self-start">
                                {/* Form field for product name */}
                                <FormField
                                    control={projectOverviewForm.control}
                                    name="teamLeader"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Team leader* </FormLabel>
                                            <FormControl>
                                                <Input className="shadow-sm text-gray-600 border-gray-300 bg-white" { ...field }/>
                                            </FormControl>
                                        </FormItem>                       
                                    )}
                                />

                                {/* Form field for team leader email */}
                                <FormField
                                    control={projectOverviewForm.control}
                                    name="email"
                                    render={({ field }) => (                                
                                        <FormItem>
                                            <FormLabel> Email* </FormLabel>
                                            <FormControl>
                                                <Input className="shadow-sm text-gray-600 border-gray-300 bg-white" { ...field }/>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                {/* Form field for team leader phone */}
                                <FormField
                                    control={projectOverviewForm.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Phone* </FormLabel>
                                            <FormControl>
                                                <Input className="shadow-sm text-gray-600 border-gray-300 bg-white" { ...field }/>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>  
                        </div>
                    </div>
                    <div className="pt-8 pb-10">
                        <div className="pb-7">
                            <p className="scroll-m-20 text-lg tracking-wide">Product Services</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                                <FormField
                                    control={projectOverviewForm.control}
                                    name="productVision"
                                    render={({ field }) => (                                
                                        <FormItem>
                                            <FormLabel> Vision* </FormLabel>
                                            <FormControl>
                                                <Textarea className="h-[114px] resize-none shadow-sm text-gray-600 border-gray-300 bg-white" { ...field }/>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={projectOverviewForm.control}
                                    name="productMission"
                                    render={({ field }) => (                                
                                        <FormItem>
                                            <FormLabel> Mission* </FormLabel>
                                            <FormControl>
                                                <Textarea className="h-[114px] resize-none shadow-sm text-gray-600 border-gray-300 bg-white" { ...field }/>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                        </div>
                    </div>
                    <div className="pt-8 pb-10">
                        <div className="pb-7">
                            <p className="scroll-m-20 text-lg tracking-wide">Complience Documents</p>
                        </div>
                        <div className="flex flex-row space-x-10">
                            <div className="flex flex-1 flex-col space-y-2 self-start gap-2">

                                {/* legam complience input */}
                                <FormField
                                    control={projectOverviewForm.control}
                                    name="legalComplience"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Legal complience </FormLabel>
                                            <FormControl>
                                            <Input
                                                id="legalComplience"
                                                type="file"
                                                accept="application/pdf"
                                                onChange={handleDocChange}
                                                ref={logoInputRef}
                                                className="bg-white"
                                            />
                                            </FormControl>
                                        </FormItem>
                                    )}                                    
                                />

                                {/* Privacy policy input */}
                                <FormField
                                    control={projectOverviewForm.control}
                                    name="privacyPolicy"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Privacy policy </FormLabel>
                                            <FormControl>
                                            <Input
                                                id="privacyPolicy"
                                                type="file"
                                                accept="application/pdf"
                                                onChange={handleDocChange}
                                                ref={logoInputRef}
                                                className="bg-white"
                                            />
                                            </FormControl>
                                        </FormItem>
                                    )}                                    
                                />

                                {/* Regulatory approval input */}
                                <FormField
                                    control={projectOverviewForm.control}
                                    name="regulatoryApproval"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Regulatory approval </FormLabel>
                                            <FormControl>
                                            <Input
                                                id="regulatoryApproval"
                                                type="file"
                                                accept="application/pdf"
                                                onChange={handleDocChange}
                                                ref={logoInputRef}
                                                className="bg-white"
                                            />
                                            </FormControl>
                                        </FormItem>
                                    )}                                    
                                />
                            </div>

                            <div className="flex flex-1 flex-col space-y-2 self-start gap-2">
                                {/* Service level agreement input */}
                                <FormField
                                    control={projectOverviewForm.control}
                                    name="serviceLevelAgreement"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Service level agreement </FormLabel>
                                            <FormControl>
                                            <Input
                                                id="serviceLevelAgreement"
                                                type="file"
                                                accept="application/pdf"
                                                onChange={handleDocChange}
                                                ref={logoInputRef}
                                            />
                                            </FormControl>
                                        </FormItem>
                                    )}                                    
                                />

                                {/* Data processing agreement input */}
                                <FormField
                                    control={projectOverviewForm.control}
                                    name="dataProcessingAgreement"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Data processing agreement </FormLabel>
                                            <FormControl>
                                            <Input
                                                id="dataProcessingAgreement"
                                                type="file"
                                                accept="application/pdf"
                                                onChange={handleDocChange}
                                                ref={logoInputRef}
                                            />
                                            </FormControl>
                                        </FormItem>
                                    )}                                    
                                />

                                {/* Third-party complience input */}
                                <FormField
                                    control={projectOverviewForm.control}
                                    name="thirdPartyComplience"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Third-party complience </FormLabel>
                                            <FormControl>
                                            <Input
                                                id="thirdPartyComplience"
                                                type="file"
                                                accept="application/pdf"
                                                onChange={handleDocChange}
                                                ref={logoInputRef}
                                            />
                                            </FormControl>
                                        </FormItem>
                                    )}                                    
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row pb-5 justify-end">
                        <Button type="submit" className="h-8 bg-blue-950">
                            <Save />
                            Save
                        </Button>
                    </div>
                    <Toaster />
                </form>
            </Form>            
        </div>
    );
}