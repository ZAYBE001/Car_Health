import { useState } from "react";
import { maintenanceRules } from "./data/maintanaceRules.js";
import VehicleForm from "./components/VehicleForm";
import ServiceDashboard from "./components/ServiceDashboard";

export default function App() {
  const [selectedModel, setSelectedModel] = useState("Toyota Vitz");
  const [currentMileage, setCurrentMileage] = useState(0);
  const [lastServiceMileage, setLastServiceMileage] = useState(0);
  const [mechanicNotes, setMechanicNotes] = useState(""); // 🔑 New State for notes

  const activeCarSpecs = maintenanceRules[selectedModel];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 flex flex-col items-center">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-blue-400 tracking-tight">
          🚗 Smart Car Service Tracker
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Keep your engine running perfectly
        </p>
      </header>

      <main className="w-full max-w-6xl xl:max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Left Side: Inputs */}
        <VehicleForm
          maintenanceRules={maintenanceRules}
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          setCurrentMileage={setCurrentMileage}
          setLastServiceMileage={setLastServiceMileage}
          mechanicNotes={mechanicNotes}          // 🔑 Passed down
          setMechanicNotes={setMechanicNotes}    // 🔑 Passed down
        />

        {/* Right Side: Analytics & Part Details */}
        <ServiceDashboard
          carSpecs={activeCarSpecs}
          currentMileage={Number(currentMileage)}
          lastServiceMileage={Number(lastServiceMileage)}
          mechanicNotes={mechanicNotes}          // 🔑 Passed down to display
        />
      </main>
    </div>
  );
}