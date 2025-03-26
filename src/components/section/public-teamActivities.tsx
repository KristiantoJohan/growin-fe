"use client"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { 
    Card, 
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "../ui/card"

export function TeamActivites() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Team Activities</CardTitle>
                <CardDescription>Recent team activities and task progress tracking.</CardDescription>
            </CardHeader>
            <CardContent className="min-w-0">
                <div className="space-y-7">
                    <div className='flex items-center'>
                            <Avatar className='h-9 w-9'>
                                <AvatarImage
                                    src='https://api.slingacademy.com/public/sample-users/1.png'
                                    alt='Avatar'
                                />
                                <AvatarFallback>OM</AvatarFallback>
                            </Avatar>
                            <div className='ml-4 space-y-1'>
                                <p className='text-sm font-medium leading-none'>Olivia Martin</p>
                                <p className='text-sm text-muted-foreground'>
                                    Adding new Job Done in Kanban
                                </p>
                            </div>
                         <div className='ml-auto font-normal text-sm text-gray-500'>10 minutes ago</div>
                    </div>
                    <div className="space-y-8">
                    <div className='flex items-center'>
                            <Avatar className='h-9 w-9'>
                                <AvatarImage
                                    src='https://api.slingacademy.com/public/sample-users/1.png'
                                    alt='Avatar'
                                />
                                <AvatarFallback>OM</AvatarFallback>
                            </Avatar>
                            <div className='ml-4 space-y-1'>
                                <p className='text-sm font-medium leading-none'>Olivia Martin</p>
                                <p className='text-sm text-muted-foreground'>
                                    Adding new Job Done in Kanban
                                </p>
                            </div>
                            <div className='ml-auto font-normal text-sm text-gray-500'>10 minutes ago</div>
                        </div>
                    </div>
                    <div className="space-y-8">
                    <div className='flex items-center'>
                            <Avatar className='h-9 w-9'>
                                <AvatarImage
                                    src='https://api.slingacademy.com/public/sample-users/1.png'
                                    alt='Avatar'
                                />
                                <AvatarFallback>OM</AvatarFallback>
                            </Avatar>
                            <div className='ml-4 space-y-1'>
                                <p className='text-sm font-medium leading-none'>Olivia Martin</p>
                                <p className='text-sm text-muted-foreground'>
                                    Adding new Job Done in Kanban
                                </p>
                            </div>
                            <div className='ml-auto font-normal text-sm text-gray-500'>10 minutes ago</div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className='flex items-center'>
                            <Avatar className='h-9 w-9'>
                                <AvatarImage
                                    src='https://api.slingacademy.com/public/sample-users/1.png'
                                    alt='Avatar'
                                />
                                <AvatarFallback>OM</AvatarFallback>
                            </Avatar>
                            <div className='ml-4 space-y-1'>
                                <p className='text-sm font-medium leading-none'>Olivia Martin</p>
                                <p className='text-sm text-muted-foreground'>
                                    Adding new Job Done in Kanban
                                </p>
                            </div>
                            <div className='ml-auto font-normal text-sm text-gray-500'>10 minutes ago</div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className='flex items-center'>
                            <Avatar className='h-9 w-9'>
                                <AvatarImage
                                    src='https://api.slingacademy.com/public/sample-users/1.png'
                                    alt='Avatar'
                                />
                                <AvatarFallback>OM</AvatarFallback>
                            </Avatar>
                            <div className='ml-4 space-y-1'>
                                <p className='text-sm font-medium leading-none'>Olivia Martin</p>
                                <p className='text-sm text-muted-foreground'>
                                    Adding new Job Done in Kanban
                                </p>
                            </div>
                            <div className='ml-auto font-normal text-sm text-gray-500'>10 minutes ago</div>
                        </div>
                    </div>
                </div>
            </CardContent>            
        </Card>
    );
}