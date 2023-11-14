import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/molecules/Header";
import RecommendationCard from "../../components/molecules/RecommendationCard";
import getRecommendation from "../../../mocks/Recommendations/getRecommendation";
import { PressureLevel } from "../../../interfaces/bloodPreassure";
import { faCircleInfo, faExclamation, faHeartCircleExclamation, faHeartCircleMinus, faShieldHeart, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Recommendations = () => {
  const recommendations = getRecommendation();

  const recommendationTitle = (type: PressureLevel): string => {
    const levelTitles: Record<PressureLevel, string> = {
      critical: 'Pressão crítica',
      high: 'Pressão alta',
      normal: 'Pressão normal',
      low: 'Pressão baixa',
    };
  
    return levelTitles[type];
  };

  const recommendationIcon = (type: PressureLevel): IconProp => {
    const levelIcons: { [key in PressureLevel]: IconProp } = {
      critical: faTriangleExclamation,
      high: faHeartCircleExclamation,
      normal: faShieldHeart,
      low: faHeartCircleMinus,
    };
  
    return levelIcons[type];
  };
  

  return (
    <ScrollView>
      <View>
        <Header text="Recomendações" variant="dark" goBack icon={faCircleInfo}/>
        <View>
          {recommendations.map((recommendation) => (
            <RecommendationCard
              title={recommendationTitle(recommendation.type)}
              description={recommendation.description}
              type={recommendation.type}
              medicines={recommendation.medicine}
              icon={recommendationIcon(recommendation.type)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Recommendations;
