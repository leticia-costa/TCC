import { Reminders } from "../../interfaces/reminders";

export let reminders: Reminders[] = [
  {
    type: "medicine",
    hour: "20:00",
    description: "Bravan 25mg",
    status: true,
  },
  {
    type: "medicine",
    hour: "20:30",
    description: "Pressat 5mg",
    status: false,
  },
  {
    type: "preassure",
    hour: "08:00",
    description: "Medição",
    status: true,
  },
  {
    type: "preassure",
    hour: "17:00",
    description: "Medição",
    status: true,
  },
  {
    type: "preassure",
    hour: "20:01",
    description: "Medição",
    status: true,
  },
];
