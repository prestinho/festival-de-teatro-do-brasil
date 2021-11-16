import { isValidLink, waitFor } from "../util";

describe("tests for service util", () => {
  describe("tests for isValidLink", () => {
    test("Should validate links with http and www", () => {
      const link = "http://www.google.com";
      expect(isValidLink(link)).toBeTruthy();
    });

    test("Should validate links with https and www", () => {
      const link = "https://www.google.com";
      expect(isValidLink(link)).toBeTruthy();
    });

    test("Should validate links with http and without www", () => {
      const link = "http://google.com";
      expect(isValidLink(link)).toBeTruthy();
    });

    test("Should validate links with https and without www", () => {
      const link = "https://google.com";
      expect(isValidLink(link)).toBeTruthy();
    });

    test("Should validate links without but with www", () => {
      const link = "www.google.com";
      expect(isValidLink(link)).toBeTruthy();
    });

    test("Should reject links without .com or so", () => {
      const link = "google";
      expect(isValidLink(link)).toBeFalsy();
    });
  });

  describe("tests for waitFor", () => {
    test("should call function", async () => {
      const fn = jest.fn();
      await waitFor(fn);
      expect(fn).toBeCalled();
    });
  });
});
