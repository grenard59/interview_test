function countAntCrossing(path: string): number {
  return 0;
}

// ---->--<----------
// -----><-----------
// -----<>-----------
// ----<-->---------

test("count total ant crossing", () => {
  expect(countAntCrossing("--->>--<-->-->-<")).toBe(6);
  expect(countAntCrossing("<-->--<-->--<-->")).toBe(3);
  expect(countAntCrossing(">-->--<-<<--<-->")).toBe(8);
  expect(countAntCrossing(">--<>-----------")).toBe(1);
  expect(countAntCrossing("<--<--<-<>-->-->")).toBe(0);
});
