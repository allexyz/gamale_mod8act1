var fullName = prompt("Please enter your full name:");
var username = prompt("Please enter your username:");

if(confirm("What is your gender?\nPress OK if you are Male\nCancel if Female") == true){
	var gender = "M";
	alert("Your profile gender is set to MALE");
} else{
	var gender = "F";
	alert("Your profile gender is set to FEMALE");
}

var description = prompt("Please type a brief description of yourself:");
var birthYear = prompt("Please enter your Birth Year:");
var age = 2023 - parseInt(birthYear);

if (confirm("Do you want to use a custom profile picture?") == true){
	var pic = prompt("Enter the file name of the picture. (Ex: wow.jpg )");
} else{
	alert("No image has been set.");
	var pic = "prof.png";
}

document.getElementById("fname").innerHTML = fullName;
document.getElementById("username").innerHTML = username;
document.getElementById("gender").innerHTML = gender;
document.getElementById("desc").innerHTML = description;
document.getElementById("year").innerHTML = birthYear;
document.getElementById("age").innerHTML = age;
document.getElementById("ppic").src = pic;