import React from 'react';

export default function ServiceDashboard({ carSpecs, currentMileage, lastServiceMileage, mechanicNotes }) {
  // If the user hasn't typed anything yet, show a clean onboarding message
  if (!currentMileage || !lastServiceMileage) {
    return (
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
        <span className="text-4xl mb-3">📊</span>
        <h3 className="text-lg font-semibold text-gray-300">Awaiting Mileage Data</h3>
        <p className="text-gray-500 text-sm max-w-xs mt-1">
          Enter the current odometer and last service readings to calculate engine health status.
        </p>
      </div>
    );
  }

  // 🧮 Core Maintenance Math
  const targetNextService = lastServiceMileage + carSpecs.serviceInterval;
  const kmRemaining = targetNextService - currentMileage;
  
  // Calculate percentage for the visual progress bar
  const kmDrivenSinceLastService = currentMileage - lastServiceMileage;
  const usagePercentage = Math.min(
    Math.max((kmDrivenSinceLastService / carSpecs.serviceInterval) * 100, 0),
    100
  );

  // 🚦 Determine Status Urgency and Tailwind Color Coding
  let statusTitle = "Engine Status: Healthy";
  let statusColor = "text-green-400 border-green-500/30 bg-green-500/10";
  let barColor = "bg-green-500";

  if (kmRemaining <= 0) {
    statusTitle = "⚠️ OVERDUE FOR SERVICE";
    statusColor = "text-red-400 border-red-500/30 bg-red-500/10 animate-emergency"; // <-- Changed here!
    barColor = "bg-red-500";
  } else if (kmRemaining <= 1000) {
    statusTitle = "🟡 SERVICE DUE SOON";
    statusColor = "text-yellow-400 border-yellow-500/30 bg-yellow-500/10";
    barColor = "bg-yellow-500";
  }

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 space-y-6">
      {/* Status Banner */}
      <div className={`border p-3 rounded-xl text-center font-bold text-sm tracking-wide uppercase ${statusColor}`}>
        {statusTitle}
      </div>

      {/* Mileage Metrics Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-700/50 p-4 rounded-xl border border-gray-700 text-center">
          <p className="text-xs text-gray-400 uppercase font-semibold">Next Service At</p>
          <p className="text-xl font-bold text-white mt-1">{targetNextService.toLocaleString()} KM</p>
        </div>
        <div className="bg-gray-700/50 p-4 rounded-xl border border-gray-700 text-center">
          <p className="text-xs text-gray-400 uppercase font-semibold">
            {kmRemaining >= 0 ? "Kilometers Remaining" : "Kilometers Overdue"}
          </p>
          <p className={`text-xl font-bold mt-1 ${kmRemaining >= 0 ? "text-blue-400" : "text-red-400"}`}>
            {Math.abs(kmRemaining).toLocaleString()} KM
          </p>
        </div>
      </div>

      {/* Visual Progress Bar */}
      <div>
        <div className="flex justify-between items-center text-xs text-gray-400 mb-2 font-medium">
          <span>Last Service ({lastServiceMileage.toLocaleString()} KM)</span>
          <span>Interval Limit ({carSpecs.serviceInterval.toLocaleString()} KM)</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <div className={`h-full transition-all duration-500 ease-out ${barColor}`} style={{ width: `${usagePercentage}%` }}></div>
        </div>
        <p className="text-right text-xs text-gray-500 mt-1 font-medium">{Math.round(usagePercentage)}% of interval capacity used</p>
      </div>

      <hr className="border-gray-700" />

      {/* 🛠️ Parts Logistics Section */}
      <div>
        <h3 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-3">Required Specifications</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between p-2.5 bg-gray-950/30 rounded-lg">
            <span className="text-gray-400">Recommended Oil:</span>
            <span className="font-semibold text-white">{carSpecs.oilType}</span>
          </li>
          <li className="flex justify-between p-2.5 bg-gray-950/30 rounded-lg">
            <span className="text-gray-400">Oil Filter Reference:</span>
            <span className="font-mono text-blue-300">{carSpecs.oilFilter}</span>
          </li>
          <li className="flex justify-between p-2.5 bg-gray-950/30 rounded-lg">
            <span className="text-gray-400">Air Filter Reference:</span>
            <span className="font-mono text-blue-300">{carSpecs.airFilter}</span>
          </li>
        </ul>
      </div>
      {/* 📋 NEW: Mechanic Briefing Note Section */}
      {mechanicNotes.trim() && (
        <div className="mt-4 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
          <h4 className="text-xs font-bold uppercase text-yellow-500/80 tracking-wider mb-1.5 flex items-center gap-1.5">
            📋 Driver Briefing Note
          </h4>
          <p className="text-sm text-gray-300 italic font-medium leading-relaxed">
            "{mechanicNotes}"
          </p>
        </div>
      )}
    </div>
  );
}