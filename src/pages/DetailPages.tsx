import { ArrowLeft, Zap, Battery, Sun, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const detailedChartData = [
  { time: "00:00", value: 2.1, secondary: 12.5 },
  { time: "02:00", value: 2.0, secondary: 12.4 },
  { time: "04:00", value: 2.2, secondary: 12.6 },
  { time: "06:00", value: 2.3, secondary: 12.7 },
  { time: "08:00", value: 2.1, secondary: 12.4 },
  { time: "10:00", value: 2.0, secondary: 12.2 },
  { time: "12:00", value: 2.4, secondary: 12.8 },
  { time: "14:00", value: 2.2, secondary: 12.6 },
  { time: "16:00", value: 2.1, secondary: 12.5 },
  { time: "18:00", value: 2.0, secondary: 12.3 },
  { time: "20:00", value: 2.1, secondary: 12.4 },
  { time: "22:00", value: 2.0, secondary: 12.2 },
];

export function FenceDetails() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <h1 className="text-2xl font-bold">Fence Control Details</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Current Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold text-success">ONLINE</div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Voltage Output:</span>
                <span className="font-medium">12.5V</span>
              </div>
              <div className="flex justify-between">
                <span>Current Draw:</span>
                <span className="font-medium">2.1A</span>
              </div>
              <div className="flex justify-between">
                <span>Power:</span>
                <span className="font-medium">26.25W</span>
              </div>
              <div className="flex justify-between">
                <span>Uptime:</span>
                <span className="font-medium">72h 15m</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Efficiency</span>
                <span>94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Load Stability</span>
                <span>98%</span>
              </div>
              <Progress value={98} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Signal Strength</span>
                <span>87%</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>24-Hour Voltage History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={detailedChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip />
                <Line type="monotone" dataKey="secondary" stroke="hsl(var(--primary))" strokeWidth={2} name="Voltage (V)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function BatteryDetails() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <h1 className="text-2xl font-bold">Battery Details</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Battery className="h-5 w-5" />
              Battery Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold">78%</div>
            <Progress value={78} className="h-3" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Voltage:</span>
                <span className="font-medium">12.4V</span>
              </div>
              <div className="flex justify-between">
                <span>Temperature:</span>
                <span className="font-medium">24°C</span>
              </div>
              <div className="flex justify-between">
                <span>Health:</span>
                <span className="font-medium text-success">Good</span>
              </div>
              <div className="flex justify-between">
                <span>Cycles:</span>
                <span className="font-medium">1,247</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Capacity</span>
                <span>89%</span>
              </div>
              <Progress value={89} className="h-2" />
            </div>
            <div className="text-sm text-muted-foreground">
              Estimated runtime: 6.2 hours at current load
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function SolarDetails() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <h1 className="text-2xl font-bold">Solar Panel Details</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sun className="h-5 w-5" />
              Solar Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold text-success">CHARGING</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Output Power:</span>
                <span className="font-medium">2.3W</span>
              </div>
              <div className="flex justify-between">
                <span>Voltage:</span>
                <span className="font-medium">13.2V</span>
              </div>
              <div className="flex justify-between">
                <span>Current:</span>
                <span className="font-medium">0.17A</span>
              </div>
              <div className="flex justify-between">
                <span>Efficiency:</span>
                <span className="font-medium">87%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Daily Production</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">18.5 Wh</div>
            <div className="text-sm text-muted-foreground">
              Peak production: 3.1W at 12:30 PM
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function MetricsDetails() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <h1 className="text-2xl font-bold">Metrics Details</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Real-time Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={detailedChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} name="Current (A)" />
                <Line type="monotone" dataKey="secondary" stroke="hsl(var(--success))" strokeWidth={2} name="Voltage (V)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}