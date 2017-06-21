// ==UserScript==
// @name         Delaware Defensive Driving Online Course Macro
// @namespace    https://github.com/dpain/
// @version      1.0
// @description  Automatically clicks the next button whenever available.
// @author       D_Pain
// @match https://course.uceusa.com/Courses/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// ==/UserScript==

// How to use:
//https://course.uceusa.com/Courses/content/701/index.aspx
//Go to the link above and start from the first page. When you are at a page that starts with "https://course.uceusa.com/Courses/"
//Use Tampermonkey to apply this script. The script only runs
//https://course.uceusa.com/Courses/content/701/page_xx.aspx?
//the 2 x is the page number.
//https://course.uceusa.com/Courses/content/701/page_370.aspx? is the final exam page. You can't directly go to the exam page so you have to literally go through all the previous pages and wait till the times passed.
//This script automatically clicks the next button when the time goes to 00:00:00.
//Every now and then you might get to the last part of each module which would lead you back to the index page when you run this code.
//Just guesstimate which page you can resume and manually go to that page. For example: https://course.uceusa.com/Courses/content/701/page_300.aspx? Might be the start of module 4.
//This script skips the quizzes in between the modules as they are not a requirement to finish the course. (The developer of the website were stupid enough to not implement a check function.)
//Every now and then the website asks you security questions and the script will not be able to answer those, thus redirecting you to the login screen or something like that.
//Hope you use this well to easily finish this pointless online course.

//Appending Jquery to run the macro
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var LIMIT = 370;

console.log("Script started!");

$('#TimeRemainingClock').bind("DOMSubtreeModified",function(){
    setTimeout(function(){
        if($("#TimeRemainingClock").text() == '00:00:00') {
            window.location.href = "https://course.uceusa.com/Courses/content/701/" + $(".topnav a:last-child").attr('href');
        }
    }, 1000);
});
