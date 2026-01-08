var str_id = "";
var str_pw = "";
var input_id;
var input_pw;
var divX;
var box;
window.onload = function(){ // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐
    input_id = document.getElementById("id_text");
    input_pw = document.getElementById("password_text");
    divX = document.getElementById("x");
}
function login(){
    // alert("id:"+str_id+" pw:"+str_pw);
    // alert("id:"+input_id.value+" pw:"+input_pw.value);

    var local_id = input_id.value;
    var local_pw = input_pw.value;

    if(local_id == "cat" && local_pw == "1234"){
        input_id.style.display = "none";
        input_pw.style.display = "none";
        divX.innerHTML = local_id+" 회원님 반갑습니다.";
    }else{
        alert("로그인 실패");
    }
}