import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import HeroTitle from "../HeroTitle";

describe("tests for component HeroTitle", () => {
  beforeEach(() => {
    render(
      <HeroTitle
        src="https://via.placeholder.com/150"
        title="title"
        caption="caption"
        subTitle="sub"
      />
    );
  });
  test("Should render Title", () => {
    const title = screen.getByText("title");
    expect(title).toBeVisible();
  });

  test("Should render sub-title", () => {
    const sub = screen.getByText("sub");
    expect(sub).toBeVisible();
  });

  test("Should render image", () => {
    const img = screen.getByTestId("image");
    expect(img).toBeVisible();
  });
});
