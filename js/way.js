function way(areaNum) {
  var res = "";
  switch (areaNum) {
    case "1-1":
      res = moreElementOfWay("A", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      res = res + moreElementOfWay("C", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      $('div').text("ランダムです 隻数を減らして下さい");
      break;
    case "1-2":
      res = moreElementOfWay("A", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      res = res + moreElementOfWay("E", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      $('div').text("ランダムです 駆逐艦と海防艦を増やして下さい");
      break;
    case "1-3":
      res = moreElementOfWay("A", 0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
      if (res.slice(-5, -4) === "A") {
        res = res + moreElementOfWay("D", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      } else {
        res = res + moreElementOfWay("C", 1, 1, 1, 1, 1, 1, 1, 1, 0, 0);
      };
      if (res.slice(-5, -4) === "D") {
        res = res + moreElementOfWay("B", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        res = res + moreElementOfWay("E", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      res = res + moreElementOfWay("F", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      res = res + moreElementOfWay("H", 1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
      if (res.slice(-5, -4) === "H") {
        res = res + moreElementOfWay("G", 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
      } else {
        res = res + moreElementOfWay("J", 0, 0, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "H") {
        res = res + moreElementOfWay("J", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      $('div').text("ランダム要素を多く含みます");
      break;
    case "1-4":
      res = randElementOfWay("A", "B");
      if (res.slice(-5, -4) === "A") {
        res = res + moreElementOfWay("D", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "B") {
        res = res + moreElementOfWay("D", 3, 3, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      if (res.slice(-5, -4) === "B") {
        res = res + moreElementOfWay("C", 0, 0, 0, 0, 0, 1, 1, 0, 0, 0);
      };
      if (res.slice(-5, -4) === "B") {
        res = res + moreElementOfWay("D", 1, 1, 1, 1, 1, 0, 0, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreElementOfWay("F", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "D") {
        res = res + elementOfSpWay("E", 0, 1);
        res = res + moreElementOfWay("G", 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
      };
      if (res.slice(-5, -4) === "D") {
        res = res + randElementOfWay("E", "G");
      };
      if (res.slice(-5, -4) === "F") {
        res = res + moreElementOfWay("E", 0, 0, 0, 0, 0, 2, 2, 0, 0, 0);
      };
      if (res.slice(-5, -4) === "F") {
        res = res + randElementOfWay("H", "I");
      };
      if (res.slice(-5, -4) === "E") {
        res = res + moreElementOfWay("H", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "G") {
        res = res + moreElementOfWay("J", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "H" || res.slice(-5, -4) === "I" || res.slice(-5, -4) === "J") {
        res = res + moreElementOfWay("L", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      $('div').text("ランダム要素を多く含みます");
      break;
    case "1-5":
      res = moreElementOfWay("A", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      res = res + moreElementOfWay("D", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      res = res + leastElementOfWay("E", 1, 1, 1, 1, 1, 1, 7, 1, 1, 0);
      if (res.slice(-5, -4) === "D") {
        res = res + moreElementOfWay("E", 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
      };
      if (res.slice(-5, -4) === "D") {
        res = res + moreElementOfWay("F", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "E") {
        res = res + leastElementOfWay("J", 1, 1, 1, 1, 1, 1, 5, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "E") {
        res = res + moreElementOfWay("C", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + leastElementOfWay("J", 1, 1, 1, 1, 1, 1, 7, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreElementOfWay("B", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "F") {
        res = res + moreElementOfWay("I", 1, 1, 2, 0, 3, 0, 0, 1, 0, 0);
      };
      if (res.slice(-5, -4) === "F") {
        res = res + moreElementOfWay("G", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        res = res + moreSumOfElement("H", 0, 9, 5);
      };
      if (res.slice(-5, -4) === "G") {
        res = res + moreElementOfWay("J", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      break;
    case "1-6":
      res = moreElementOfWay("C", 1, 0, 1, 1, 0, 0, 0, 0, 0, 0);
      if (res === "") {
        res = res + lessSumOfElement("C", 5, 6, 3);
      };
      if (res === "") {
        res = res + moreElementOfWay("A", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "A") {
        res = res + moreElementOfWay("E", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        res = res + moreElementOfWay("G", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        res = res + moreElementOfWay("F", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        res = res + moreElementOfWay("B", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreElementOfWay("H", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        res = res + moreElementOfWay("K", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        res = res + moreElementOfWay("M", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        res = res + moreElementOfWay("L", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        res = res + moreElementOfWay("I", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        res = res + moreElementOfWay("D", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "B" || res.slice(-5, -4) === "D") {
        res = res + moreElementOfWay("GOAL", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      $('div').text("索敵スコアありで M => J を通れます");
      break;
    case "2-1":
      res = moreElementOfWay("C", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      res = res + moreSumOfElement("B", 1, 2, 3);
      if (res.slice(-5, -4) === "C") {
        res = res + moreElementOfWay("B", 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      if (res.slice(-5, -4) === "B") {
        res = res + moreElementOfWay("A", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreElementOfWay("E", 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + elementOfSpWay("E", 0, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + randElementOfWay("D", "E");
      };
      if (res.slice(-5, -4) === "E") {
        res = res + moreSumOfElement("H", 5, 5, 4);
      };
      if (res.slice(-5, -4) === "E") {
        res = res + moreElementOfWay("D", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "D") {
        res = res + moreElementOfWay("H", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      $('div').text("ランダム要素を含みます");
      break;
    case "2-2":
      res = moreElementOfWay("C", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      res = res + moreSumOfElement("B", 1, 2, 3);
      if (res.slice(-5, -4) === "C") {
        res = res + moreElementOfWay("B", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      if (res.slice(-5, -4) === "B") {
        res = res + moreElementOfWay("A", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreElementOfWay("D", 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreElementOfWay("E", 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + elementOfSpWay("E", 0, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + randElementOfWay("D", "E");
      };
      if (res.slice(-5, -4) === "E") {
        res = res + moreElementOfWay("F", 0, 0, 0, 0, 0, 0, 2, 0, 0, 0);
      };
      if (res.slice(-5, -4) === "E") {
        res = res + lessSumOfElement("G", 5, 6, 2);
      };
      if (res.slice(-5, -4) === "E") {
        res = res + elementOfSpWay("F", 0, 1);
      };
      if (res.slice(-5, -4) === "E") {
        res = res + randElementOfWay("G", "K");
      };
      if (res.slice(-5, -4) === "F") {
        res = res + moreElementOfWay("H", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "G") {
        res = res + moreSumOfElement("H", 1, 2, 1);
      };
      if (res.slice(-5, -4) === "G" || res.slice(-5, -4) === "H") {
        res = res + moreElementOfWay("K", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      $('div').text("ランダム要素を多く含みます");
      break;
    case "2-3":
      res = leastElementOfWay("C", 1, 1, 1, 1, 1, 1, 1, 7, 1, 1);
      if (res === "") {
        res = res + randElementOfWay("A", "B");
      };
      if (res.slice(-5, -4) === "A") {
        res = res + moreElementOfWay("D", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "B") {
        res = res + moreElementOfWay("E", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        res = res + moreElementOfWay("F", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + randElementOfWay("D", "F");
      };
      if (res.slice(-5, -4) === "D") {
        res = res + leastElementOfWay("F", 0, 0, 0, 0, 0, 2, 0, 0, 0, 0);
      };
      if (res.slice(-5, -4) === "D") {
        res = res + moreElementOfWay("G", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "F") {
        res = res + moreElementOfWay("J", 0, 1, 1, 0, 1, 0, 0, 0, 1, 0);
      };
      if (res.slice(-5, -4) === "F") {
        res = res + randElementOfWay("G", "J");
      };
      if (res.slice(-5, -4) === "G") {
        res = res + lessSumOfElement("K", 4, 6, 1);
      };
      if (res.slice(-5, -4) === "G") {
        res = res + moreElementOfWay("I", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        res = res + moreElementOfWay("K", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "J") {
        res = res + moreSumOfElement("L", 0, 2, 5);
      };
      if (res.slice(-5, -4) === "J" || res.slice(-5, -4) === "K") {
        res = res + moreElementOfWay("N", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      $('div').text("ランダム要素を多く含みます");
      break;
    case "2-4":
      res = moreElementOfWay("B", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      res = res + moreSumOfElement("C", 0, 0, 2);
      if (res.slice(-5, -4) === "B") {
        res = res + moreSumOfElement("C", 1, 1, 1);
      };
      if (res.slice(-5, -4) === "B") {
        res = res + moreElementOfWay("G", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreSumOfElement("G", 9, 9, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + randElementOfWay("F", "G");
      };
      if (res.slice(-5, -4) === "F") {
        res = res + lessSumOfElement("A", 5, 5, 1);
      };
      if (res.slice(-5, -4) === "F") {
        res = res + moreElementOfWay("J", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "G") {
        res = res + moreElementOfWay("H", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "H") {
        res = res + moreSumOfElement("I", 3, 3, 2);
      };
      if (res.slice(-5, -4) === "H") {
        res = res + lessSumOfElement("I", 4, 4, 0);
      };
      if (res.slice(-5, -4) === "H") {
        res = res + lessSumOfElement("I", 5, 5, 3);
      };
      if (res.slice(-5, -4) === "H") {
        res = res + moreElementOfWay("L", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "I") {
        res = res + moreElementOfWay("K", 0, 0, 1, 0, 1, 0, 0, 0, 0, 0);
      };
      if (res.slice(-5, -4) === "I") {
        res = res + moreElementOfWay("E", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        res = res + moreElementOfWay("D", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "J") {
        res = res + moreSumOfElement("L", 0, 2, 4);
      };
      if (res.slice(-5, -4) === "J") {
        res = res + lessSumOfElement("L", 1, 1, 1);
      };
      if (res.slice(-5, -4) === "J") {
        res = res + moreElementOfWay("M", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "K") {
        res = res + moreSumOfElement("L", 5, 5, 2);
      };
      if (res.slice(-5, -4) === "K") {
        res = res + moreElementOfWay("O", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "L") {
        res = res + moreSumOfElement("P", 4, 5, 3);
      };
      if (res.slice(-5, -4) === "M") {
        res = res + moreElementOfWay("P", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      break;
    case "2-5":
      res = moreElementOfWay("B", 0, 0, 0, 2, 0, 0, 0, 4, 0, 0);
      if (res === "") {
        res = res + moreElementOfWay("C", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "B") {
        res = res + moreElementOfWay("A", 0, 0, 0, 0, 0, 0, 0, 3, 0, 0);
      };
      if (res.slice(-5, -4) === "B") {
        res = res + moreElementOfWay("F", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreElementOfWay("D", 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreSumOfElement("D", 1, 2, 3);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreElementOfWay("E", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "F") {
        res = res + moreSumOfElement("E", 4, 5, 3);
      };
      if (res.slice(-5, -4) === "F") {
        res = res + moreElementOfWay("J", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "E") {
        res = res + leastElementOfWay("G", 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
      };
      if (res.slice(-5, -4) === "E") {
        res = res + leastElementOfWay("G", 0, 0, 0, 0, 0, 3, 0, 0, 0, 0);
      };
      if (res.slice(-5, -4) === "E") {
        res = res + moreElementOfWay("I", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "G") {
        res = res + moreElementOfWay("I", 0, 0, 0, 0, 0, 4, 0, 0, 0, 0);
      };
      if (res.slice(-5, -4) === "G") {
        res = res + moreElementOfWay("L", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "I" || res.slice(-5, -4) === "J" || res.slice(-5, -4) === "L") {
        res = res + moreElementOfWay("O", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      $('div').text("要索敵 航巡はドラム缶を装備しているものとします");
      break;
    case "3-1":
      res = moreElementOfWay("C", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      if (res.slice(-5, -4) === "C") {
        res = res + lessSumOfElement("D", 5, 6, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreSumOfElement("D", 0, 2, 3);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreElementOfWay("F", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "D") {
        res = res + moreSumOfElement("E", 0, 2, 5);
      };
      if (res.slice(-5, -4) === "D") {
        res = res + moreElementOfWay("F", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "F") {
        res = res + moreElementOfWay("G", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      $('div').text("ランダム要素を多く含みます");
      break;
    case "3-2":
      res = moreSumOfElement("C", 0, 2, 1);
      if (res === "") {
        res = res + moreSumOfElement("C", 5, 5, 6);
      };
      if (res === "") {
        res = res + moreSumOfElement("A", 4, 4, 2);
      };
      if (res === "") {
        res = res + lessSumOfElement("A", 4, 4, 0);
      };
      if (res === "") {
        res = res + moreSumOfElement("C", 4, 5, 5);
      };
      if (res === "") {
        res = res + moreElementOfWay("A", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + lessSumOfElement("A", 5, 5, 3);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreSumOfElement("A", 0, 2, 2);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreElementOfWay("G", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "A") {
        res = res + moreElementOfWay("B", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "G") {
        res = res + moreSumOfElement("J", 1, 1, 1);
      };
      if (res.slice(-5, -4) === "G") {
        res = res + moreSumOfElement("J", 7, 7, 1);
      };
      if (res.slice(-5, -4) === "G") {
        res = res + moreSumOfElement("J", 0, 2, 2);
      };
      if (res.slice(-5, -4) === "G") {
        res = res + moreElementOfWay("H", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "H") {
        res = res + moreSumOfElement("I", 0, 3, 1);
      };
      if (res.slice(-5, -4) === "H") {
        res = res + moreSumOfElement("I", 6, 8, 1);
      };
      if (res.slice(-5, -4) === "H") {
        res = res + moreElementOfWay("F", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        res = res + moreElementOfWay("L", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      $('div').text("要高速統一 高速+以上統一,電探装備で E,F 寄りです");
      break;
    case "3-3":
      res = moreElementOfWay("A", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      res = res + moreSumOfElement("C", 1, 1, 1);
      if (res.slice(-5, -4) === "A") {
        res = res + moreSumOfElement("C", 0, 2, 4);
      };
      if (res.slice(-5, -4) === "A") {
        res = res + lessSumOfElement("B", 0, 2, 0);
        res = res + moreSumOfElement("B", 0, 2, 2);
      };
      if (res.slice(-5, -4) === "A") {
        res = res + lessSumOfElement("B", 4, 4, 0);
        res = res + moreSumOfElement("B", 4, 4, 2);
      };
      if (res.slice(-5, -4) === "A") {
        res = res + lessSumOfElement("B", 5, 5, 3);
      };
      if (res.slice(-5, -4) === "A") {
        res = res + moreElementOfWay("C", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "B") {
        res = res + moreElementOfWay("F", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreSumOfElement("E", 0, 2, 3);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + lessSumOfElement("E", 4, 5, 4);
      };
      if (res.slice(-5, -4) === "C" || res.slice(-5, -4) === "E") {
        res = res + moreElementOfWay("G", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "F") {
        res = res + moreSumOfElement("G", 0, 0, 3);
      };
      if (res.slice(-5, -4) === "F") {
        res = res + lessSumOfElement("G", 5, 5, 1);
      };
      if (res.slice(-5, -4) === "F") {
        res = res + moreElementOfWay("J", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      if (res.slice(-5, -4) === "G") {
        res = res + moreSumOfElement("I", 0, 2, 4);
      };
      if (res.slice(-5, -4) === "J") {
        res = res + lessSumOfElement("K", 4, 4, 0);
        res = res + moreSumOfElement("K", 4, 4, 2);
      };
      if (res.slice(-5, -4) === "J") {
        res = res + lessSumOfElement("K", 5, 5, 3);
      };
      if (res.slice(-5, -4) === "G" || res.slice(-5, -4) === "J" || res.slice(-5, -4) === "K") {
        res = res + moreElementOfWay("M", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      break;
    case "3-4":
      res = lessSumOfElement("A", 4, 6, 0);
      res = moreSumOfElement("A", 0, 2, 2);
      if (res === "") {
        res = moreSumOfElement("B", 0, 2, 1);
      };
      if (res === "") {
        res = moreSumOfElement("D", 0, 9, 1);
      };
      if (res.slice(-5, -4) === "A") {
        res = res + moreSumOfElement("C", 0, 9, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreSumOfElement("B", 1, 1, 3);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + lessSumOfElement("B", 4, 6, 0);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreSumOfElement("B", 0, 2, 5);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreSumOfElement("E => G", 8, 9, 1);
      };
      if (res.slice(-5, -4) === "C") {
        res = res + moreSumOfElement("F", 0, 9, 1);
      };
      if (res.slice(-5, -4) === "B" || res.slice(-5, -4) === "D") {
        res = res + moreSumOfElement("H", 0, 9, 1);
      };
      res = res + SumOfElement(true, res, "F", "G", 0, 3, 5);
      res = res + SumOfElement(true, res, "F", "G", 0, 2, 3);
      res = res + SumOfElement(false, res, "F", "M => P", 4, 4, 0);
      res = res + SumOfElement(true, res, "F", "J => P", 4, 5, 3);
      res = res + SumOfElement(true, res, "F", "M => P", 0, 9, 1);
      if (res.slice(-5, -4) === "H") {
        res = res + leastElementOfWay("G", 0, 1, 0, 0, 0, 3, 0, 0, 0, 0);
      };
      res = res + SumOfElement(true, res, "H", "G", 0, 2, 2);
      res = res + SumOfElement(false, res, "H", "G", 4, 4, 0);
      res = res + SumOfElement(false, res, "H", "G", 5, 5, 2);
      res = res + SumOfElement(true, res, "H", "L => N => P", 0, 9, 1);
      res = res + SumOfElement(true, res, "G", "J => P", 0, 9, 1);
      break;
    case "3-5":
      res = moreElementOfWay("B", 2, 1, 1, 0, 0, 0, 0, 3, 0, 0);
      res = res + SumOfElement(true, res, "", "B", 0, 3, 3);
      res = res + SumOfElement(true, res, "", "F", 5, 5, 4);
      res = res + SumOfElement("rand", res, "", "B", "F");
      res = res + SumOfElement(true, res, "B", "A", 1, 2, 4);
      res = res + SumOfElement(true, res, "B", "A", 7, 7, 4);
      res = res + SumOfElement(true, res, "B", "A", 0, 2, 5);
      res = res + SumOfElement(true, res, "B", "D => H", 0, 0, 3);
      res = res + SumOfElement(true, res, "B", "D => H", 1, 2, 2);
      res = res + SumOfElement(true, res, "B", "D => H", 0, 3, 5);
      res = res + SumOfElement(true, res, "B", "C => F", 1, 2, 1);
      res = res + SumOfElement(false, res, "B", "C => F", 4, 4, 0);
      res = res + SumOfElement(true, res, "B", "C => F", 4, 4, 2);
      res = res + SumOfElement(true, res, "B", "E => H", 5, 5, 2);
      res = res + SumOfElement(true, res, "B", "C => F", 0, 9, 1);
      res = res + SumOfElement(true, res, "F", "E => H", 0, 2, 1);
      res = res + SumOfElement(true, res, "F", "E => H", 4, 4, 4);
      res = res + SumOfElement(true, res, "F", "E => H", 3, 3, 2);
      res = res + SumOfElement(true, res, "F", "G => K", 0, 9, 1);
      res = res + SumOfElement(true, res, "H", "J", 0, 2, 4);
      res = res + SumOfElement(true, res, "H", "K", 0, 9, 1);
      break;
    case "7-1":
      res = moreElementOfWay("B", 1, 1, 1, 0, 0, 0, 0, 1, 0, 0);
      res = res + SumOfElement(true, res, "", "B", 0, 9, 6);
      res = res + SumOfElement(true, res, "", "D", 0, 9, 5);
      res = res + SumOfElement(false, res, "", "F", 0, 9, 4);
      res = res + SumOfElement(true, res, "B", "C => E", 5, 6, 2);
      res = res + SumOfElement(true, res, "B", "A => C => E", 0, 9, 1);
      res = res + SumOfElement(true, res, "D", "E", 5, 6, 4);
      if (res.slice(-5, -4) === "D") {
        res = res + moreElementOfWay("C => E", 1, 1, 1, 1, 0, 0, 0, 1, 0, 0);
      };
      res = res + SumOfElement(true, res, "D", "E", 0, 9, 1);
      if (res.slice(-5, -4) === "E" || res.slice(-5, -4) === "F") {
        res = res + moreElementOfWay("G => H", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      };
      res = res + SumOfElement(true, res, "H", "J", 0, 2, 1);
      res = res + SumOfElement(true, res, "H", "K", 0, 9, 1);
      break;
    case "7-2":
      res = SumOfElement(false, res, "", "A => B => C", 5, 6, 1);
      res = SumOfElement(true, res, "", "A => B => C", 7, 7, 1);
      if (SumOfElement("sum", res, "") === 6) {
        res = res + SumOfElement(true, res, "", "A => B => C", 1, 1, 2);
        res = res + SumOfElement(true, res, "", "A => B => C", 0, 1, 4);
        res = res + SumOfElement(true, res, "", "A => B => C", 4, 4, 3);
        res = res + SumOfElement(true, res, "", "B => C", 0, 9, 1);
      };
      if (SumOfElement("sum", res, "") === 5) {
        res = res + SumOfElement(true, res, "", "B => C", 4, 4, 2);
        res = res + SumOfElement(false, res, "", "B => C", 6, 6, 2);
        res = res + SumOfElement(true, res, "", "C", 0, 9, 1);
      };
      if (SumOfElement("sum", res, "") <= 4) {
        res = res + SumOfElement(false, res, "", "B => C", 5, 6, 2);
        res = res + SumOfElement(true, res, "", "C", 0, 9, 1);
      };
      res = res + moreElementOfWay("D", 0, 0, 0, 0, 0, 0, 0, 1, 0, 1);
      if (SumOfElement("sum", res, "C") === 6) {
        res = res + SumOfElement(true, res, "C", "E => G", 5, 6, 4);
        res = res + SumOfElement(true, res, "C", "D", 0, 9, 1);
      };
      if (SumOfElement("sum", res, "C") === 5) {
        res = res + SumOfElement(true, res, "C", "E => G", 5, 6, 4);
        res = res + SumOfElement(true, res, "C", "E => G", 6, 6, 3);
        res = res + SumOfElement(true, res, "C", "D", 0, 9, 1);
      };
      if (SumOfElement("sum", res, "C") <= 4) {
        res = res + SumOfElement(true, res, "C", "E => G", 5, 6, 3);
        res = res + SumOfElement(true, res, "C", "E => G", 6, 6, 2);
        res = res + SumOfElement(true, res, "C", "D", 0, 9, 1);
      };
      res = res + SumOfElement(true, res, "D", "H => I", 0, 2, 3);
      res = res + SumOfElement(true, res, "D", "I", 0, 9, 1);
      res = res + SumOfElement(true, res, "I", "J => K", 9, 9, 1);
      res = res + SumOfElement(false, res, "I", "M", 8, 8, 0);
      res = res + SumOfElement(false, res, "I", "M", 5, 6, 2);
      res = res + SumOfElement(true, res, "I", "J => K", 0, 9, 1);
      $('div').text("要索敵 要高速統一")
      break;
    case "4-1":
      res = res + SumOfElement("rand", res, "", "A => B => D", "C");
      res = res + SumOfElement(true, res, "C", "E", 0, 2, 4);
      res = res + SumOfElement(true, res, "C", "F", 0, 9, 1);
      res = res + SumOfElement(true, res, "F", "H", 5, 6, 6);
      res = res + SumOfElement(false, res, "F", "D", 4, 4, 0);
      res = res + SumOfElement(true, res, "F", "H", 5, 6, 4);
      res = res + SumOfElement(true, res, "F", "D", 0, 9, 1);
      res = res + SumOfElement(true, res, "D", "H", 0, 2, 5);
      res = res + SumOfElement(true, res, "D", "G => J", 0, 2, 4);
      res = res + SumOfElement(false, res, "D", "H", 0, 2, 0);
      res = res + SumOfElement(false, res, "D", "G => J", 4, 4, 0);
      res = res + SumOfElement(false, res, "D", "G => J", 3, 3, 0);
      res = res + SumOfElement(false, res, "D", "G => J", 3, 4, 2);
      res = res + SumOfElement(false, res, "D", "H", 3, 4, 3);
      res = res + SumOfElement(false, res, "D", "G => J", 5, 6, 1);
      res = res + SumOfElement(true, res, "D", "H", 5, 6, 4);
      res = res + SumOfElement(true, res, "D", "G => J", 5, 6, 3);
      res = res + SumOfElement(true, res, "D", "H", 7, 7, 1);
      res = res + SumOfElement("rand", res, "D", "H", "G => J");
      res = res + SumOfElement(true, res, "H", "I", 0, 2, 5);
      res = res + SumOfElement(true, res, "H", "I", 7, 7, 1);
      res = res + SumOfElement(true, res, "H", "J", 0, 9, 1);
      $('div').text("ランダム要素を含みます");
      break;
    case "4-2":
      res = res + SumOfElement(true, res, "", "A", 5, 6, 3);
      res = res + SumOfElement(true, res, "", "B => D", 0, 9, 1);
      if (numOfShip(7) >= 1) {
        res = res + SumOfElement("rand", res, "A", "C", "E => G");
      };
      res = res + SumOfElement(true, res, "A", "C", 0, 9, 1);
      res = res + SumOfElement(true, res, "D", "C", 5, 6, 2);
      res = res + SumOfElement(true, res, "D", "H", 0, 9, 1);
      res = res + SumOfElement(true, res, "C", "G", 0, 2, 3);
      res = res + SumOfElement(true, res, "C", "L", 4, 4, 1);
      res = res + SumOfElement(true, res, "C", "L", 5, 6, 4);
      res = res + SumOfElement(true, res, "C", "G", 0, 9, 1);
      res = res + SumOfElement(true, res, "H", "K", 0, 2, 5);
      res = res + SumOfElement(true, res, "H", "G", 0, 9, 1);
      res = res + SumOfElement(true, res, "G", "F => J", 7, 7, 1);
      res = res + SumOfElement(true, res, "G", "L", 0, 9, 1);
      break;
    case "4-3":
      res = res + SumOfElement(true, res, "", "C", 1, 1, 1);
      if (pieceOfElement(res, "", 5, 6) >= 4) {
        res = res + SumOfElement(false, res, "", "D => H => N", 0, 2, 0);
      };
      if (pieceOfElement(res, "", 5, 6) >= 3) {
        res = res + SumOfElement(true, res, "", "D => H => N", 4, 4, 1);
      };
      if (pieceOfElement(res, "", 5, 6) >= 2) {
        if (pieceOfElement(res, "", 4, 4) + pieceOfElement(res, "", 9, 9) > 0) {
          res = res + SumOfElement(true, res, "", "A", 0, 9, 1);
        };
      };
      res = res + SumOfElement("rand", res, "", "A", "C");
      res = res + SumOfElement(true, res, "A", "B", 8, 9, 1);
      res = res + SumOfElement(true, res, "A", "B", 0, 2, 1);
      res = res + SumOfElement(true, res, "A", "D => H => N", 0, 9, 1);
      res = res + SumOfElement(true, res, "B", "E => G", 0, 2, 3);
      res = res + SumOfElement(false, res, "B", "E => G", 5, 6, 1);
      res = res + SumOfElement(true, res, "B", "G", 0, 9, 1);
      if (pieceOfElement(res, "C", 4, 4) === 1) {
        if (pieceOfElement(res, "C", 5, 6) >= 2) {
          res = res + SumOfElement(false, res, "C", "D => H => N", 7, 7, 0);
        };
      };
      res = res + SumOfElement(true, res, "C", "F", 0, 9, 1);
      if (pieceOfElement(res, "F", 0, 2) <= 2) {
        res = res + SumOfElement(true, res, "F", "H => N", 5, 5, 2);
      };
      res = res + SumOfElement(true, res, "F", "K => L", 0, 9, 1);
      res = res + SumOfElement(false, res, "G", "J", 2, 2, 0);
      res = res + SumOfElement(true, res, "G", "H => N", 0, 9, 1);
      if (pieceOfElement(res, "L", 0, 2) >= 5 || pieceOfElement(res, "L", 4, 6) <= 0) {
        res = res + SumOfElement(false, res, "L", "M", 1, 2, 0);
      };
      res = res + SumOfElement(true, res, "L", "N", 0, 9, 1);
      break;
    case "4-4":
      res = res + SumOfElement(true, res, "", "A => E", 5, 6, 2);
      res = res + SumOfElement("rand", res, "", "A => E", "B");
      res = res + SumOfElement(true, res, "B", "A => E", 0, 2, 4);
      res = res + SumOfElement("rand", res, "B", "D => E", "F => I => K");
      res = res + SumOfElement(true, res, "E", "G => I => K", 0, 2, 4);
      if (pieceOfElement(res, "E", 3, 4) >= 1) {
        res = res + SumOfElement(true, res, "E", "I => K", 5, 6, 2);
      };
      res = res + SumOfElement(true, res, "E", "C", 6, 6, 3);
      if (pieceOfElement(res, "E", 6, 6) === 2) {
        if (pieceOfElement(res, "E", 9, 9) === 0) {
          res = res + elementOfSpWay("C", 0, 1);
        };
        if (pieceOfElement(res, "E", 9, 9) >= 1) {
          res = res + SumOfElement(true, res, "E", "C", 0, 9, 1);
        };
      };
      res = res + SumOfElement(true, res, "E", "I => K", 0, 9, 1);
      break;
    case "4-5":
      res = pushAlp("能動分岐", "A", "C");
      res = pushAlp("A", "B", "D");
      res = res + pushAlp("C", "D", "F");
      res = res + SumOfElement(true, res, "E", "M", 9, 9, 1);
      res = res + SumOfElement(true, res, "B", "E", 0, 9, 1);
      res = res + SumOfElement(true, res, "D", "H", 0, 9, 1);
      res = res + SumOfElement(true, res, "E", "M", 0, 2, 3);
      res = res + SumOfElement(false, res, "E", "K", 4, 4, 0);
      res = res + SumOfElement(false, res, "E", "K", 5, 6, 1);
      res = res + SumOfElement(true, res, "E", "M", 4, 6, 3);
      res = res + SumOfElement(true, res, "E", "M", 9, 9, 1);
      res = res + SumOfElement(true, res, "E", "K", 0, 9, 1);
      res = res + SumOfElement(true, res, "F", "I => J", 0, 9, 1);
      if (pieceOfElement(res, "J", 4, 4) === 1) {
        res = res + SumOfElement(true, res, "J", "H => T", 5, 6, 2);
      };
      res = res + SumOfElement(true, res, "J", "H", 0, 9, 1);
      if (pieceOfElement(res, "H", 4, 4) === 1) {
        res = res + SumOfElement(true, res, "H", "T", 5, 6, 3);
      };
      res = res + SumOfElement(true, res, "H", "K", 0, 9, 1);
      res = res + SumOfElement(true, res, "K", "M", 0, 1, 4);
      res = res + SumOfElement(true, res, "K", "M", 0, 2, 5);
      res = res + SumOfElement(true, res, "K", "T", 0, 9, 1);
      res = res + SumOfElement(false, res, "M", "N => T", 0, 1, 1);
      res = res + SumOfElement(true, res, "M", "R", 0, 9, 1);
      res = res + SumOfElement(false, res, "R", "S => Q", 3, 4, 0);
      res = res + SumOfElement(false, res, "R", "S => Q", 5, 5, 1);
      res = res + SumOfElement(true, res, "R", "N => T", 0, 9, 1);
      res = res + SumOfElement(true, res, "Q", "O", 0, 2, 5);
      res = res + SumOfElement(true, res, "Q", "N => T", 0, 9, 1);
      if (res.length <= 10) {
        res = "能動分岐を選んで下さいaaaa";
      };
      $('div').text("要索敵");
      break;
    case "5-1":
      res = res + SumOfElement(true, res, "", "A => D => E => G", 0, 2, 5);
      res = res + SumOfElement(true, res, "", "A => D => E => G", 0, 1, 4);
      res = res + SumOfElement(true, res, "", "B", 0, 9, 1);
      res = res + SumOfElement(false, res, "B", "C => F", 0, 0, 2);
      res = res + SumOfElement(true, res, "B", "E => G", 0, 9, 1);
      res = res + SumOfElement(false, res, "F", "H", 4, 5, 0);
      if (pieceOfElement(res, "F", 1, 1) === 0) {
        res = res + SumOfElement(true, res, "F", "H", 0, 2, 4);
      };
      if (pieceOfElement(res, "F", 4, 4) >= 1) {
        res = res + SumOfElement(true, res, "F", "J", 5, 5, 2);
        res = res + SumOfElement(true, res, "F", "G", 0, 9, 1);
      };
      res = res + SumOfElement(true, res, "F", "J", 5, 5, 3);
      res = res + SumOfElement(true, res, "F", "G", 0, 9, 1);
      res = res + SumOfElement(true, res, "G", "I", 0, 2, 5);
      res = res + SumOfElement(true, res, "G", "I", 1, 1, 1);
      res = res + SumOfElement(true, res, "G", "J", 0, 9, 1);
      break;
    case "5-2":
      res = res + SumOfElement(true, res, "", "B => C", 0, 9, 1);
      res = res + SumOfElement(false, res, "C", "E", 5, 5, 1);
      res = res + SumOfElement(true, res, "C", "D => F", 0, 9, 1);
      res = res + SumOfElement(true, res, "F", "I => O", 0, 1, 5);
      res = res + SumOfElement(true, res, "F", "O", 0, 9, 1);
      $('div').text("五航戦を編成して下さい");
      break;
    case "5-3":
      res = res + SumOfElement(true, res, "", "C => D => G", 0, 2, 3);
      res = res + SumOfElement(true, res, "", "D => G", 0, 9, 1);
      if (pieceOfElement(res, "G", 1, 1) >= 1 || pieceOfElement(res, "G", 2, 2) === 1) {
        res = res + SumOfElement(true, res, "G", "J", 7, 7, 1);
        res = res + SumOfElement(true, res, "G", "J", 0, 9, 1);
      };
      res = res + SumOfElement(true, res, "G", "I", 0, 9, 1);
      res = res + SumOfElement(true, res, "I", "J", 0, 0, 2);
      res = res + SumOfElement(true, res, "I", "J", 2, 2, 1);
      res = res + SumOfElement(true, res, "I", "O", 0, 9, 1);
      res = res + SumOfElement(true, res, "J", "M", 0, 2, 4);
      res = res + SumOfElement(true, res, "J", "M", 1, 1, 1);
      res = res + SumOfElement(true, res, "J", "M", 2, 2, 2);
      res = res + SumOfElement(true, res, "J", "L => O", 0, 9, 1);
      if (res.slice(-5, -4) === "O") {
        res = res + pushAlp("能動分岐", "K", "P");
        res = res.replace("能動分岐 => ", "");
      };
      res = res + SumOfElement(true, res, "P", "K", 0, 9, 1);
      res = res + SumOfElement(true, res, "K", "H", 5, 5, 4);
      if (pieceOfElement(res, "K", 4, 4) === 1) {
        res = res + SumOfElement(true, res, "K", "H", 5, 5, 3);
      };
      res = res + SumOfElement(true, res, "K", "E => Q", 0, 9, 1);
      $('div').text("要高速統一");
      break;
    case "5-4":
      res = res + SumOfElement(true, res, "", "A", 0, 0, 3);
      res = res + SumOfElement(true, res, "", "A", 3, 3, 5);
      res = res + SumOfElement(true, res, "", "B", 0, 9, 1);
      res = res + SumOfElement(true, res, "A", "D", 0, 0, 5);
      res = res + SumOfElement(true, res, "A", "D", 3, 3, 3);
      res = res + SumOfElement(true, res, "A", "D", 5, 5, 2);
      res = res + SumOfElement(true, res, "A", "D", 7, 7, 1);
      res = res + SumOfElement(true, res, "A", "F => H => I => J => M => P", 0, 9, 1);
      res = res + SumOfElement(true, res, "B", "C => G", 1, 2, 1);
      res = res + SumOfElement(true, res, "B", "C => G", 7, 7, 1);
      res = res + SumOfElement(true, res, "B", "E => H => I => J => M => P", 5, 5, 3);
      res = res + SumOfElement(true, res, "B", "D", 0, 9, 1);
      res = res + SumOfElement(true, res, "D", "E => H => I => J => M", 5, 5, 2);
      res = res + SumOfElement(true, res, "D", "F => H => I => J => M", 0, 9, 1);
      res = res + SumOfElement(false, res, "G", "L => P", 1, 1, 2);
      res = res + SumOfElement(true, res, "G", "K => L => P", 0, 9, 1);
      $('div').text("要索敵　要高速統一")
      break;
    case "5-5":
      res = res + SumOfElement(true, res, "", "A => C => E => G => I", 3, 3, 4);
      res = res + SumOfElement(true, res, "", "A => C => E => G => I", 5, 5, 4);
      res = res + SumOfElement(true, res, "", "B", 0, 9, 1);
      res = res + SumOfElement(true, res, "B", "F", 5, 5, 2);
      res = res + SumOfElement(true, res, "B", "K => P => S", 0, 9, 1);
      if (res.slice(-5, -4) === "F") {
        res = res + pushAlp("能動分岐", "D", "J");
        res = res.replace("能動分岐 => ", "");
      }
      res = res + SumOfElement(true, res, "D", "H", 0, 9, 1);
      res = res + SumOfElement(true, res, "J", "P => S", 0, 9, 1);
      res = res + SumOfElement(true, res, "H", "P => S", 0, 2, 4);
      res = res + SumOfElement(false, res, "H", "L => N", 5, 5, 1);
      res = res + SumOfElement(true, res, "H", "N", 0, 9, 1);
      if (pieceOfElement(res, "I", 0, 2) === 3) {
        res = res + SumOfElement(true, res, "I", "L => N", 5, 5, 2);
      };
      res = res + SumOfElement(true, res, "I", "M", 0, 9, 1);
      res = res + SumOfElement(true, res, "M", "L => N => O => S", 0, 2, 4);
      res = res + SumOfElement(false, res, "M", "L => N => O => S", 5, 5, 1);
      res = res + SumOfElement(true, res, "M", "O => S", 0, 9, 1);
      res = res + SumOfElement(true, res, "N", "M => O => S", 1, 1, 1);
      res = res + SumOfElement(true, res, "N", "M => O => S", 0, 2, 3);
      res = res + SumOfElement(false, res, "N", "M => O => S", 5, 5, 1);
      res = res + SumOfElement(true, res, "N", "O => S", 0, 9, 1);
      $('div').text("航巡はドラム缶を装備しているものとします")
      break;
    case "6-1":
      res = res + SumOfElement(true, res, "", "B", 0, 3, 3);
      res = res + SumOfElement(true, res, "", "B", 0, 0, 2);
      if (pieceOfElement(res, "", 0, 6) === 0 && pieceOfElement(res, "", 8, 9) === 0){
      res = res + SumOfElement(true, res, "", "A", 7, 7, 3);
      };
      if ((pieceOfElement(res, "", 4, 5) === 1 || pieceOfElement(res, "", 5, 5) === 2) && pieceOfElement(res, "", 7, 7) >= 3){
        res = res + elementOfSpWay("A", 0, 1);
      };
      res = res + SumOfElement(false, res, "", "B", 4, 5, 0);
      res = res + SumOfElement(true, res, "", "C => F => G", 0, 9, 1);
      res = res + SumOfElement(true, res, "A", "F => G", 7, 7, 1);
      res = res + SumOfElement(true, res, "A", "D => F => G", 0, 9, 1);
      res = res + SumOfElement(false, res, "G", "I", 7, 7, 2);
      res = res + SumOfElement(true, res, "G", "I", 0, 3, 2);
      res = res + SumOfElement(true, res, "G", "H => K", 0, 9, 1);
      break;
    case "6-2":
      res = res + SumOfElement(true, res, "", "B", 4, 5, 4);
      if (pieceOfElement(res, "", 3, 3) <= 1 && pieceOfElement(res, "", 7, 7) <= 4 && pieceOfElement(res, "", 8, 8) <= 1) {
        res = res + SumOfElement(true, res, "", "B", 0, 2, 4);
      };
      res = res + SumOfElement(true, res, "", "C", 0, 9, 1);
      res = res + SumOfElement(true, res, "B", "D", 4, 5, 5);
      res = res + SumOfElement(true, res, "B", "C", 0, 9, 1);
      res = res + SumOfElement(true, res, "C", "A", 0, 2, 5);
      res = res + SumOfElement(true, res, "C", "A", 0, 3, 6);
      if (pieceOfElement(res, "C", 0, 2) + pieceOfElement(res, "C", 7, 7) >= 6) {
        res = res + SumOfElement(true, res, "C", "A", 0, 9, 1);
      };
      res = res + SumOfElement(true, res, "C", "A", 7, 7, 6);
      res = res + SumOfElement(false, res, "C", "E", 0, 2, 2);
      res = res + SumOfElement(true, res, "C", "D", 0, 9, 1);
      res = res + SumOfElement(false, res, "D", "F => I => K", 5, 5, 2);
      res = res + SumOfElement(true, res, "D", "F => I => K", 0, 2, 1);
      res = res + SumOfElement(false, res, "D", "F => I => K", 4, 5, 4);
      res = res + SumOfElement(true, res, "D", "H => K", 0, 9, 1);
      res = res + SumOfElement(true, res, "E", "F => I => K", 0, 0, 2);
      res = res + SumOfElement(true, res, "E", "F => I => K", 1, 2, 2);
      res = res + SumOfElement(false, res, "E", "F => I => K", 5, 5, 1);
      res = res + SumOfElement(true, res, "E", "J => K", 0, 9, 1);
      break;
    case "6-3":
      res = res + SumOfElement(true, res, "", "A", 0, 9, 1);
      if (res.slice(-5, -4) === "A") {
        res = res + pushAlp("能動分岐", "B", "C");
        res = res.replace("能動分岐 => ", "");
      };
      res = res + SumOfElement(true, res, "B", "D => E", 0, 9, 1);
      res = res + SumOfElement(true, res, "C", "E", 0, 9, 1);
      if (pieceOfElement(res, "E", 4, 4) <= 1 && pieceOfElement(res, "E", 8, 8) <= 1) {
        res = res + SumOfElement(true, res, "E", "G => H => J", 5, 5, 3);
      };
      res = res + SumOfElement(true, res, "E", "F => H => J", 0, 9, 1);
      if (pieceOfElement(res, res.slice(-5, -4), 0, 3) > 0 || pieceOfElement(res, res.slice(-5, -4), 6, 7) > 0 || pieceOfElement(res, res.slice(-5, -4), 9, 9) > 0) {
        res = "駆逐艦 軽巡洋艦 水上機母艦のみで編成して下さいaaaa";
      };
      break;
    case "6-4":
      res = res + SumOfElement(true, res, "", "M => K", 1, 2, 1);
      res = res + SumOfElement(true, res, "", "M => K", 3, 3, 3);
      res = res + SumOfElement(true, res, "", "B", 5, 5, 4);
      res = res + SumOfElement(true, res, "", "A", 5, 5, 2);
      res = res + SumOfElement(true, res, "", "M => K", 0, 9, 1);
      if (pieceOfElement(res, "A", 3, 3) === 1 || pieceOfElement(res, "A", 4, 4) >= 1 || pieceOfElement(res, "A", 5, 5) >= 3) {
        res = res + elementOfSpWay("D => C => F => N", 1, 0);
      };
      res = res + SumOfElement(true, res, "A", "E", 0, 0, 1);
      res = res + SumOfElement(true, res, "A", "D => C => F => N", 5, 5, 3);
      res = res + SumOfElement(true, res, "A", "E", 0, 9, 1);
      if (pieceOfElement(res, "E", 0, 9) >= 1) {
        res = res + elementOfSpWay("D => C => F => N", 1, 0);
      };
      if (pieceOfElement(res, "E", 3, 3) <= 1) {
        res = res + SumOfElement(true, res, "E", "D => C => F => N", 4, 4, 1);
      };
      res = res + SumOfElement(true, res, "E", "G => D => C => F => N", 0, 9, 1);
      res = res + SumOfElement(true, res, "K", "H => J", 0, 0, 2);
      if (pieceOfElement(res, "K", 0, 0) + pieceOfElement(res, "K", 3, 3) >= 3) {
        res = res + SumOfElement(true, res, "K", "H => J", 0, 9, 1);
      };
      res = res + SumOfElement(true, res, "K", "J", 5, 5, 2);
      res = res + SumOfElement(true, res, "K", "H => J", 0, 9, 1);
      res = res + SumOfElement(true, res, "J", "L => I => N", 1, 2, 2);
      res = res + SumOfElement(false, res, "J", "L => I => N", 4, 4, 0);
      res = res + SumOfElement(true, res, "J", "I => N", 0, 9, 1);
      $('div').text("要高速統一 航巡必須 戦艦を2隻以上編成時、長門型改二を編成して下さい");
      break;
    case "6-5":
      res = res + SumOfElement(false, res, "", "A => C", 4, 4, 0);
      res = res + SumOfElement(true, res, "", "A => C", 1, 2, 1);
      res = res + SumOfElement(true, res, "", "A => C", 0, 0, 4);
      res = res + SumOfElement(true, res, "", "B", 0, 9, 1);
      if (pieceOfElement(res, "B", 0, 0) === 3) {
        res = res + SumOfElement(true, res, "B", "C", 0, 9, 1);
      };
      res = res + SumOfElement(false, res, "B", "C", 5, 5, 1);
      res = res + SumOfElement(true, res, "B", "F => I", 0, 9, 1);
      res = res + SumOfElement(false, res, "C", "E", 5, 5, 0);
      res = res + SumOfElement(true, res, "C", "E", 0, 2, 4);
      res = res + SumOfElement(true, res, "C", "E", 0, 3, 5);
      res = res + SumOfElement(true, res, "C", "D => G => M", 0, 9, 1);
      if (pieceOfElement(res, "E", 1, 2) > 0 && pieceOfElement(res, "E", 4, 4) > 0) {
        res = res + SumOfElement(true, res, "E", "H => G => M", 5, 5, 1);
      };
      res = res + SumOfElement(true, res, "E", "I", 0, 9, 1);
      res = res + SumOfElement(true, res, "I", "H => G => M", 4, 4, 0);
      res = res + SumOfElement(true, res, "I", "J => M", 5, 5, 2);
      if (pieceOfElement(res, "I", 0, 0) === 0 && pieceOfElement(res, "I", 1, 3) < 5 && pieceOfElement(res, "I", 1, 2) < 3) {
        res = res + SumOfElement(false, res, "I", "J => M", 3, 3, 4);
      };
      res = res + SumOfElement(true, res, "I", "H => G => M", 0, 9, 1);
      break;
  };
  if (res === "") {
    res = "艦隊を選択して下さいaaaa";
  };
  res = res.slice(0, -4);
  return res;
};