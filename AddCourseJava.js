/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 * Code by AJ Prescott
 */

var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function() {
    $("CourseClearButton").onclick = fnClear;
    $("CourseSubmitButton").onclick = fnSubmit;
    $("courseCode").focus();
};

function fnClear() {
    $("addCourseForm").reset();
    $("CourseError").innerHTML = "";
    $("courseCode").focus();
};

function fnSubmit() {
    var iremoveAll = document.getElementById("allCourseInfo");
    var code = $("courseCode").value.trim();
    var name = $("courseName").value.trim();
    var instructorid = $("instructorID").value.trim();
    var start = $("startTime").value.trim();
    var end = $("endTime").value.trim();
    if (code === "" || name === "" || instructorid === "" || start === "" || 
        end === "") {
        $("CourseError").innerHTML = "All areas must be filled.";
        $("CourseSuccess").innerHTML = "";
    } else {
        iremoveAll.parentNode.removeChild(iremoveAll);
        $("CourseSuccess").innerHTML = name + " was successfully added!";
    }
        
};
