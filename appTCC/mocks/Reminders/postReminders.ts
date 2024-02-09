import { Reminders } from "../../interfaces/reminders";
import { reminders } from "./reminders";

const postReminders = (newData: Reminders, index?: number): void => {
  if (index >= 0) {
    reminders[index] = newData;
  } else {
    reminders.push(newData);
  }
};
export default postReminders;
