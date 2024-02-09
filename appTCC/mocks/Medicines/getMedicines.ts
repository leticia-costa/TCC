import { Medicines } from "../../interfaces/medicines";
import { medicines } from "./medicines";

const getMedicines = (): Medicines[] => {
    return medicines;
  };
export default getMedicines