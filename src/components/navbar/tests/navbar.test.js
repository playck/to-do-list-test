import Navbar from "../navbar";
import renderer from "react-test-renderer";

describe("Navbar", () => {
  it("renders", () => {
    const component = renderer.create(<Navbar />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
