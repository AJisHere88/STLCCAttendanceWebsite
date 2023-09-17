/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function() {
    $("StudentSubmitButton").onclick = fnSSubmit;
    $("AccessCode").focus();
};

function fnSSubmit() {
    var sremoveAll = document.getElementById("studentCodeInput");
    var aCode = $("AccessCode").value.trim();
    if (aCode === "") {
        $("StudentError").innerHTML = "Invalid Access Code";
        $("StudentSuccess").innerHTML = "";
    } else {
        sremoveAll.parentNode.removeChild(sremoveAll);
        $("StudentSuccess").innerHTML = "You're present and accounted for!";
    }
}