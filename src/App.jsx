import { useState } from "react";
import { maintenanceRules } from "./data/maintanaceRules.js";
import VehicleForm from "./components/VehicleForm";
import ServiceDashboard from "./components/ServiceDashboard";
import MechanicDashboard from "./components/mechanic/MechanicDashboard";
import Hyperspeed from "./components/Hyperspeed";

export default function App() {
  // 'welcome', 'owner', or 'mechanic'
  const [activeTab, setActiveTab] = useState("welcome");
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
        
        {/* 🟢 TOP HEADER & NAVIGATION SWITCHER */}
        <header className="mb-8 w-full backdrop-blur-md bg-gray-900/70 p-4 rounded-2xl border border-gray-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <button 
            onClick={() => setActiveTab("welcome")}
            className="text-center sm:text-left hover:opacity-80 transition-opacity focus:outline-none"
          >
            <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight flex items-center gap-2">
              <span>🚗</span> Smart Car Service Tracker
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
              Precision vehicle health & maintenance diagnostics
            </p>
          </button>

          {/* Nav Buttons */}
          <div className="flex items-center bg-gray-950/80 p-1.5 rounded-xl border border-gray-800">
            <button
              onClick={() => setActiveTab("welcome")}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                activeTab === "welcome"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              🏠 Home
            </button>
            <button
              onClick={() => setActiveTab("owner")}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                activeTab === "owner"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              🚗 Car Owner
            </button>
            <button
              onClick={() => setActiveTab("mechanic")}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
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
        {activeTab === "welcome" && (
          <main className="w-full max-w-4xl flex flex-col items-center text-center my-8 px-4">
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              Next-Gen Vehicle Logistics & Diagnostic Suite
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
              Monitor, Diagnose & <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Maintain Your Fleet
              </span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
              Track mileage intervals, inspect oil & filter references, log repair records, and manage mechanic diagnostics in real-time.
            </p>

            {/* Call To Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
              {/* Car Owner Portal Card */}
              <div 
                onClick={() => setActiveTab("owner")}
                className="group relative cursor-pointer backdrop-blur-xl bg-gray-900/60 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  🚗
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Car Owner Portal
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Input your current odometer reading, view service countdowns, and check OEM part replacement numbers.
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                  Launch Vehicle Tracker &rarr;
                </span>
              </div>

              {/* Mechanic Portal Card */}
              <div 
                onClick={() => setActiveTab("mechanic")}
                className="group relative cursor-pointer backdrop-blur-xl bg-gray-900/60 p-6 rounded-2xl border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  🔧
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Mechanic Diagnostic Portal
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Log service inspections, update maintenance records, write notes, and manage active workshop tickets.
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                  Open Mechanic Console &rarr;
                </span>
              </div>
            </div>
          </main>
        )}

        {/* 🚗 CAR OWNER VIEW */}
        {activeTab === "owner" && (
          <main className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-2 sm:px-4 animate-fade-in">
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
        )}

        {/* 🔧 MECHANIC PORTAL VIEW */}
        {activeTab === "mechanic" && (
          <main className="w-full px-2 sm:px-4 animate-fade-in">
            <MechanicDashboard />
          </main>
        )}

      </div>
    </div>
  );
}