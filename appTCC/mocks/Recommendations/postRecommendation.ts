import { Recommendation } from "../../interfaces/recommendations";
import { recommendations } from "./recommendation";

export const postRecommendations = (newData: Recommendation): void => {
    recommendations.push(newData);
  };