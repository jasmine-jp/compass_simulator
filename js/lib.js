function selectedShip(n) {
  var ship = [
    $('#form1 option:selected').val(),
    $('#form2 option:selected').val(),
    $('#form3 option:selected').val(),
    $('#form4 option:selected').val(),
    $('#form5 option:selected').val(),
    $('#form6 option:selected').val()
  ];
  return ship[n];
};

function numOfShip(x) {
  var numOfBb = 0; var numOfCv = 0; var numOfCvl = 0; var numOfCa = 0; var numOfCl = 0;
  var numOfDd = 0; var numOfDe = 0; var numOfSs = 0; var numOfAv = 0; var numOfAo = 0;
  var numOfSp1 = 0; var numOfSp2 = 0;
  for (n = 0; n < 6; n++) {
    switch (selectedShip(n)) {
      case "Bb": numOfBb++; break; case "Cv": numOfCv++; break; case "Cvl": numOfCvl++; break;
      case "Ca": numOfCa++; break; case "Cl": numOfCl++; break; case "Dd": numOfDd++; break;
      case "De": numOfDe++; break; case "Ss": numOfSs++; break; case "Av": numOfAv++; break;
      case "Ao": numOfAo++; break; case "Sp1": numOfSp1++; break; case "Sp2": numOfSp2++; break;
    };
    var numOfShip = [
      numOfBb, numOfCv, numOfCvl, numOfCa, numOfCl, numOfDd, numOfDe, numOfSs, numOfAv,
      numOfAo, numOfSp1, numOfSp2
    ];
  };
  return numOfShip[x];
};

function elementOfSpWay(word, sp1, sp2) {
  var req = "";
  if (sp1 != 0 && sp1 === numOfShip(10)) {
    req = word + " => ";
  } else {
    req = req + "";
  };
  if (sp2 != 0 && sp2 === numOfShip(11)) {
    req = word + " => ";
  } else {
    req = req + "";
  };
  return req;
};

function leastElementOfWay(word, bb, cv, cvl, ca, cl, dd, de, ss, av, ao) {
  var kindOfShip = [bb, cv, cvl, ca, cl, dd, de, ss, av, ao]; var req = "";
  for (x = 0; x < 10; x++) {
    if (kindOfShip[x] > 0 && numOfShip(x) > 0 && numOfShip(x) < kindOfShip[x]) {
      req = word + " => ";
    } else if (kindOfShip[x] > 0 && numOfShip(x) >= kindOfShip[x]) {
        break;
      };
  };
  return req;
};

function moreElementOfWay(word, bb, cv, cvl, ca, cl, dd, de, ss, av, ao) {
  var kindOfShip = [bb, cv, cvl, ca, cl, dd, de, ss, av, ao]; var req = "";
  for (x = 0; x < 10; x++) {
    if (kindOfShip[x] > 0 && numOfShip(x) >= kindOfShip[x]) {
      req = word + " => ";
    } else if (kindOfShip[x] > 0 && numOfShip(x) < kindOfShip[x]) {
        req = req + "";
      };
  };
  return req;
};

function randElementOfWay(a, b) {
  var x = Math.floor(Math.random() * 2);
  if (x === 0) {
    return a + " => ";
  } else {
    return b + " => ";
  };
};

function lessSumOfElement(word, start, fin, num) {
  var sum = 0; var req = "";
  for (x = start; x <= fin; x++) {
    sum = sum + numOfShip(x);
  };
  if (num >= sum) {
    req = word + " => ";
  };
  return req;
};

function moreSumOfElement(word, start, fin, num) {
  var sum = 0; var req = "";
  for (x = start; x <= fin; x++) {
    sum = sum + numOfShip(x);
  };
  if (sum != 0 && num <= sum) {
    req = word + " => ";
  };
  return req;
};

function SumOfElement(more, res, nowstr, pushstr, stanum, finnum, num) {
  var req = "";
  if (res.slice(-5, -4) != nowstr) {
    return req;
  };
  if (more === true) {
    req = moreSumOfElement(pushstr, stanum, finnum, num);
  } else if (more === false) {
    req = lessSumOfElement(pushstr, stanum, finnum, num);
  } else if (more === "rand") {
    req = randElementOfWay(pushstr, stanum);
  } else {
    req = 0;
    for (x = 0; x <= 9; x++) {
      req = req + numOfShip(x);
    };
  };
  return req;
};

function pieceOfElement(res, nowstr, sta, fin) {
  var req = 0;
  if (res.slice(-5, -4) != nowstr) {
    return req;
  };
  for (x = sta; x <= fin; x++) {
    req = req + numOfShip(x);
  };
  return req;
};