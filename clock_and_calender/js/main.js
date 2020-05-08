'use strict';
function clock(){ // 全体をメソッド化

/*
-*-*-* htmlのセレクタについて *-*-*-
#tmr:時刻の表示部分 
#cldr:日付の表示部分
#cldrDate:曜日の表示部分

*/

/* 日付の取得　*/
let today = new Date();　//日時を取得

/* 数値が一桁だった場合は十の位に0を追加　*/
const addZero = function(value){
  if (value < 10){
    value = '0' + value;
  }
  return value;
};

/* カレンダー部分　--------------------------------------------------------------*/

/* 曜日の配列　*/
const weeks = ["日", "月", "火", "水", "木", "金", "土"];

/* 曜日の取得　*/
let week = today.getDay();

/* 日付の取得　*/
let year = today.getFullYear();
let month = addZero(today.getMonth() + 1);　//月は0〜11までで取得されるため+1する
let date = addZero(today.getDate());


/* 表示用の日付の表示内容の指定　*/
const cldrText = `${year} / ${month} / ${date}`;

/* 本日の曜日の表示内容の指定　*/
let cldrWeek = `本日は ${weeks[week]}曜日 です。`;

/* 表示するIDをHTMLから取得　*/
const cldrDiv = document.getElementById('cldr');
const cldrP = document.getElementById('cldrDate');

/* 指定したIDに内容を表示する　*/
cldrDiv.innerHTML = cldrText;
cldrP.innerHTML = cldrWeek;

/* 時計部分　--------------------------------------------------------------*/

let hour = today.getHours(); //時間は午前午後判定をするため、addZeroを後で実行
let min = addZero(today.getMinutes());
let sec = addZero(today.getSeconds());
let ampm = ''; //午前午後の表示用

/* 午前午後の判定 ----------------------------------------------------------*/

if(hour >= 12){
  ampm = 'PM'
  hour = addZero(hour - 12); //時刻から12を引いて一桁の場合は10の桁に0を表示
} else {
  ampm = 'AM'
  addZero(hour); //一桁の場合は10の桁に0を表示
}

/* 午前午後の判定 ----------------------------------------------------------*/

const timeText = `<span>${ampm}</span> ${hour}:${min}:${sec}`;
const tmrP = document.getElementById('tmr');
tmrP.innerHTML = timeText;

}

setInterval(clock,500);//500ミリ秒ごとにclockメソッドを再読み込み
