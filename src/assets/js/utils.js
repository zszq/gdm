/** 
 * 时间戳转化为年 月 日 时 分 秒 
 * number: 传入时间戳 
 * format：返回格式，支持自定义，如YY-MM-DD 
 */
export function formatTime(number, format) {
  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];
  var date = new Date(number * 1000);

  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));
  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;

  function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
}

// 获取当前年、月、日、时、分、秒、星期
export function time() {
  var today = new Date();
  var year, Mon, date, Hou, Min, Sec, day;

  year = today.getFullYear();
  Mon = today.getMonth() + 1;
  Mon = Mon < 10 ? "0" + Mon : Mon;
  date = today.getDate();
  date = date < 10 ? "0" + date : date;
  Hou = today.getHours();
  Hou = Hou < 10 ? "0" + Hou : Hou;
  Min = today.getMinutes();
  Min = Min < 10 ? "0" + Min : Min;
  Sec = today.getSeconds();
  Sec = Sec < 10 ? "0" + Sec : Sec;
  var d = today.getDay();
  if (d == 0) {
    day = "日";
  } else if (d == 1) {
    day = "一";
  } else if (d == 2) {
    day = "二";
  } else if (d == 3) {
    day = "三";
  } else if (d == 4) {
    day = "四";
  } else if (d == 5) {
    day = "五";
  } else if (d == 6) {
    day = "六";
  }
  return (Hou + ":" + Min + ":" + Sec + " " + "星期" + day + " " + year + "年" + Mon + "月" + date + "日");
}

