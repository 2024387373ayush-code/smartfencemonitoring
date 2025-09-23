import { AlertTriangle, Shield, Check, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const alerts = [
  {
    id: 1,
    type: "security",
    severity: "high",
    title: "Tamper Detection",
    description: "Unusual vibration detected on fence section 3",
    timestamp: "2025-09-23 14:30:22",
    status: "resolved",
  },
  {
    id: 2,
    type: "system",
    severity: "medium",
    title: "Battery Low Warning",
    description: "Battery level dropped below 30%",
    timestamp: "2025-09-22 09:15:11",
    status: "acknowledged",
  },
  {
    id: 3,
    type: "maintenance",
    severity: "low",
    title: "Solar Panel Cleaning",
    description: "Reduced efficiency detected, cleaning recommended",
    timestamp: "2025-09-21 16:45:33",
    status: "active",
  },
];

export default function Alerts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Security Alerts</h1>
        <Button variant="outline" size="sm">
          <Shield className="h-4 w-4 mr-2" />
          Clear All
        </Button>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-destructive/10 p-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-muted-foreground">Active Alerts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-success/10 p-3">
                <Check className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">Resolved Today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-info/10 p-3">
                <Clock className="h-6 w-6 text-info" />
              </div>
              <div>
                <p className="text-2xl font-bold">15</p>
                <p className="text-sm text-muted-foreground">This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alert List */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Recent Alerts</h2>
        {alerts.map((alert) => (
          <Card key={alert.id}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`rounded-full p-2 ${
                    alert.severity === "high" 
                      ? "bg-destructive/10" 
                      : alert.severity === "medium"
                      ? "bg-warning/10"
                      : "bg-info/10"
                  }`}>
                    <AlertTriangle className={`h-4 w-4 ${
                      alert.severity === "high"
                        ? "text-destructive"
                        : alert.severity === "medium"
                        ? "text-warning"
                        : "text-info"
                    }`} />
                  </div>
                  <div>
                    <CardTitle className="text-base">{alert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                  </div>
                </div>
                <Badge 
                  variant={alert.status === "resolved" ? "secondary" : "destructive"}
                  className={alert.status === "resolved" ? "bg-success/10 text-success" : ""}
                >
                  {alert.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{alert.timestamp}</span>
                <div className="space-x-2">
                  {alert.status === "active" && (
                    <Button size="sm" variant="outline">
                      Acknowledge
                    </Button>
                  )}
                  <Button size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}