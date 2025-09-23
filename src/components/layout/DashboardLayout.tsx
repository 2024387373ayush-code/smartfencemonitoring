import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardSidebar } from "./DashboardSidebar";

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
        <div className="flex h-16 items-center px-4">
          <Button
            variant="ghost"
            size="sm"
            className="mr-3 md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold text-primary">
            Smart Fence Monitoring Unit
          </h1>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar 
          open={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          <div className="h-full p-4 md:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}