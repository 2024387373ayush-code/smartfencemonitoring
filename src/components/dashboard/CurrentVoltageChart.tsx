import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const dummyData = [
  { time: "00:00", current: 2.1, voltage: 12.5 },
  { time: "04:00", current: 2.0, voltage: 12.3 },
  { time: "08:00", current: 2.2, voltage: 12.6 },
  { time: "12:00", current: 2.3, voltage: 12.7 },
  { time: "16:00", current: 2.1, voltage: 12.4 },
  { time: "20:00", current: 2.0, voltage: 12.2 },
];

export function CurrentVoltageChart() {
  const navigate = useNavigate();

  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-md col-span-2"
      onClick={() => navigate("/metrics-details")}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Current & Voltage</CardTitle>
        <Activity className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dummyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                name="Current (A)"
              />
              <Line 
                type="monotone" 
                dataKey="voltage" 
                stroke="hsl(var(--success))" 
                strokeWidth={2}
                name="Voltage (V)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}