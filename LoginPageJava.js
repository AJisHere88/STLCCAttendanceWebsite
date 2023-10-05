/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 * Code by: AJ Prescott
 */

var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function() {
    $("UserClearButton").onclick = fnClear;
    $("ShowPassword").onclick = fnShowPassword;
    $("UserSubmitButton").onclick = fnSubmit;
    $("UserEmail").focus();
};

function fnClear() {
    $("UserLoginForm").reset();
    $("UserError").innerHTML = "";
    $("UserEmail").focus();
};

function fnShowPassword() {
    var show = $("UserPassword");
    
    if (show.type === "password") {
        show.type = "text";
    } else {
        show.type = "password";
    }
    $("UserPassword").focus();
}

function fnSubmit() {
    var uEmail = $("UserEmail").value.trim();
    var uPassword = $("UserPassword").value.trim();
    if (uEmail === "" || uPassword === "" || (uEmail.substring(uEmail.length - 13) !== "@my.stlcc.edu" && 
        uEmail.substring(uEmail.length - 10) !== "@stlcc.edu")) {
        $("UserError").innerHTML = "Invalid Username or Password";
        $("UserSuccess").innerHTML = "";
    } else {
        if (uEmail.substring(uEmail.length - 13) === "@my.stlcc.edu") {
            window.location.replace("StudentSTLCCAttendance.html");
        } else if (uEmail.substring(uEmail.length - 10) === "@stlcc.edu") {
            window.location.replace("InstructorSTLCCAttendance.html");
        }
        }
};
