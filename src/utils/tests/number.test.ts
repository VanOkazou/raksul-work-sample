import { formatPrice } from "../number";

describe("formatPrice", () => {
  it("should return good format if paramater > 1000", () => {
    expect(formatPrice(1100)).toEqual("1,100");
  });
  it("should return good format if paramater < 1000", () => {
    expect(formatPrice(500)).toEqual("500");
  });
});
