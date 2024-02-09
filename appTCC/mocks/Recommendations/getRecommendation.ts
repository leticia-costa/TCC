import { Recommendation } from "../../interfaces/recommendations";
import { recommendations } from "./recommendation";

const getRecommendation = (): Recommendation[] => {
    return recommendations;
  };
export default getRecommendation