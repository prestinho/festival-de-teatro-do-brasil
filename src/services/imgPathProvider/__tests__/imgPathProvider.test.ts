import { imgPathProvider } from "../imgPathProvider";

const baseFromEnv = process.env.REACT_APP_USE_IMAGEKIT
  ? process.env.REACT_APP_IMAGEKIT_BASE_URL
  : process.env.REACT_APP_GOOGLE_BASE_URL;
describe("tests for component imgPathProvider", () => {
  test("Should return base url for images", () => {
    const base = imgPathProvider.getBase();
    expect(base).toEqual(baseFromEnv);
  });

  test("Should return image full path without transformation", () => {
    const src = imgPathProvider.getPath("src.jpg");
    expect(src).toMatch(baseFromEnv ?? "----");
    expect(src).toMatch(src);
    expect(src).not.toMatch("tr:");
  });

  test("Should return image full path with transformation", () => {
    const src = imgPathProvider.getPath("src.jpg", 100, 100);
    expect(src).toMatch(baseFromEnv ?? "----");
    expect(src).toMatch(src);
    expect(src).toMatch("tr:");
  });

  test("Should remove base from image path", () => {
    const src = process.env.REACT_APP_GOOGLE_BASE_URL + "/src.jpg";
    const cleanSrc = imgPathProvider.cleanBasePath(src);

    expect(cleanSrc).not.toMatch(process.env.REACT_APP_GOOGLE_BASE_URL ?? "src.jpg");
  });
});
