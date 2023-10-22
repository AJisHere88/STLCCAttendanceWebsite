/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 * Code by AJ Prescott
 */


var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function() {
    $("addStudent").onclick = fnAdd;
    $("removeStudent").onclick = fnRemove;
    $("editStudent").onclick = fnEdit;
};

function fnAdd() {
    var uEmail = $("UserEmail").value.trim();
    var uPassword = $("UserPassword").value.trim();
    if (uEmail === "" || uEmail.substring(uEmail.length - 13) !== "@my.stlcc.edu") {
        $("UserError").innerHTML = "Email must end in @my.stlcc.edu";
        $("studentAdd").innerHTML = "";
        $("studentRemove").innerHTML = "";
        $("studentEdit").innerHTML = "";
    } else if (uEmail.length < 14) {
        $("UserError").innerHTML = "Something must be entered before @my.stlcc.edu";
        $("studentAdd").innerHTML = "";
        $("studentRemove").innerHTML = "";
        $("studentEdit").innerHTML = "";
    } else if (uPassword.length < 6) {
        $("UserError").innerHTML = "Password must be 6+ characters";
        $("studentAdd").innerHTML = "";
        $("studentRemove").innerHTML = "";
        $("studentEdit").innerHTML = "";
    } else {
        $("UserError").innerHTML = "";
        $("studentAdd").innerHTML = uEmail.substring(0, uEmail.length - 13) + " was added.";
        $("studentRemove").innerHTML = "";
        $("studentEdit").innerHTML = "";
    }
}

function fnRemove() {
    var uEmail = $("UserEmail").value.trim();
    if (uEmail === "" || uEmail.substring(uEmail.length - 13) !== "@my.stlcc.edu") {
        $("UserError").innerHTML = "Email must end in @my.stlcc.edu";
        $("studentAdd").innerHTML = "";
        $("studentRemove").innerHTML = "";
        $("studentEdit").innerHTML = "";
    } else if (uEmail.length < 14) {
        $("UserError").innerHTML = "Something must be entered before @my.stlcc.edu";
        $("studentAdd").innerHTML = "";
        $("studentRemove").innerHTML = "";
        $("studentEdit").innerHTML = "";
    } else {
        $("UserError").innerHTML = "";
        $("studentAdd").innerHTML = "";
        $("studentRemove").innerHTML = uEmail.substring(0, uEmail.length - 13) + " was removed.";
        $("studentEdit").innerHTML = "";
    }
}

function fnEdit() {
    var uEmail = $("UserEmail").value.trim();
    var uPassword = $("UserPassword").value.trim();
    if (uEmail === "" || uEmail.substring(uEmail.length - 13) !== "@my.stlcc.edu") {
        $("UserError").innerHTML = "Email must end in @my.stlcc.edu";
        $("studentAdd").innerHTML = "";
        $("studentRemove").innerHTML = "";
        $("studentEdit").innerHTML = "";
    } else if (uEmail === "invalid@my.stlcc.edu") {
        $("UserError").innerHTML = "That student is not enrolled in this course";
        $("studentAdd").innerHTML = "";
        $("studentRemove").innerHTML = "";
        $("studentEdit").innerHTML = "";
    } else if (uEmail.length < 14) {
        $("UserError").innerHTML = "Something must be entered before @my.stlcc.edu";
        $("studentAdd").innerHTML = "";
        $("studentRemove").innerHTML = "";
        $("studentEdit").innerHTML = "";
    } else if (uPassword.length < 6) {
        $("UserError").innerHTML = "New password must be 6+ characters";
        $("studentAdd").innerHTML = "";
        $("studentRemove").innerHTML = "";
        $("studentEdit").innerHTML = "";
    } else {
        $("UserError").innerHTML = "";
        $("studentAdd").innerHTML = "";
        $("studentRemove").innerHTML = "";
        $("studentEdit").innerHTML = uEmail.substring(0, uEmail.length - 13) + "'s password was changed.";
    }
}
