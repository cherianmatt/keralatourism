var email = document.getElementById('email')
var pwd = document.getElementById('pwd')

function validate(){
	if (pwd.value.length<=8){
		alert("Password too short");
		return false;
	}
	else{
		return true;
	}
}