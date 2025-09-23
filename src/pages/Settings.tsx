import { useState } from "react";
import { Save, Wifi, Bell, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  const [settings, setSettings] = useState({
    fenceVoltage: 12.5,
    alertThreshold: 30,
    notificationsEnabled: true,
    tamperSensitivity: "medium",
    autoReboot: false,
    wifiSSID: "FenceNetwork",
    deviceName: "Smart Fence Unit 01",
  });

  const handleSave = () => {
    // Save settings logic
    console.log("Settings saved:", settings);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
        <Button onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Fence Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Fence Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="voltage">Target Voltage (V)</Label>
              <Input
                id="voltage"
                type="number"
                value={settings.fenceVoltage}
                onChange={(e) =>
                  setSettings({ ...settings, fenceVoltage: parseFloat(e.target.value) })
                }
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deviceName">Device Name</Label>
              <Input
                id="deviceName"
                value={settings.deviceName}
                onChange={(e) =>
                  setSettings({ ...settings, deviceName: e.target.value })
                }
              />
            </div>

            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto Reboot</Label>
                <div className="text-sm text-muted-foreground">
                  Automatically reboot system on critical errors
                </div>
              </div>
              <Switch
                checked={settings.autoReboot}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, autoReboot: checked })
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Alert Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Alert Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="threshold">Battery Alert Threshold (%)</Label>
              <Input
                id="threshold"
                type="number"
                value={settings.alertThreshold}
                onChange={(e) =>
                  setSettings({ ...settings, alertThreshold: parseInt(e.target.value) })
                }
              />
            </div>

            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Push Notifications</Label>
                <div className="text-sm text-muted-foreground">
                  Receive alerts on your mobile device
                </div>
              </div>
              <Switch
                checked={settings.notificationsEnabled}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, notificationsEnabled: checked })
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Tamper Detection Sensitivity</Label>
              <select 
                className="w-full p-2 border rounded-md"
                value={settings.tamperSensitivity}
                onChange={(e) =>
                  setSettings({ ...settings, tamperSensitivity: e.target.value })
                }
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <Separator />

            <div className="space-y-2">
              <h4 className="font-medium">Recent Security Events</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>• Last tamper check: 2 hours ago</div>
                <div>• Security status: All clear</div>
                <div>• System integrity: OK</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Network Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="h-5 w-5" />
              Network Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ssid">WiFi Network</Label>
              <Input
                id="ssid"
                value={settings.wifiSSID}
                onChange={(e) =>
                  setSettings({ ...settings, wifiSSID: e.target.value })
                }
              />
            </div>

            <Separator />

            <div className="space-y-2">
              <h4 className="font-medium">Connection Status</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Signal Strength:</span>
                  <span className="text-success font-medium">Strong (-45 dBm)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">IP Address:</span>
                  <span>192.168.1.100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Sync:</span>
                  <span>2 minutes ago</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}