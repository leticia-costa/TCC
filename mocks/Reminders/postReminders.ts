import { Reminders } from "../../interfaces/reminders";
import { reminders } from "./reminders";

export const postReminders = (newData: Reminders): void => {
    reminders.push(newData);
  };