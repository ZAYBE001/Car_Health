import { useState } from "react";
import { maintenanceRules } from "./data/maintanaceRules.js";
import VehicleForm from "./components/VehicleForm";
import ServiceDashboard from "./components/ServiceDashboard";
import Hyperspeed from "./components/Hyperspeed"; // 🔑 Import background

export default function App() {
  const [selectedModel, setSelectedModel] = useState("Toyota Vitz");
  const [currentMileage, setCurrentMileage] = useState(0);
  const [lastServiceMileage, setLastServiceMileage] = useState(0);
  const [mechanicNotes, setMechanicNotes] = useState("");

  const activeCarSpecs = maintenanceRules[selectedModel];

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center overflow-x-hidden">
      
      {/* 🚀 ReactBits Hyperspeed Background Canvas */}
      <Hyperspeed />

      {/* 🚗 Foreground UI Container */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <header className="mb-8 text-center backdrop-blur-md bg-gray-900/60 p-4 rounded-2xl border border-gray-800 shadow-2xl">
          <h1 className="text-3xl font-extrabold text-blue-400 tracking-tight">
            🚗 Smart Car Service Tracker
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Keep your engine running perfectly
          </p>
        </header>

        <main className="w-full max-w-6xl xl:max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <VehicleForm
            maintenanceRules={maintenanceRules}
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            setCurrentMileage={setCurrentMileage}
            setLastServiceMileage={setLastServiceMileage}
            mechanicNotes={mechanicNotes}
            setMechanicNotes={setMechanicNotes}
          />

          <ServiceDashboard
            carSpecs={activeCarSpecs}
            currentMileage={Number(currentMileage)}
            lastServiceMileage={Number(lastServiceMileage)}
            mechanicNotes={mechanicNotes}
          />
        </main>
      </div>
    </div>
  );
}