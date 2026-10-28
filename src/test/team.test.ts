import { describe, expect, it } from "vitest";
import { findMember } from "@/data/team";

describe("specialist team members", () => {
  it("lists Marlien as a practitioner rather than a founder or live-in guide", () => {
    expect(findMember("marlien-wright")?.kind).toBe("practitioner");
  });

  it("lists Ashleigh as a practitioner rather than a founder or live-in guide", () => {
    expect(findMember("ashleigh-caradas")?.kind).toBe("practitioner");
  });

  it("lists Gerritt as a specialist practitioner rather than a founder or live-in guide", () => {
    expect(findMember("gerritt-bruwer")?.kind).toBe("practitioner");
  });

  it("leaves Gerritt's unspecified location blank", () => {
    expect(findMember("gerritt-bruwer")?.l).toBe("");
  });
});