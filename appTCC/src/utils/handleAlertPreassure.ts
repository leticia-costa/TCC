import { PressureLevel } from "../../interfaces/bloodPreassure";
import getRecommendation from "../../mocks/Recommendations/getRecommendation";

const recommendations = getRecommendation();

const recommendationsFilter = (type: PressureLevel) => {
  const filteredRecommendations = recommendations
    .filter((recommendation) => recommendation.type === type)
    .map((typeRecommendation) => ({
      description: typeRecommendation.description,
      medicine: typeRecommendation.medicine,
    }));

  return filteredRecommendations.length > 0
    ? `Recomendação: ${filteredRecommendations[0].description}\nMedicamento: ${filteredRecommendations[0].medicine}`
    : "Sem recomendações para este tipo de pressão.";
};

const handleAlertPreassure = (pressureLevel: PressureLevel) => {
  const message = recommendationsFilter(pressureLevel);
  return alert(message);
};

export default handleAlertPreassure;
