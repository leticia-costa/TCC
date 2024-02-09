import React from "react";
import renderer from "react-test-renderer";
import Typography from ".";

it("renders correctly", () => {
  const tree = renderer.create(<Typography>Teste</Typography>).toJSON();
  expect(tree).toMatchSnapshot();
});
