const blContainer = require("../src/BranchListContainer");

let goodlist = "* br1\n master\n"
let goodlistExpected = ['br1', 'master'];
let goodlist1 = "* br1\n* master\n br2\n br3\n"

  describe("instate class", () => {
    test("simple new", () => {
      let blCont = new blContainer("");
      expect(blCont).toBeInstanceOf(blContainer);
      expect(blCont.rawList).toBe('');
      expect(blCont.arrayList).toBeUndefined();
    });

    test("new w/ param", () => {
      let blCont1 = new blContainer(goodlist);
      expect(blCont1).toBeInstanceOf(blContainer);
      expect(blCont1.rawList).not.toBeUndefined();
    });

  });

  describe("list processing", () => {
    test("list results", () => {
      let blCont = new blContainer(goodlist);
      expect(blCont.rawList).not.toBeUndefined();
    });
  });