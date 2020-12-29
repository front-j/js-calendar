# Vanilla JavaScript로 캘린더 만들기
<img src=/result.gif width=860px height=500px></img>

*Internet Explorer에서는 정상 작동하지 않을 수 있습니다. (Chrome, Edge 권장)*

---

## review
- 좌우로 나누어 좌측은 **오늘 날짜**를 알려주고, 우측은 **캘린더**를 보여주게 구성
- 날짜는 내장함수 `Date`를 사용하여 가져옴 (`getFullYear`, `getMonth`, `getDate`, `getDay`)
- 좌우 버튼으로 이전 달과 다음 달로 이동하는 `function`구현
- 주말(토, 일) 색상 변경 → 토요일 `Date().getDay()===6`은 파란색, 일요일 `Date().getDay()===0`은 빨간색으로 표현
(공휴일은 추가하지 않았음)
- 오늘 날짜를 가져와 `getElementById().innerHTML`로 넣어줌
- 캘린더의 색상을 선택할 수 있는 기능을 넣고 싶어서 따로 추가하였음 (`addEventListener`를 사용하여 색상 버튼 클릭 시 변경되도록 구현)
