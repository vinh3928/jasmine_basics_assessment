var test = require("../grader.js");

describe("#letterGrade", function () {
  it("takes a test score and returns the equivalent letter grade", function () {
    expect(test.letterGrader(98)).toEqual("A+");
    expect(test.letterGrader(74)).toEqual("C");
    expect(test.letterGrader(80, 50)).toEqual(["B-", "F"]);
  });
});

describe("#average", function () {
  it("takes in an array and spits out the average of the number", function () {
    expect(test.averageScore([90, 95, 87, 60])).toEqual(83);
    expect(test.averageScore([50, 50, 51, 51])).toEqual(50.5);
  });
});

describe("#median", function () {
  it("takes in an array and spits out the median of the array", function () {
    expect(test.medianScore([52,81,80,86,94])).toEqual(80);
    expect(test.medianScore([24,28,32,34,54,55])).toEqual(33);
  })
});

describe("#mode", function () {
  it("takes an array of numbers and spits out the most repeated number", function () {
    expect(test.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual([92]);
    expect(test.modeScore([25, 34, 43, 31, 21])).toEqual("no mode");
    expect(test.modeScore([25, 25, 22, 22, 24, 24])).toEqual([22, 24, 25]);
  });
});
