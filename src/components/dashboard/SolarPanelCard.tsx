import { useNavigate } from "react-router-dom";
import { Sun, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SolarPanelCard() {
  const navigate = useNavigate();
  const isCharging = true;
  const solarPower = 2.3; // kW

  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-md"
      onClick={() => navigate("/solar-details")}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Solar Panel</CardTitle>
        <Sun className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isCharging && <Check className="h-4 w-4 text-status-charging" />}
              <span className="text-2xl font-bold">
                {isCharging ? "Charging" : "Not Charging"}
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Badge 
              variant={isCharging ? "default" : "secondary"}
              className={isCharging ? "bg-success text-success-foreground" : ""}
            >
              {isCharging ? "Active" : "Inactive"}
            </Badge>
            <div className="text-sm text-muted-foreground">
              Output: {solarPower}W
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}