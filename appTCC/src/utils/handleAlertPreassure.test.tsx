import handleAlertPreassure from "./handleAlertPreassure";

const mockAlert = jest.fn();
global.alert = mockAlert;

describe("handleAlertPreassure", () => {
  it("should display alert with recommendation for critical pressure level", () => {
    handleAlertPreassure("critical");

    expect(mockAlert).toHaveBeenCalledWith(
      "Recomendação: Com a pressão acima de 18 por 11, deve-se procurar um pronto antedimento imediatamente\nMedicamento: Tomar 1cp de Bravan 25mg"
    );
  });
  it("should display alert with recommendation for high pressure level", () => {
    handleAlertPreassure("high");

    expect(mockAlert).toHaveBeenCalledWith(
      "Recomendação: Com a pressão acima de 14 por 9, deve-se ficar atento, tomar as medicações, repousar e refazer a medição em 1 hora\nMedicamento: Tomar 1cp de Bravan 25mg"
    );
  });
  it("should display alert with recommendation for low pressure level", () => {
    handleAlertPreassure("low");

    expect(mockAlert).toHaveBeenCalledWith(
      "Recomendação: Com a pressão menor que 10 por 7, deve-se alimentar bem, ingerir alimentos salgados e ficar atento, repita a medição em 1 hora\nMedicamento: Mantenha sua medicação normalmente"
    );
  });
  it("should display alert with recommendation for normal pressure level", () => {
    handleAlertPreassure("normal");

    expect(mockAlert).toHaveBeenCalledWith(
      "Recomendação: Pressão normal\nMedicamento: Mantenha sua medicação normalmente"
    );
  });
});
