import { BloodPreassure } from "../../interfaces/bloodPreassure";
import { bloodPreassure } from "./bloodPreassure";

const postBloodPreassure = (newData: BloodPreassure): void => {
    bloodPreassure?.push(newData);
  };
export default postBloodPreassure