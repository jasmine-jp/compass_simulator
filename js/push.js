$(function() {
  $('#selectShip').clone().appendTo('#form2');
  $('#selectShip').clone().appendTo('#form3');
  $('#selectShip').clone().appendTo('#form4');
  $('#selectShip').clone().appendTo('#form5');
  $('#selectShip').clone().appendTo('#form6');
});

function changeArea() {
  var areaNum = $('#selectArea option:selected').val();
  $('img').attr('src', "img/" + areaNum + ".png");
  pushRecoFleet(areaNum);
  $('p').text("シミュレートボタンを押してください");
  $('div').text("※航巡、雷巡は重巡としています");
  $('#activeSelect').attr('hidden', true);
  $('#button2').attr('hidden', true);
};

function pushWay() {
  var areaNum = $('#selectArea option:selected').val();
  $('p').text(way(areaNum));
};

function pushRecoShip(a, b, c, d, e, f) {
  $('#fleet1').text(a);
  $('#fleet2').text(b);
  $('#fleet3').text(c);
  $('#fleet4').text(d);
  $('#fleet5').text(e);
  $('#fleet6').text(f);
};

function pushRecoFleet(areaNum) {
  switch (areaNum) {
    case "1-1":
      pushRecoShip("駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦", "なし", "なし");
      break;
    case "1-2":
      pushRecoShip("軽巡洋艦", "駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦", "なし");
      break;
    case "1-3":
      pushRecoShip("軽空母", "軽空母", "駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦");
      break;
    case "1-4":
      pushRecoShip("軽巡洋艦", "駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦");
      break;
    case "1-5":
      pushRecoShip("海防艦", "海防艦", "海防艦", "海防艦", "なし", "なし");
      break;
    case "1-6":
      pushRecoShip("軽巡洋艦", "駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦");
      break;
    case "2-1":
      pushRecoShip("軽巡洋艦", "駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦", "水上機母艦");
      break;
    case "2-2":
      pushRecoShip("軽空母", "軽空母", "軽巡洋艦", "海防艦", "海防艦", "水上機母艦");
      break;
    case "2-3":
      pushRecoShip("軽空母", "軽空母", "軽巡洋艦", "駆逐艦", "駆逐艦", "水上機母艦");
      break;
    case "2-4":
      pushRecoShip("重巡洋艦", "軽巡洋艦", "駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦");
      break;
    case "2-5":
      pushRecoShip("正規空母", "軽空母", "軽巡洋艦", "駆逐艦", "駆逐艦", "駆逐艦");
      break;
    case "3-1":
      pushRecoShip("正規空母", "軽空母", "重巡洋艦", "軽巡洋艦", "駆逐艦", "駆逐艦");
      break;
    case "3-2":
      pushRecoShip("軽巡洋艦", "駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦");
      break;
    case "3-3":
      pushRecoShip("正規空母", "軽空母", "重巡洋艦", "軽巡洋艦", "駆逐艦", "駆逐艦");
      break;
    case "3-4":
      pushRecoShip("正規空母", "正規空母", "軽空母", "軽空母", "軽巡洋艦", "水上機母艦");
      break;
    case "3-5":
      pushRecoShip("軽巡洋艦", "駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦");
      break;
    case "7-1":
      pushRecoShip("軽巡洋艦", "駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦", "なし");
      break;
    case "7-2":
      pushRecoShip("戦艦", "正規空母", "軽空母", "重巡洋艦", "駆逐艦", "駆逐艦");
      break;
    case "4-1":
      pushRecoShip("軽空母", "軽空母", "軽巡洋艦", "軽巡洋艦", "軽巡洋艦", "軽巡洋艦");
      break;
    case "4-2":
      pushRecoShip("軽空母", "軽空母", "軽巡洋艦", "駆逐艦", "駆逐艦", "駆逐艦");
      break;
    case "4-3":
      pushRecoShip("正規空母", "正規空母", "重巡洋艦", "重巡洋艦", "駆逐艦", "駆逐艦");
      break;
    case "4-4":
      pushRecoShip("軽空母", "軽空母", "軽空母", "軽巡洋艦", "海防艦", "海防艦");
      break;
    case "4-5":
      pushRecoShip("正規空母", "正規空母", "正規空母", "重巡洋艦", "重巡洋艦", "重巡洋艦");
      break;
    case "5-1":
      pushRecoShip("戦艦", "戦艦", "戦艦", "軽巡洋艦", "駆逐艦", "駆逐艦");
      break;
    case "5-2":
      pushRecoShip("戦艦", "正規空母", "正規空母", "重巡洋艦", "駆逐艦", "駆逐艦");
      break;
    case "5-3":
      pushRecoShip("戦艦", "重巡洋艦", "重巡洋艦", "軽巡洋艦", "駆逐艦", "駆逐艦");
      break;
    case "5-4":
      pushRecoShip("戦艦", "重巡洋艦", "軽巡洋艦", "駆逐艦", "駆逐艦", "駆逐艦");
      break;
    case "5-5":
      pushRecoShip("戦艦", "戦艦", "正規空母", "正規空母", "重巡洋艦", "重巡洋艦");
      break;
    case "6-1":
      pushRecoShip("正規空母", "軽巡洋艦", "軽巡洋艦", "潜水艦", "潜水艦", "潜水艦");
      break;
    case "6-2":
      pushRecoShip("戦艦", "正規空母", "重巡洋艦", "軽巡洋艦", "駆逐艦", "駆逐艦");
      break;
    case "6-3":
      pushRecoShip("軽巡洋艦", "駆逐艦", "駆逐艦", "駆逐艦", "駆逐艦", "水上機母艦");
      break;
    case "6-4":
      pushRecoShip("戦艦", "重巡洋艦", "軽巡洋艦", "駆逐艦", "駆逐艦", "秋津洲");
      break;
    case "6-5":
      pushRecoShip("戦艦", "重巡洋艦", "重巡洋艦", "軽巡洋艦", "駆逐艦", "駆逐艦");
      break;
  };
};

function pushDisSp() {
  if (numOfShip(10) === 1) {
    $('option[value="Sp1"]').prop("disabled", true);
  } else {
    $('option[value="Sp1"]').prop("disabled", false);
  };
  if (numOfShip(11) === 1) {
    $('option[value="Sp2"]').prop("disabled", true);
  } else {
    $('option[value="Sp2"]').prop("disabled", false);
  };
};

function pushAlp(stastr1, stastr2, stastr3) {
  $('#activeSelect').attr('hidden', false);
  $('#button2').attr('hidden', false);
  var req = "";
  if ($('#form7 option:selected').text() === stastr1) {
    $('option[value="1st"]').text(stastr2);
    $('option[value="2nd"]').text(stastr3);
  };
  if ($('#form7 option[value="1st"]:selected').text() === stastr2) {
    req = stastr1 + " => " + stastr2 + " => ";
    $('#form7 option[value="1st"]').attr('selected', false);
  };
  if ($('#form7 option[value="2nd"]:selected').text() === stastr3) {
    req = stastr1 + " => " + stastr3 + " => ";
    $('#form7 option[value="2nd"]').attr('selected', false);
  };
  return req;
};