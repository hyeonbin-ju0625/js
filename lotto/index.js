var userNum = [];

for (var i = 0; i < 6; i++) {
    while (true) {
        var choice = prompt((i + 1) + "번 숫자를 고르세요(1~45까지)");
        if (choice > 0 && choice < 46) {
            userNum[i] = choice;
            break;
        }
    }
}

document.write("사용자 번호 : " + userNum);
br();

// 랜덤 번호들
var lottoNum = []

for (var i = 0; i < 6; i++) {
    let flag = false;
    var randomNum = Math.floor(Math.random() * 45) + 1;
    for (var j = 0; j < lottoNum.length; j++) {
        if(randomNum == lottoNum[j]) {
            flag = true;
            break;
        }
    }
    if(flag == true) {
        i--;
    }
    else {
        lottoNum[i] = randomNum;
    }
}

document.write("로또 번호" + lottoNum);
br();

var bonusNum;
while (true) {
    var r = Math.floor(Math.random() * 45) + 1;
    var duplicate = false;
    
    for (var i = 0; i < 6; i++) {
        if (lottoNum[i] == r) {
            duplicate = true;
            break;
        }
    }
    
    if (duplicate == false) {
        bonusNum = r;
        break;
    }
}

document.write("보너스 번호 : " + bonusNum);
br();

// --- 당첨 확인 (기존 win 계산 후) ---
var win = 0;
for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
        if (userNum[i] == lottoNum[j]) {
            win = win + 1;
        }
    }
}

var bonusMatch = false;
for (var i = 0; i < 6; i++) {
    if (userNum[i] == bonusNum) {
        bonusMatch = true;
        break;
    }
}


switch (win) {
    case 6:
        document.write("1등입니다! 상금:일억원");
        break;
    case 5:
        if (bonusMatch == true) {
            document.write("2등입니다! 상금:오백만원");
        } else {
            document.write("3등입니다! 상금:백만원");
        }
        break;
    case 4:
        document.write("4등입니다! 상금:오만원");
        break;
    case 3:
        document.write("5등입니다! 상금:오천원");
        break;
    default:
        document.write("꽝!!");
} 