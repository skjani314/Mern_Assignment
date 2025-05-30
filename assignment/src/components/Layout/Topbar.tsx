// components/topbar.tsx
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/components/ui/dropdown-menu";
import { SidebarTrigger } from "../components/ui/sidebar";
import { ModeToggle } from "../Theme/model-toggle";




export const Topbar = () => {
  return (
    <header className="flex items-center justify-between px-4 h-16 border-b fixed top-0 left-0 right-0 md:ml-62 xs:ml-64 bg-background z-50">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden"></SidebarTrigger>
          
        <span className="text-lg font-semibold">Dashboard</span>
      </div>
    <div className="flex items-center gap-4">
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </header>
  );
};
