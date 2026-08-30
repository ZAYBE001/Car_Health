// src/data/mockMechanicData.js

export const initialJobRequests = [
  {
    id: "REQ-001",
    ownerName: "Sarah K.",
    contact: "0712345678",
    vehicle: "Toyota Fielder (2018)",
    licensePlate: "KDA 456Y",
    issue: "Slight grinding sound when braking & Check Engine Light on.",
    dateSubmitted: "2026-08-30",
    urgency: "High",
  },
  {
    id: "REQ-002",
    ownerName: "David O.",
    contact: "0722987654",
    vehicle: "Subaru Forester (2016)",
    licensePlate: "KCS 891Z",
    issue: "Scheduled 100,000km major service and oil change.",
    dateSubmitted: "2026-08-30",
    urgency: "Normal",
  },
];

export const initialWorkOrders = [
  {
    id: "WO-101",
    ownerName: "Alex M.",
    vehicle: "Mazda CX-5 (2019)",
    licensePlate: "KDD 102A",
    issue: "P0300 Random Misfire Code",
    status: "Under Inspection", // Options: 'Received', 'Under Inspection', 'In Repair', 'Ready for Pickup'
  },
  {
    id: "WO-102",
    ownerName: "Brian K.",
    vehicle: "Nissan X-Trail (2017)",
    licensePlate: "KCT 554B",
    issue: "Front suspension bushing replacement",
    status: "In Repair",
  },
];