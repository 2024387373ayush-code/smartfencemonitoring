import { useNavigate } from "react-router-dom";
import { Shield, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AlertsCard() {
  const navigate = useNavigate();
  const tamperStatus = "No Tampering Detected";
  const lastAlert = "2 hours ago";

  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-md"
      onClick={() => navigate("/alerts")}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Security Alerts</CardTitle>
        <Shield className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-status-online" />
            <span className="text-lg font-semibold">All Clear</span>
          </div>
          
          <div className="space-y-2">
            <Badge variant="secondary" className="bg-success/10 text-success">
              {tamperStatus}
            </Badge>
            <div className="text-sm text-muted-foreground">
              Last check: {lastAlert}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}