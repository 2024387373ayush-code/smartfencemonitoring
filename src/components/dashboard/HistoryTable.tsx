import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const historyData = [
  {
    date: "2025-09-24",
    event: "Fence ON",
    current: "2.1A",
    voltage: "12.5V",
    fenceStatus: "ON",
    tamperStatus: "No Tamper",
  },
  {
    date: "2025-09-23",
    event: "Fence OFF",
    current: "0.0A",
    voltage: "12.3V",
    fenceStatus: "OFF",
    tamperStatus: "Tamper Detected",
  },
  {
    date: "2025-09-23",
    event: "Battery Low",
    current: "1.8A",
    voltage: "11.9V",
    fenceStatus: "ON",
    tamperStatus: "No Tamper",
  },
  {
    date: "2025-09-22",
    event: "Solar Charging",
    current: "2.3A",
    voltage: "12.8V",
    fenceStatus: "ON",
    tamperStatus: "No Tamper",
  },
  {
    date: "2025-09-22",
    event: "System Boot",
    current: "2.1A",
    voltage: "12.4V",
    fenceStatus: "ON",
    tamperStatus: "No Tamper",
  },
];

export function HistoryTable() {
  const navigate = useNavigate();

  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-md"
      onClick={() => navigate("/history")}
    >
      <CardHeader>
        <CardTitle className="text-lg font-medium">Recent Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Current</TableHead>
                <TableHead>Voltage</TableHead>
                <TableHead>Fence</TableHead>
                <TableHead>Tamper</TableHead>
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
  );
}