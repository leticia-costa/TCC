import React from "react";
import renderer from "react-test-renderer";
import Input from ".";

it("renders correctly", () => {
  const tree = renderer.create(<Input type="default" />).toJSON();
  expect(tree).toMatchSnapshot();
});
