import React from "react";
import renderer from "react-test-renderer";
import Button from ".";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: "mock-fontawesome-icon",
}));
it("renders correctly", () => {
  const tree = renderer
    .create(
      <Button
        label="Teste"
        icon={faHeart}
        onPress={() => console.log("teste")}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
