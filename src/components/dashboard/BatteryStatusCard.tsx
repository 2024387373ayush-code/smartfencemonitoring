import { useNavigate } from "react-router-dom";
import { Battery, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function BatteryStatusCard() {
  const navigate = useNavigate();
  const batteryLevel = 78;
  const voltage = 12.4;

  const getBatteryColor = (level: number) => {
    if (level > 60) return "bg-status-battery-good";
    if (level > 30) return "bg-status-battery-warning";
    return "bg-status-battery-critical";
  };

  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-md"
      onClick={() => navigate("/battery-details")}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Battery Status</CardTitle>
        <Battery className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">{batteryLevel}%</span>
            <span className="text-sm text-muted-foreground">{voltage}V</span>
          </div>
          
          <div className="space-y-2">
            <Progress 
              value={batteryLevel} 
              className="h-2"
            />
            <div className="flex items-center gap-2">
              <Zap className="h-3 w-3 text-status-charging" />
              <span className="text-xs text-muted-foreground">
                {batteryLevel > 60 ? "Good" : batteryLevel > 30 ? "Fair" : "Low"} - 
                Est. {Math.round((batteryLevel / 10) * 8)} hours remaining
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}