/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function() {
    $("InstructorSubmitButton").onclick = fnISubmit;
};

function fnISubmit() {
    var iremoveAll = document.getElementById("InstructorCourses");
    var iCourse = $("courseDropdown").value.trim();
    if (iCourse === "") {
        $("InstructorError").innerHTML = "Invalid Course Selection";
        $("InstructorSuccess").innerHTML = "";
    } else if (iCourse === "Course 1") {
        iremoveAll.parentNode.removeChild(iremoveAll);
        $("InstructorSuccess").innerHTML = "Your access code for course 1 is <u>123</u>";
    } else if (iCourse === "Course 2") {
        iremoveAll.parentNode.removeChild(iremoveAll);
        $("InstructorSuccess").innerHTML = "Your access code for course 2 is <u>456</u>";
    } else if (iCourse === "Course 3") {
        iremoveAll.parentNode.removeChild(iremoveAll);
        $("InstructorSuccess").innerHTML = "Your access code for course 3 is <u>789</u>";
    } else {
        $("InstructorError").innerHTML = "Invalid Course Selection";
    }
}