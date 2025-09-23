import { useState } from "react";
import { Calendar, Download, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const historyData = [
  { date: "2025-09-24 10:30", event: "Fence ON", current: "2.1A", voltage: "12.5V", fenceStatus: "ON", tamperStatus: "No Tamper" },
  { date: "2025-09-24 08:15", event: "Solar Charging Started", current: "2.3A", voltage: "12.7V", fenceStatus: "ON", tamperStatus: "No Tamper" },
  { date: "2025-09-23 22:45", event: "Fence OFF", current: "0.0A", voltage: "12.3V", fenceStatus: "OFF", tamperStatus: "Tamper Detected" },
  { date: "2025-09-23 18:30", event: "Battery Warning", current: "1.8A", voltage: "11.9V", fenceStatus: "ON", tamperStatus: "No Tamper" },
  { date: "2025-09-23 14:20", event: "Tamper Alert", current: "2.0A", voltage: "12.1V", fenceStatus: "ON", tamperStatus: "Tamper Detected" },
  { date: "2025-09-22 16:45", event: "System Reboot", current: "2.1A", voltage: "12.4V", fenceStatus: "ON", tamperStatus: "No Tamper" },
  { date: "2025-09-22 09:00", event: "Solar Charging", current: "2.4A", voltage: "12.8V", fenceStatus: "ON", tamperStatus: "No Tamper" },
  { date: "2025-09-21 20:15", event: "Fence Status Check", current: "2.0A", voltage: "12.2V", fenceStatus: "ON", tamperStatus: "No Tamper" },
];

export default function History() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold">Event History</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">24</div>
            <div className="text-sm text-muted-foreground">Total Events Today</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-success">98.5%</div>
            <div className="text-sm text-muted-foreground">Uptime This Week</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-warning">3</div>
            <div className="text-sm text-muted-foreground">Warnings</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-destructive">1</div>
            <div className="text-sm text-muted-foreground">Critical Events</div>
          </CardContent>
        </Card>
      </div>

      {/* History Table */}
      <Card>
        <CardHeader>
          <CardTitle>Event Log</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Current</TableHead>
                  <TableHead>Voltage</TableHead>
                  <TableHead>Fence Status</TableHead>
                  <TableHead>Tamper Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {historyData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.date}</TableCell>
                    <TableCell>{row.event}</TableCell>
                    <TableCell>{row.current}</TableCell>
                    <TableCell>{row.voltage}</TableCell>
                    <TableCell>
                      <Badge
                        variant={row.fenceStatus === "ON" ? "default" : "secondary"}
                        className={
                          row.fenceStatus === "ON"
                            ? "bg-success text-success-foreground"
                            : ""
                        }
                      >
                        {row.fenceStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          row.tamperStatus === "No Tamper" ? "secondary" : "destructive"
                        }
                        className={
                          row.tamperStatus === "No Tamper"
                            ? "bg-success/10 text-success"
                            : ""
                        }
                      >
                        {row.tamperStatus}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}