var weekDay = moment().format("dddd MMM Do, YYYY");
$("#currentDay").text(weekDay);

function btnClicked(hour) {
    var input = $("#input" + hour);
    //console.log(typeof(input));

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
function checkTime(xyz,generalHourID) {
const listOfTime = {
    background09: 9,
    background10: 10,
    background11: 11,
    background12: 12,
    background13: 13,
    background14: 14,
    background15: 15,
    background16: 16,
    background17: 17,
};

var currentHour = moment().hour();
//$(".row").removeClass(".present .past .future");
for (const key in listOfTime) {
    var backgroundEl = $("#" + key)
    if (listOfTime[key] === currentHour) {
        //var idBackground = $("#input" + hour);
        //console.log(idBackground);
        backgroundEl.css("background-color", "#ff6961");
    } else if (listOfTime[key] < currentHour) {
        backgroundEl.css("background-color", "#d3d3d3");
    } else {
        backgroundEl.css("background-color", "#77dd77");
    }
}
}
checkTime();
