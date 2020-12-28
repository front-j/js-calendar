let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDay();
let date = today.getDate();

function getCalendar() {
  const daysLabels = ["일", "월", "화", "수", "목", "금", "토"];
  showDays = "<tr>";
  for (i = 0; i <= 6; i++) {
    showDays += "<th>" + daysLabels[i] + "</th>";
  }

  function getDates() {
    first_date = new Date(year, month - 1, 1);
    first_day = first_date.getDay();
    last_date = new Date(year, month, 0);

    let col = 0;
    showDates = "";
    // 1일 전은 공백처리
    for (i = 0; i < first_day; i++) {
      showDates += "<td></td>";
      col++;
    }

    // 1일부터 마지막날짜까지 출력
    for (j = 1; j <= last_date.getDate(); j++) {
      // 휴일은 색상 변경
      if (new Date(year, month - 1, j).getDay() === 6) {
        showDates += "<td style='color:blue;'>" + j + "</td>";
      } else if (new Date(year, month - 1, j).getDay() === 0) {
        showDates += "<td style='color:red;'>" + j + "</td>";
      } else {
        showDates += "<td>" + j + "</td>";
      }
      col++;
      // 행 바꾸기
      if (col === 7) {
        showDates += "</tr><tr>";
        col = 0;
      }
    }
  }

  getDates();
  document.getElementById("cal-right").innerHTML = `
  <button onclick="lastMonth()">◀</button> ${year}년 ${month}월 <button onclick="nextMonth()">▶</button>
  <table>${showDays}</tr>${showDates}</tr></table>`;

  // 오늘 날짜 가져오기
  const todayDay = daysLabels[day];
  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth() + 1;

  document.getElementById("cal-left").innerHTML = `
  <h2>Today</h2>
  <h1>${todayYear}년 ${todayMonth}월</h1>
  <p id="date">${date}</p>
  <h2>${todayDay}요일</h2>`;
}

function lastMonth() {
  if (month != 1) month--;
  else if (month == 1) {
    month = 12;
    year--;
  }
  today = new Date(year, month, 1);
  new getCalendar();
}

function nextMonth() {
  if (month != 12) month++;
  else {
    month = 1;
    year++;
  }
  today = new Date(year, month, 1);
  new getCalendar();
}

getCalendar();
