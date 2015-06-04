/*jshint funcscope:true*/
module.exports = {
  letterGrader: function () {
  var letterGrade = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F+", "F"];
  var numbGrade = [98, 92, 90, 88, 82, 80, 78, 72, 70, 68, 62, 60, 58, 0];
  var results = [];
  if (arguments.length === 1) {
    for (var i = 0; i < numbGrade.length; i ++) {
      if (arguments[0] >= numbGrade[i]) {
        results = i;
        i = numbGrade.length;
      }
    }
    return letterGrade[results];
  } else {
    for (i = 0; i < arguments.length; i ++ ) {
      for (var j = 0; j < numbGrade.length; j ++) {
        if (arguments[i] >= numbGrade[j]) {
          results[i] = letterGrade[j];
          j = numbGrade.length;
        }
      }
    }
    return results;
  }
  },

  averageScore: function (array) {
    var total = array.reduce(function (all, item, index, array) {
      all += item;
      return all;
    }, 0);
    return total/array.length;
  },

  medianScore: function (array) {
    var length = array.length;
    return length % 2 === 0 ? (array[length/2 - 1] + array[(length/2)])/2 : array[Math.floor(length/2)];
  },

  modeScore: function (array) {
    var modeCompare = 0;
    var modeResult = [];
    var obj = array.reduce(function (all, item, index) {
    return all[item] === undefined ? (all[item] = 1 , all) : (all[item] += 1 , all);
    }, {});

    for (var numb in obj) {
      if (obj[numb] > modeCompare) {
          modeCompare = obj[numb];
      }
    }

    for (numb in obj) {
      if (obj[numb] === modeCompare) {
        modeResult.push(parseInt(numb));
      }
    }

  if (modeCompare === 1) {
    return "no mode";
  } else {
    return modeResult;
    }
  },
};
