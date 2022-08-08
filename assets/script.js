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
function checkTime() {
    var hour = $("#01").attr("id");
    var scheduledHour =  parseInt(hour);
    //console.log(hour);
    var now = moment().format("HH");
    //console.log(now);
    
    //console.log(actualTime);
    scheduledHour = parseInt(hour);
    $(".row").removeClass(".present .past .future");
   // console.log(scheduledHour);
    //console.log(typeof(scheduledHour));
    if (scheduledHour === now) {
        $(".row").addClass(".present");
    } else if (hour > now) {
        $(".row").addClass(".future");
    } else {
        $(".row").addClass(".past");
    }
}
checkTime();