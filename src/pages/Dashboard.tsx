import { FenceControlCard } from "@/components/dashboard/FenceControlCard";
import { BatteryStatusCard } from "@/components/dashboard/BatteryStatusCard";
import { SolarPanelCard } from "@/components/dashboard/SolarPanelCard";
import { CurrentVoltageChart } from "@/components/dashboard/CurrentVoltageChart";
import { AlertsCard } from "@/components/dashboard/AlertsCard";
import { HistoryTable } from "@/components/dashboard/HistoryTable";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Main Dashboard Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <FenceControlCard />
        <BatteryStatusCard />
        <SolarPanelCard />
        <AlertsCard />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <CurrentVoltageChart />
        <div className="space-y-4">
          {/* Microcontroller Performance */}
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h3 className="text-sm font-medium mb-3">MCU Performance</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>CPU Usage</span>
                <span>23%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "23%" }}></div>
              </div>
              <div className="flex justify-between text-sm">
                <span>Memory</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History Table */}
      <HistoryTable />
    </div>
  );
}