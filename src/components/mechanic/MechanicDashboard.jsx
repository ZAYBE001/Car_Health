// src/components/mechanic/MechanicDashboard.jsx
import React, { useState } from 'react';
import WorkOrderBoard from './WorkOrderBoard';
import { initialJobRequests, initialWorkOrders } from '../../data/mockMechanicData';

export default function MechanicDashboard() {
  const [requests, setRequests] = useState(initialJobRequests);
  const [workOrders, setWorkOrders] = useState(initialWorkOrders);

  // Accept an incoming request and turn it into an active Work Order
  const handleAcceptRequest = (request) => {
    const newWorkOrder = {
      id: `WO-${Math.floor(100 + Math.random() * 900)}`,
      ownerName: request.ownerName,
      vehicle: request.vehicle,
      licensePlate: request.licensePlate,
      issue: request.issue,
      status: 'Received',
    };

    setWorkOrders([...workOrders, newWorkOrder]);
    setRequests(requests.filter((r) => r.id !== request.id));
  };

  // Decline an incoming request
  const handleDeclineRequest = (id) => {
    setRequests(requests.filter((r) => r.id !== id));
  };

  // Update work order status on the Kanban board
  const handleUpdateStatus = (orderId, newStatus) => {
    setWorkOrders(
      workOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 space-y-6">
      <header className="flex justify-between items-center border-b border-gray-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-white">🔧 AutoCare Mechanic Portal</h1>
          <p className="text-xs text-gray-400">Manage incoming diagnostics and live repair updates</p>
        </div>
      </header>

      {/* SECTION 1: Incoming Job Requests */}
      <section className="bg-gray-900 p-4 rounded-xl border border-gray-800">
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <span>📩 Incoming Vehicle Requests</span>
          <span className="bg-red-500/20 text-red-400 text-xs px-2 py-0.5 rounded-full font-bold">
            {requests.length} Pending
          </span>
        </h2>

        {requests.length === 0 ? (
          <p className="text-xs text-gray-500 italic">No pending repair requests.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requests.map((req) => (
              <div key={req.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm text-white">{req.vehicle}</h3>
                    <p className="text-xs text-blue-400 font-mono">{req.licensePlate}</p>
                  </div>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                    {req.urgency} Urgency
                  </span>
                </div>

                <p className="text-xs text-gray-300"><strong>Issue:</strong> {req.issue}</p>
                <p className="text-[11px] text-gray-400"><strong>Owner:</strong> {req.ownerName} ({req.contact})</p>

                <div className="flex gap-2 pt-2 border-t border-gray-700 mt-2">
                  <button
                    onClick={() => handleAcceptRequest(req)}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-1.5 rounded transition"
                  >
                    Accept & Create Job
                  </button>
                  <button
                    onClick={() => handleDeclineRequest(req.id)}
                    className="bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs px-3 py-1.5 rounded transition"
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* SECTION 2: Active Work Order Board */}
      <WorkOrderBoard workOrders={workOrders} onUpdateStatus={handleUpdateStatus} />
    </div>
  );
}