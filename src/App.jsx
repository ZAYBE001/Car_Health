import { useState } from "react";
import { maintenanceRules } from "./data/maintanaceRules.js";
import VehicleForm from "./components/VehicleForm";
import ServiceDashboard from "./components/ServiceDashboard";
import MechanicDashboard from "./components/mechanic/MechanicDashboard"; //  Import Mechanic Dashboard
import Hyperspeed from "./components/Hyperspeed";

export default function App() {
  const [activeTab, setActiveTab] = useState("owner"); // 'owner' or 'mechanic'
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
      <div className="relative z-10 w-full flex flex-col items-center max-w-7xl">
        
        {/* 🟢 TOP HEADER & VIEW TOGGLE SWITCHER */}
        <header className="mb-8 w-full backdrop-blur-md bg-gray-900/70 p-4 rounded-2xl border border-gray-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight">
              🚗 Smart Car Service Tracker
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
              Keep your engine running perfectly
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center bg-gray-950/80 p-1.5 rounded-xl border border-gray-800">
            <button
              onClick={() => setActiveTab("owner")}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                activeTab === "owner"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              🚗 Owner View
            </button>
            <button
              onClick={() => setActiveTab("mechanic")}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                activeTab === "mechanic"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              🔧 Mechanic Portal
            </button>
          </div>
        </header>

        {/* 🔵 VIEW CONTAINER */}
        {activeTab === "owner" ? (
          <main className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-2 sm:px-4">
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
        ) : (
          <main className="w-full px-2 sm:px-4">
            <MechanicDashboard />
          </main>
        )}

      </div>
    </div>
  );
}