import { Recommendation } from "../../interfaces/recommendations";

export let recommendations: Recommendation[] = [
  {
    type: "critical",
    description:
      "Com a pressão acima de 18 por 11, deve-se procurar um pronto antedimento imediatamente",
    medicine: "Tomar 1cp de Bravan 25mg",
  },
  {
    type: "high",
    description:
      "Com a pressão acima de 14 por 9, deve-se ficar atento, tomar as medicações, repousar e refazer a medição em 1 hora",
    medicine: "Tomar 1cp de Bravan 25mg",
  },
  {
    type: "low",
    description:
      "Com a pressão menor que 10 por 7, deve-se alimentar bem, ingerir alimentos salgados e ficar atento, repita a medição em 1 hora",
    medicine: 'Mantenha sua medicação normalmente'
  },
  {
    type: "normal",
    description: "Pressão normal",
    medicine: 'Mantenha sua medicação normalmente'
  },
];
