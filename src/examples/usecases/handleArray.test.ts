import { describe, expect, test } from "vitest";
import { handleArray } from "./handleArray";

describe("usecases", () => {
  test('retorne um array se o argumento também for um array', () => {
    expect(handleArray([1, 2])).toEqual([1, 2])
  });

  test('retorne uma array vazio se for falso', () => {
    expect(handleArray()).toEqual([])
  });

  test(`retorne uma array com o argumento fornecido se o argumento não for uma array ou falso`, () => {
    expect(handleArray('Antony')).toEqual(['Antony'])
  });
})
