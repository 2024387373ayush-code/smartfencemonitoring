import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Power, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function FenceControlCard() {
  const [fenceStatus, setFenceStatus] = useState(true);
  const navigate = useNavigate();

  const toggleFence = () => {
    setFenceStatus(!fenceStatus);
  };

  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-md"
      onClick={() => navigate("/fence-details")}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Fence Control</CardTitle>
        <Zap className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div
                className={`h-3 w-3 rounded-full ${
                  fenceStatus ? "bg-status-online" : "bg-status-offline"
                }`}
              />
              <span className="text-2xl font-bold">
                {fenceStatus ? "ON" : "OFF"}
              </span>
            </div>
            <Badge 
              variant={fenceStatus ? "default" : "secondary"}
              className={fenceStatus ? "bg-success text-success-foreground" : ""}
            >
              {fenceStatus ? "Active" : "Inactive"}
            </Badge>
          </div>
          
          <Button
            onClick={(e) => {
              e.stopPropagation();
              toggleFence();
            }}
            variant={fenceStatus ? "destructive" : "default"}
            size="sm"
            className="ml-4"
          >
            <Power className="h-4 w-4 mr-2" />
            Turn {fenceStatus ? "OFF" : "ON"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}