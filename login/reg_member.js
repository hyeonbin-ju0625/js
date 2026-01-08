// window.onload = function(){ ... } 을 아예 삭제!
var clock = document.getElementById("clock");

// clock 태그가 있는 페이지에서만 시계가 작동하게 체크
if (clock) {
    setInterval(x, 1000);
    x(); // 처음 실행 시 1초 대기 없애기
}

function x() {
    var now = new Date();
    var result = 
        now.getFullYear() + "년 " 
        + (now.getMonth() + 1) + "월 " 
        + now.getDate() + "일 "
        + now.getHours() + "시 "
        + now.getMinutes() + "분 "
        + now.getSeconds() + "초 ";
    
    if (clock) clock.innerHTML = result;
}