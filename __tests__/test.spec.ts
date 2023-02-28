import { ucfirst } from "../src";

describe("ucfirst function", () => {
  let caseCounter = 0;
  it.each([
    [caseCounter++, "guybrush", "Guybrush"],
    [caseCounter++, "THREEPWOOD", "Threepwood"],
    [caseCounter++, "Pirate", "Pirate"],
    [caseCounter++, "àstringwithnosense", "Àstringwithnosense"],
    [caseCounter++, "ÌSADIFFERENTSTRING", "Ìsadifferentstring"],
    [caseCounter++, "this has empty spaces", "This has empty spaces"],
    [caseCounter++, "", ""],
    [caseCounter++, "123456", "123456"],
  ])(
    "case %i: %s",
    async (
      _i: number,
      word: string,
      expected: string,
    ) => {
      expect(ucfirst(word)).toStrictEqual(expected);
    }
  );
});

describe("mapping", () => {
  it("Should capitalize each word", () => {
    const sentence ="this is a sentence all lowercase i expect it to have each word capitalized";
    expect(sentence.split(" ").map(ucfirst).join(" ")).toBe("This Is A Sentence All Lowercase I Expect It To Have Each Word Capitalized")
  })
});
