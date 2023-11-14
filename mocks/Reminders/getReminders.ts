import { Reminders } from "../../interfaces/reminders";
import { reminders } from "./reminders";

const getReminders= (): Reminders[] => {
    return reminders;
  };
export default getReminders