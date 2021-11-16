import LocalStorageService from "../LocalStorageService";

describe("tests for component LocalStorageService", () => {
  test("Should storage a string", () => {
    LocalStorageService.setItem("id", "String to store");

    expect(localStorage.getItem("id")).toEqual("String to store");
  });

  test("Should storage a JSON", () => {
    LocalStorageService.setItemJSON("id", { a: "1", b: "2", c: [1, 2, 3] });

    expect(JSON.parse(localStorage.getItem("id") ?? "")).toEqual({
      a: "1",
      b: "2",
      c: [1, 2, 3],
    });
  });

  test("Should get a String", () => {
    localStorage.setItem("id", "normal string");

    expect(LocalStorageService.getItem("id") ?? "").toEqual("normal string");
  });

  test("Should get a JSON", () => {
    localStorage.setItem("id", JSON.stringify({ a: "1", b: "2", c: [1, 2, 3] }));

    expect(LocalStorageService.getItemJSON("id") ?? "").toEqual({
      a: "1",
      b: "2",
      c: [1, 2, 3],
    });
  });

  test("Should clear localStorage", () => {
    localStorage.setItem("id", "1");
    localStorage.setItem("id2", "2");
    localStorage.setItem("id3", "3");

    LocalStorageService.clear();

    expect(localStorage.length).toBe(0);
  });
});
