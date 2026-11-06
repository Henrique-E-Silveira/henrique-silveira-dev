import { describe, it, expect } from "vitest";
import { getAge, getYearsStudying } from "./dates";

describe("dates", () => {
  it("age is 19 the day before the 2027 birthday", () => expect(getAge(new Date(2027, 8, 28))).toBe(19));
  it("age is 20 on 29/09/2027", () => expect(getAge(new Date(2027, 8, 29))).toBe(20));
  it("years studying is 3 in 2026", () => expect(getYearsStudying(new Date(2026, 10, 6))).toBe(3));
});
