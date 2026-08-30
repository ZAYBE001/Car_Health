// src/components/mechanic/WorkOrderBoard.jsx
import React from 'react';

const STAGES = ['Received', 'Under Inspection', 'In Repair', 'Ready for Pickup'];

export default function WorkOrderBoard({ workOrders, onUpdateStatus }) {
  return (
    <div className="p-4 bg-gray-900 rounded-xl text-white my-6">
      <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
        🧰 Active Garage Work Orders
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {STAGES.map((stage) => {
          const stageOrders = workOrders.filter((order) => order.status === stage);

          return (
            <div key={stage} className="bg-gray-800 p-3 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-sm text-gray-300">{stage}</h3>
                <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full font-bold">
                  {stageOrders.length}
                </span>
              </div>

              <div className="space-y-3">
                {stageOrders.length === 0 ? (
                  <p className="text-xs text-gray-500 italic py-2">No active jobs</p>
                ) : (
                  stageOrders.map((order) => (
                    <div key={order.id} className="bg-gray-700 p-3 rounded-md shadow text-xs space-y-1">
                      <div className="flex justify-between font-bold text-blue-400">
                        <span>{order.id}</span>
                        <span>{order.licensePlate}</span>
                      </div>
                      <p className="font-medium text-gray-200">{order.vehicle}</p>
                      <p className="text-gray-400 text-[11px]">{order.issue}</p>
                      <p className="text-gray-400 text-[10px]">Owner: {order.ownerName}</p>

                      {/* Status Selector Controls */}
                      <div className="pt-2 flex justify-between items-center border-t border-gray-600 mt-2">
                        <label className="text-[10px] text-gray-400">Move to:</label>
                        <select
                          value={order.status}
                          onChange={(e) => onUpdateStatus(order.id, e.target.value)}
                          className="bg-gray-800 text-gray-200 text-[10px] p-1 rounded border border-gray-600"
                        >
                          {STAGES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}