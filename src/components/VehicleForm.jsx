import React from 'react';

export default function VehicleForm({
  maintenanceRules,
  selectedModel,
  setSelectedModel,
  setCurrentMileage,
  setLastServiceMileage,
  mechanicNotes,      // 🔑 Destructured prop
  setMechanicNotes,  // 🔑 Destructured prop
}) {
  const modelOptions = Object.keys(maintenanceRules);

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-gray-200">Vehicle Logistics</h2>
      
      <div className="space-y-4">
        {/* Dropdown for Car Selection */}
        <div>
          <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">
            Select Car Model
          </label>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            {modelOptions.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        {/* Current Mileage Input */}
        <div>
          <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">
            Current Odometer Reading (KM)
          </label>
          <input
            type="number"
            placeholder="e.g. 105000"
            onChange={(e) => setCurrentMileage(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Last Service Mileage Input */}
        <div>
          <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">
            Last Service Odometer Reading (KM)
          </label>
          <input
            type="number"
            placeholder="e.g. 98000"
            onChange={(e) => setLastServiceMileage(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/*  NEW: Mechanic Notes Field */}
        <div>
          <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">
            Special Instructions / Driver Notes
          </label>
          <textarea
            value={mechanicNotes}
            onChange={(e) => setMechanicNotes(e.target.value)}
            rows="3"
            placeholder="e.g., Check front brake pads, they screech when stopping. Verify steering alignment."
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500 resize-none"
          />
        </div>
      </div>
    </div>
  );
}