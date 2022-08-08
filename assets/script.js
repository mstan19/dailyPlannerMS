//console.log("ji")
var addEvent = $("#nineAMevent");
// var saveBtn = 

var weekDay = moment().format("dddd MMM Do, YYYY");
$("#currentDay").text(weekDay);

function btnClicked(hour) {
    var input = $("#input" + hour);
    //console.log(input.val())

saveToLS(input);
}

//cat is recieving the value of input
function saveToLS(cat) {
    var printInput = cat.val();
    localStorage.setItem("event", printInput);
}

function displayEvent () {
    var getEvent = localStorage.getItem("event");
    //console.log(localStorage.getItem("event"));
    $("#input9").text(getEvent);
} 

displayEvent ();

//time
function checkTime(xyz,h) {
    var htmlHour = $("#background" + xyz);
    ///var htmlHour = $("#background02")
    var hour = $("#02").attr("id");
    var scheduledHour =  parseInt(hour);
    //console.log(hour);
    var now = moment().format("HH");
    var currentHour = parseInt(now);
    //console.log(now);
   // var row =  $(".row");

    
    //console.log(actualTime);
    scheduledHour = parseInt(hour);
    //$(".row").removeClass(".present .past .future");
    //console.log(row);
    //console.log(scheduledHour);
    //console.log(typeof(currentHour));
    if (scheduledHour === currentHour) {
        //var idBackground = $("#input" + hour);
        //console.log(idBackground);
        htmlHour.css("background-color", "red");
    }
    // } else if (hour > currentHour) {
    //     $(".row").addClass(".future");
    // } else {
    //     $(".row").addClass(".past");
    // }
}
checkTime();