/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 * Code by: AJ Prescott
 */

var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function() {
    $("InstructorSubmitButton").onclick = fnISubmit;
};

const codeChars = 'ABCDEFGHJKLMNPQRSTUVWXY3456789';

function generateAccessCode(codeLength) {
    let accessCode = '';
    const codeCharsLength = codeChars.length;
    for (let i = 0; i < codeLength; i++) {
        accessCode += codeChars.charAt(Math.floor(Math.random() * codeCharsLength));
    }
    
    return accessCode;
};

function fnISubmit() {
    var iremoveAll = document.getElementById("InstructorCourses");
    var iCourse = $("courseDropdown").value.trim();
    var accessCode = generateAccessCode(11);
    if (iCourse === "") {
        $("InstructorError").innerHTML = "Invalid Course Selection";
        $("InstructorSuccess").innerHTML = "";
    } else if (iCourse === "Course 1") {
        iremoveAll.parentNode.removeChild(iremoveAll);
        $("InstructorSuccess").innerHTML = "Your access code for course 1 is <u>"
        + accessCode + "</u>";
    } else if (iCourse === "Course 2") {
        iremoveAll.parentNode.removeChild(iremoveAll);
        $("InstructorSuccess").innerHTML = "Your access code for course 2 is <u>"
        + accessCode + "</u>";
    } else if (iCourse === "Course 3") {
        iremoveAll.parentNode.removeChild(iremoveAll);
        $("InstructorSuccess").innerHTML = "Your access code for course 3 is <u>"
        + accessCode + "</u>";
    } else {
        $("InstructorError").innerHTML = "Invalid Course Selection";
    }
}

function fneditCourse() {
    var iCourse = $("courseDropdown").value.trim();
    if (iCourse === "Course 1" || iCourse === "Course 2" || iCourse === "Course 3") {
        window.location.href='CourseEditor.html';
    } else {
        $("InstructorError").innerHTML = "Invalid Course Selection";
        $("InstructorSuccess").innerHTML = "";
    }
}
