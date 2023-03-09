function generatePassword() {
	var length = document.getElementById("length").value;
	var password = "";
	var allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#!$%&'()*+,-./:;<=>?@[\]^_`{|}~";
	for (var i = 0; i < length; i++) {
		password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
	}
	document.getElementById("password").value = password;
}
