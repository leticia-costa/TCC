import { Medicines } from "../../interfaces/medicines";
import { medicines } from "./medicines";

export const postMedicines = (newData: Medicines): void => {
    medicines.push(newData);
  };