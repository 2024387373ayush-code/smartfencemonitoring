⚡ Smart Fence Monitoring Dashboard

A responsive monitoring dashboard for the Smart Electric Fence System, built with React and dummy IoT data.
This MVP demonstrates real-time monitoring of fence status, solar panel charging, battery health, current/voltage readings, and tamper alerts.

🚀 Features

Fence Control: Toggle ON/OFF with live status indicator (🟢 ON / 🔴 OFF).

Battery Monitoring: Battery % and voltage shown with a progress bar.

Solar Panel Monitoring: Charging / Not Charging status.

Current & Voltage: Dummy chart simulating real-time readings.

Alerts: Displays tamper/alert notifications.

History Logs: Table with previous events (Date | Event | Current | Voltage | Fence Status | Tamper Status).

🛠️ Tech Stack

Frontend: React (Lovable generated UI, customized for responsiveness).

Backend (optional): Node.js/Express for future integration with hardware.

Database (optional): Firebase / MongoDB for storing live sensor data.

Communication: MQTT/HTTP (to be connected with ESP32/Arduino hardware).

📂 Project Structure
smart-fence-dashboard/
 ├── src/
 │   ├── components/     # UI components (cards, charts, tables)
 │   ├── pages/          # Dashboard and navigation pages
 │   ├── assets/         # Images/icons if any
 │   └── App.js          # Main app entry
 ├── public/             # Static files
 ├── package.json        # Dependencies
 └── README.md           # Project info

🖥️ Running Locally

Clone the repo:

git clone https://github.com/your-username/smart-fence-dashboard.git
cd smart-fence-dashboard


Install dependencies:

npm install


Start development server:

npm start


Then open http://localhost:3000
 in your browser.

📊 Dummy Data (for MVP Demo)

Battery: 78% (12.4V)

Solar Panel: Charging ✅

Fence Status: ON

Current/Voltage: ~2.1A, ~12.5V (dummy chart data)

History Example:

2025-09-24 | Fence ON | 2.1A | 12.5V | ON | No Tamper

2025-09-23 | Fence OFF | 0.0A | 12.3V | OFF | Tamper Detected

🌱 Future Enhancements

Connect real IoT hardware (ESP32 + sensors).

Add mobile app version for farmers/security staff.

Enable SMS/email alerts for tamper events.

Multi-farm dashboard with multiple fence units.

📜 License

This project is for Smart India Hackathon 2025 – Surya Drishti Team (HW1019).
