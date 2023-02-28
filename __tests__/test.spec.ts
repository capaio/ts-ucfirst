import { ucfirst } from "../src";

describe("ucfirst function", () => {
  let caseCounter = 0;
  it.each([
    [caseCounter++, "guybrush", "Guybrush"],
    [caseCounter++, "THREEPWOOD", "Threepwood"],
    [caseCounter++, "Pirate", "Pirate"],
    [caseCounter++, "àstringwithnosense", "Àstringwithnosense"],
    [caseCounter++, "ÌSADIFFERENTSTRING", "Ìsadifferentstring"],
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
